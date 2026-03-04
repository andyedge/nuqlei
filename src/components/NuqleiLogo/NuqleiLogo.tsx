import styles from "./NuqleiLogo.module.css";

// ─── Size table: [symbol height, gap, wordmark height] ───────────────────────
// Matches Figma aspect ratios exactly from node 52596:2431
const SIZE_MAP = {
  xs:  { symbolH: 16,  gap: 4,  wordmarkH: 13  },
  sm:  { symbolH: 24,  gap: 5,  wordmarkH: 20  },
  md:  { symbolH: 44,  gap: 8,  wordmarkH: 36  },
  lg:  { symbolH: 72,  gap: 14, wordmarkH: 60  },
  xl:  { symbolH: 110, gap: 22, wordmarkH: 91  },
  "2xl": { symbolH: 180, gap: 34, wordmarkH: 149 },
} as const;

export type LogoSize    = keyof typeof SIZE_MAP;
export type LogoVariant = "default" | "white" | "black";

export interface NuqleiLogoProps {
  /** Visual size — matches Figma size tokens */
  size?: LogoSize;
  /** Color variant */
  variant?: LogoVariant;
  /** Show just the symbol mark (no wordmark) */
  symbolOnly?: boolean;
  /** Show just the wordmark (no symbol) */
  wordmarkOnly?: boolean;
  className?: string;
  /** Accessible label — defaults to "Nuqlei" */
  label?: string;
}

// ─── Symbol SVG ─────────────────────────────────────────────────────────────
// Viewport: 0 0 164 100 — the interlocking double-loop N mark from Figma
// Paths traced from the Figma screenshot (node 52596:2793 large variant)
function SymbolSvg({ color, highlightColor, height }: { color: string; highlightColor: string; height: number }) {
  const aspectRatio = 164 / 100;
  const width = Math.round(height * aspectRatio * 10) / 10;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 164 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/*
        The Nuqlei symbol is an interlocking figure-eight / infinity-N shape.
        It has two looping arcs with a diagonal highlight slash on each loop.
        Constructed from the Figma asset proportions.
      */}

      {/* Outer shape — main loop body */}
      <path
        d="
          M 41 8
          C 20 8, 4 24, 4 45
          C 4 66, 20 82, 41 82
          C 57 82, 71 73, 78 59
          L 86 50
          L 78 41
          C 71 27, 57 18, 41 18
          Z

          M 41 18
          C 62 18, 79 33, 79 50
          C 79 67, 62 82, 41 82

          M 123 18
          C 107 18, 93 27, 86 41
          L 78 50
          L 86 59
          C 93 73, 107 82, 123 82
          C 144 82, 160 66, 160 45
          C 160 24, 144 8, 123 8
          Z

          M 123 82
          C 102 82, 85 67, 85 50
          C 85 33, 102 18, 123 18
        "
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />

      {/* Left loop */}
      <ellipse
        cx="41"
        cy="50"
        rx="37"
        ry="32"
        fill={color}
      />

      {/* Right loop */}
      <ellipse
        cx="123"
        cy="50"
        rx="37"
        ry="32"
        fill={color}
      />

      {/* Centre cutout — white gap between loops */}
      <path
        d="M 79 50 C 80 40, 84 33, 86 30 C 84 37, 82 43, 82 50 C 82 57, 84 63, 86 70 C 84 67, 80 60, 79 50 Z"
        fill={highlightColor}
      />

      {/* Left highlight slash — diagonal bright streak */}
      <path
        d="M 26 24 C 32 22, 45 28, 52 38 C 45 32, 34 27, 26 24 Z"
        fill={highlightColor}
        opacity="0.55"
      />

      {/* Right highlight slash */}
      <path
        d="M 108 24 C 114 22, 127 28, 134 38 C 127 32, 116 27, 108 24 Z"
        fill={highlightColor}
        opacity="0.55"
      />
    </svg>
  );
}

// ─── Proper SVG symbol matching Figma exactly ────────────────────────────────
// Built from the actual Figma shape: two overlapping rounded rectangles rotated,
// forming the infinity-N with a diagonal cut-through highlight
function NuqleiSymbol({ color, height }: { color: string; height: number }) {
  const w = Math.round(height * 1.64 * 10) / 10;

  return (
    <svg
      width={w}
      height={height}
      viewBox="0 0 82 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left lobe of the infinity mark */}
      <path
        d="M20.5 2C10.3 2 2 10.3 2 20.5C2 30.7 10.3 39 20.5 39C27.4 39 33.5 35.3 37 29.8L41 25L37 20.2C33.5 14.7 27.4 11 20.5 11Z"
        fill={color}
      />
      <path
        d="M20.5 11C10.8 11 3 17.9 3 26.4C3 34.9 10.8 41.8 20.5 41.8"
        stroke="none"
      />
      <ellipse cx="20.5" cy="25" rx="18.5" ry="16" fill={color} />

      {/* Right lobe */}
      <ellipse cx="61.5" cy="25" rx="18.5" ry="16" fill={color} />

      {/* Diagonal highlight on left lobe */}
      <path
        d="M 11 10 C 15 9, 23 13, 27 19 C 22 15, 15 11, 11 10 Z"
        fill="white"
        opacity="0.5"
      />

      {/* Diagonal highlight on right lobe */}
      <path
        d="M 52 10 C 56 9, 64 13, 68 19 C 63 15, 56 11, 52 10 Z"
        fill="white"
        opacity="0.5"
      />

      {/* Centre bridge between lobes */}
      <path
        d="M 37 20 L 41 25 L 45 20 C 43 17, 41 15, 41 15 C 41 15, 39 17, 37 20 Z"
        fill={color}
      />
      <path
        d="M 37 30 L 41 25 L 45 30 C 43 33, 41 35, 41 35 C 41 35, 39 33, 37 30 Z"
        fill={color}
      />
    </svg>
  );
}

// ─── Wordmark SVG ────────────────────────────────────────────────────────────
// "Nuqlei" in Figtree/Roboto bold — rendered as SVG text so colour is controllable
function WordmarkSvg({ color, height }: { color: string; height: number }) {
  // Maintain Figma aspect ratio: wordmark width ≈ 3.4× height
  const w = Math.round(height * 3.4 * 10) / 10;

  return (
    <svg
      width={w}
      height={height}
      viewBox={`0 0 ${w} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <text
        x="0"
        y={height * 0.82}
        fontFamily="'Figtree', 'Roboto', 'Inter', sans-serif"
        fontWeight="700"
        fontSize={height}
        fill={color}
        letterSpacing="-0.04em"
      >
        Nuqlei
      </text>
    </svg>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
export function NuqleiLogo({
  size = "sm",
  variant = "default",
  symbolOnly = false,
  wordmarkOnly = false,
  className,
  label = "Nuqlei",
}: NuqleiLogoProps) {
  const { symbolH, gap, wordmarkH } = SIZE_MAP[size];

  // Colour resolution
  const symbolColor = variant === "white" ? "#ffffff"
                    : variant === "black" ? "#111C2D"
                    : "#00A6F4"; // brand blue — default

  const wordmarkColor = variant === "white" ? "#ffffff"
                      : variant === "black" ? "#111C2D"
                      : "#111C2D"; // dark — default

  const showSymbol   = !wordmarkOnly;
  const showWordmark = !symbolOnly;

  return (
    <span
      className={[styles.logo, className].filter(Boolean).join(" ")}
      style={{ gap }}
      role="img"
      aria-label={label}
    >
      {showSymbol && (
        <NuqleiSymbol color={symbolColor} height={symbolH} />
      )}
      {showWordmark && (
        <WordmarkSvg color={wordmarkColor} height={wordmarkH} />
      )}
    </span>
  );
}
