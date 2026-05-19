const data = window.NEXORA_VIDEO;
const duration = data.duration || 90;
let time = 0;
let playing = false;
let lastTick = 0;

const stage    = document.querySelector(".nxv-stage");
const play     = document.querySelector("[data-play]");
const restart  = document.querySelector("[data-restart]");
const scrubber = document.querySelector("[data-scrubber]");

function sceneIndex(now) {
  let index = data.scenes.findIndex((scene) => now >= scene.start && now < scene.end);
  return index < 0 ? data.scenes.length - 1 : index;
}

function renderVisual(scene) {
  // ── Terminal ────────────────────────────────────────────────────────────────
  if (scene.kind === "terminal") {
    return `<div class="nxv-terminal"><header><span></span><span></span><span></span></header><pre>${scene.visual}</pre></div>`;
  }

  // ── Metric tiles ────────────────────────────────────────────────────────────
  if (scene.kind === "metrics") {
    return `<div class="nxv-metric">${
      scene.visual.map((item) =>
        `<div><span>${item.label}</span><strong>${item.value}</strong></div>`
      ).join("")
    }</div>`;
  }

  // ── Numbered steps with arrows ───────────────────────────────────────────────
  if (scene.kind === "steps") {
    return `<div class="nxv-steps">${
      scene.visual.map((item, i) =>
        `<div class="nxv-step-item">
          <div class="nxv-step-num">${i + 1}</div>
          <strong>${item.label}</strong>
          ${item.sub ? `<small>${item.sub}</small>` : ""}
        </div>
        ${i < scene.visual.length - 1 ? `<div class="nxv-step-arr">&#8594;</div>` : ""}`
      ).join("")
    }</div>`;
  }

  // ── Checklist with tick marks ────────────────────────────────────────────────
  if (scene.kind === "checklist") {
    return `<div class="nxv-checklist">${
      scene.visual.map((item) =>
        `<div class="nxv-check">
          <div class="nxv-check-icon">
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10.5l4 4 8-8" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="nxv-check-body">
            <strong>${item.label}</strong>
            ${item.sub ? `<small>${item.sub}</small>` : ""}
          </div>
        </div>`
      ).join("")
    }</div>`;
  }

  // ── Before / after comparison columns ───────────────────────────────────────
  if (scene.kind === "comparison") {
    return `<div class="nxv-compare">${
      scene.visual.map((col) =>
        `<div class="nxv-compare-col ${col.type || ""}">
          <div class="nxv-compare-head">${col.head}</div>
          ${col.items.map((item) => `<div class="nxv-compare-item">${item}</div>`).join("")}
        </div>`
      ).join("")
    }</div>`;
  }

  // ── Toggle switches ──────────────────────────────────────────────────────────
  if (scene.kind === "toggle") {
    return `<div class="nxv-toggles">${
      scene.visual.map((item) =>
        `<div class="nxv-toggle-row">
          <span class="nxv-toggle-label">${item.label}</span>
          <div class="nxv-toggle-sw ${item.on ? "is-on" : "is-off"}">
            <div class="nxv-toggle-knob"></div>
          </div>
          <span class="nxv-toggle-val ${item.on ? "is-on" : "is-off"}">${item.value}</span>
        </div>`
      ).join("")
    }</div>`;
  }

  // ── Default pill / row panel ─────────────────────────────────────────────────
  return `<div class="nxv-panel"><div class="nxv-list">${
    scene.visual.map((item) =>
      `<div class="${item.type === "row" ? "nxv-row" : "nxv-pill"}">
        <span>${item.label}</span><strong>${item.value || ""}</strong>
      </div>`
    ).join("")
  }</div></div>`;
}

function render() {
  stage.innerHTML = `
    <div class="nxv-brand">
      <div class="nxv-logo">N</div>
      <div><strong>Nexora Engine</strong><span>${data.label}</span></div>
    </div>
    ${data.scenes.map((scene, index) => `
      <article class="nxv-scene" data-scene="${index}">
        ${scene.final ? `
          <div class="nxv-final">
            <div>
              <div class="nxv-logo">N</div>
              <h1>${scene.title}</h1>
              <p>${scene.body}</p>
            </div>
          </div>
        ` : `
          <div class="nxv-copy">
            <span class="nxv-eyebrow">${scene.eyebrow}</span>
            <h1>${scene.title}</h1>
            <p>${scene.body}</p>
          </div>
          <div class="nxv-visual">${renderVisual(scene)}</div>
        `}
      </article>
    `).join("")}
  `;
}

function update(now) {
  time = Math.max(0, Math.min(duration, now));
  const index = sceneIndex(time);
  document.querySelectorAll(".nxv-scene").forEach((scene, sceneIndex) => {
    scene.classList.toggle("is-active", sceneIndex === index);
  });
  scrubber.value = String(time);
  play.textContent = playing ? "Pause" : (time >= duration ? "Replay" : "Play");
  if (time >= duration) playing = false;
}

function tick(timestamp) {
  if (!lastTick) lastTick = timestamp;
  const delta = (timestamp - lastTick) / 1000;
  lastTick = timestamp;
  if (playing) update(time + delta);
  requestAnimationFrame(tick);
}

play.addEventListener("click", () => {
  if (time >= duration) update(0);
  playing = !playing;
  lastTick = 0;
  update(time);
});

restart.addEventListener("click", () => {
  playing = false;
  update(0);
});

scrubber.addEventListener("input", (event) => {
  playing = false;
  update(Number(event.target.value));
});

scrubber.max = String(duration);
render();
update(0);

// Autoplay when opened from modal (?autoplay=1)
if (new URLSearchParams(window.location.search).has("autoplay")) {
  playing = true;
}

requestAnimationFrame(tick);
