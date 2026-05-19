const duration = 60;
const params = new URLSearchParams(window.location.search);
const publicMode = params.has("embed") || params.has("public") || params.has("record");

const scenes = [
  {
    start: 0,
    end: 10,
    script: "WordPress is powerful, but every normal page request has a cost: PHP boots, plugins load, the theme renders, and database queries run."
  },
  {
    start: 10,
    end: 21,
    script: "At scale, that becomes slow and expensive. Nexora Engine turns WordPress into a static delivery machine without rebuilding the site."
  },
  {
    start: 21,
    end: 32,
    script: "Nexora captures pre-rendered HTML snapshots and serves those static versions directly to visitors."
  },
  {
    start: 32,
    end: 43,
    script: "No database hit. No plugin stack execution. In testing, Nexora served pages in around 22 milliseconds with zero PHP execution."
  },
  {
    start: 43,
    end: 52,
    script: "Editors still work normally. Gutenberg, Elementor, WooCommerce, SEO plugins, themes, and content stay inside WordPress."
  },
  {
    start: 52,
    end: 60,
    script: "Nexora adds a static delivery layer in front of the public site: faster pages, lower server load, no workflow disruption."
  }
];

let currentTime = 0;
let playing = false;
let lastTick = 0;

const stage = document.getElementById("stage");
const timelineFill = document.getElementById("timelineFill");
const captionTime = document.getElementById("captionTime");
const captionText = document.getElementById("captionText");
const scrubber = document.getElementById("scrubber");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const restartBtn = document.getElementById("restartBtn");
const scriptList = document.getElementById("scriptList");
const publicPlayPause = document.getElementById("publicPlayPause");
const publicRestart = document.getElementById("publicRestart");
const publicScrubber = document.getElementById("publicScrubber");
const publicTime = document.getElementById("publicTime");

if (publicMode) {
  document.querySelector(".video-shell")?.classList.add("is-public");
  document.body.classList.add("public-video");
}

function formatTime(seconds) {
  const safe = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function activeSceneIndex(time) {
  return Math.min(
    scenes.length - 1,
    Math.max(0, scenes.findIndex((scene) => time >= scene.start && time < scene.end))
  );
}

function renderScriptList() {
  scriptList.innerHTML = scenes
    .map((scene, index) => `<li data-index="${index}"><strong>${formatTime(scene.start)}-${formatTime(scene.end)}</strong><br>${scene.script}</li>`)
    .join("");
}

function update(time) {
  currentTime = Math.min(duration, Math.max(0, time));
  const index = activeSceneIndex(currentTime);

  document.querySelectorAll(".scene").forEach((scene, sceneIndex) => {
    scene.classList.toggle("active", sceneIndex === index);
  });

  document.querySelectorAll("#scriptList li").forEach((item, itemIndex) => {
    item.classList.toggle("active", itemIndex === index);
  });

  timelineFill.style.width = `${(currentTime / duration) * 100}%`;
  scrubber.value = currentTime.toFixed(1);
  if (publicScrubber) publicScrubber.value = currentTime.toFixed(1);
  captionTime.textContent = formatTime(currentTime);
  captionText.textContent = scenes[index].script;
  if (publicTime) publicTime.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
  if (publicPlayPause) {
    publicPlayPause.textContent = playing ? "Pause" : "Play";
    publicPlayPause.setAttribute("aria-label", playing ? "Pause video" : "Play video");
  }

  if (currentTime >= duration) {
    playing = false;
    if (publicPlayPause) {
      publicPlayPause.textContent = "Replay";
      publicPlayPause.setAttribute("aria-label", "Replay video");
    }
  }
}

function tick(timestamp) {
  if (!lastTick) lastTick = timestamp;
  const delta = (timestamp - lastTick) / 1000;
  lastTick = timestamp;

  if (playing) {
    update(currentTime + delta);
  }

  requestAnimationFrame(tick);
}

playBtn.addEventListener("click", () => {
  if (currentTime >= duration) update(0);
  playing = true;
  lastTick = 0;
});

pauseBtn.addEventListener("click", () => {
  playing = false;
});

restartBtn.addEventListener("click", () => {
  playing = false;
  update(0);
});

scrubber.addEventListener("input", (event) => {
  playing = false;
  update(Number(event.target.value));
});

publicPlayPause?.addEventListener("click", () => {
  if (currentTime >= duration) update(0);
  playing = !playing;
  lastTick = 0;
  update(currentTime);
});

publicRestart?.addEventListener("click", () => {
  playing = false;
  update(0);
});

publicScrubber?.addEventListener("input", (event) => {
  playing = false;
  update(Number(event.target.value));
});

stage.addEventListener("dblclick", () => {
  if (!document.fullscreenElement) {
    stage.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
});

renderScriptList();
update(0);

if (params.has("autoplay")) {
  playing = true;
}

requestAnimationFrame(tick);
