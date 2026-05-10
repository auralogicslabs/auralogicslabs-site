interface AuralogicsLogoProps {
  width?: number;
  height?: number;
  showTagline?: boolean;
  className?: string;
}

export function AuralogicsLogo({
  width = 400,
  height = 100,
  showTagline = true,
  className = ""
}: AuralogicsLogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 600 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Geometric Icon - Based on exact measurements from original */}
      <g transform="translate(0, 25)">
        {/* Dark Navy Parallelogram - main shape */}
        <path
          d="M 8 0 L 45 0 L 60 75 L 23 75 Z"
          fill="#12182E"
        />

        {/* Blue Triangle - bottom left accent */}
        <path
          d="M 8 75 L 37 75 L 58 100 L 8 100 Z"
          fill="#2563EB"
        />

        {/* Blue Square - bottom right element */}
        <rect
          x="75"
          y="80"
          width="25"
          height="20"
          rx="2"
          fill="#2563EB"
        />
      </g>

      {/* Vertical Divider Line */}
      <line
        x1="130"
        y1="30"
        x2="130"
        y2="125"
        stroke="#D1D5DB"
        strokeWidth="1.5"
      />

      {/* Auralogics Text - Main Brand Name */}
      <text
        x="150"
        y="85"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="50"
        fontWeight="800"
        fill="#0F172A"
        letterSpacing="-0.5"
      >
        Auralogics
      </text>

      {/* LABS Text - Subtitle */}
      <text
        x="150"
        y="108"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="17"
        fontWeight="700"
        fill="#2563EB"
        letterSpacing="5.5"
      >
        L A B S
      </text>

      {/* Tagline - Infrastructure Intelligence Platform */}
      {showTagline && (
        <text
          x="150"
          y="128"
          fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          fontSize="9.5"
          fontWeight="500"
          fill="#6B7280"
          letterSpacing="2.2"
        >
          INFRASTRUCTURE INTELLIGENCE PLATFORM
        </text>
      )}
    </svg>
  );
}

export function AuralogicsIcon({
  size = 80,
  className = ""
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Dark Navy Parallelogram */}
      <path
        d="M 5 5 L 55 5 L 75 75 L 25 75 Z"
        fill="#12182E"
      />

      {/* Blue Triangle */}
      <path
        d="M 5 75 L 42 75 L 70 95 L 5 95 Z"
        fill="#2563EB"
      />

      {/* Blue Square */}
      <rect
        x="77"
        y="78"
        width="18"
        height="17"
        rx="1"
        fill="#2563EB"
      />
    </svg>
  );
}
