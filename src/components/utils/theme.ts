/**
 * Shared theme class fragments inspired by src/App.tsx styling.
 * Use these tokens to keep components visually consistent.
 */
export const tokens = {
	border: "border border-(--border)",
	panel: "border border-(--border) bg-(--panel-bg)",
	panelMuted: "border border-(--border) bg-(--panel-muted-bg)",
	surfaceMuted: "bg-(--panel-muted-bg)",
	rounded: "rounded-(--radius)",
	roundedLg: "rounded-(--radius-lg)",
	roundedXl: "rounded-(--radius-xl)",
	text: {
		base: "text-(--foreground)",
		muted: "text-(--muted)",
		dim: "text-(--muted)",
		inverse: "text-black",
	},
	focus: {
		ringEmerald:
			"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-0",
	},
	transition: "transition-colors duration-150",
} as const;

export const accents = {
	emerald: {
		bg: "bg-(--accent-green)",
		bgHover: "hover:bg-(--accent-green-hover)",
		text: "text-black",
		mutedBg: "bg-[color-mix(in_oklab,var(--accent-green)_15%,transparent)]",
		mutedText: "text-[color-mix(in_oklab,var(--accent-green)_70%,white)]",
		mutedBorder:
			"border-[color-mix(in_oklab,var(--accent-green)_30%,transparent)]",
		tabSelected:
			"data-[selected]:bg-(--accent-green) data-[selected]:text-black",
	},
	blue: {
		bg: "bg-(--accent-blue)",
		bgHover: "hover:bg-(--accent-blue-hover)",
		text: "text-black",
		mutedBg: "bg-[color-mix(in_oklab,var(--accent-blue)_15%,transparent)]",
		mutedText: "text-[color-mix(in_oklab,var(--accent-blue)_70%,white)]",
		mutedBorder:
			"border-[color-mix(in_oklab,var(--accent-blue)_30%,transparent)]",
		tabSelected:
			"data-[selected]:bg-(--accent-blue) data-[selected]:text-black",
	},
	yellow: {
		bg: "bg-(--accent-yellow)",
		bgHover: "hover:bg-(--accent-yellow-hover)",
		text: "text-black",
		mutedBg: "bg-[color-mix(in_oklab,var(--accent-yellow)_10%,transparent)]",
		mutedText: "text-[color-mix(in_oklab,var(--accent-yellow)_70%,black)]",
		mutedBorder:
			"border-[color-mix(in_oklab,var(--accent-yellow)_40%,transparent)]",
		tabSelected:
			"data-[selected]:bg-(--accent-yellow) data-[selected]:text-black",
	},
	indigo: {
		bg: "bg-(--accent-indigo)",
		bgHover: "hover:bg-(--accent-indigo-hover)",
		text: "text-black",
		mutedBg: "bg-[color-mix(in_oklab,var(--accent-indigo)_15%,transparent)]",
		mutedText: "text-[color-mix(in_oklab,var(--accent-indigo)_70%,white)]",
		mutedBorder:
			"border-[color-mix(in_oklab,var(--accent-indigo)_30%,transparent)]",
		tabSelected:
			"data-[selected]:bg-(--accent-indigo) data-[selected]:text-black",
	},
	neutral: {
		bg: "bg-white/5",
		bgHover: "hover:bg-white/10",
		text: "text-(--muted)",
		mutedBg: "bg-white/5",
		mutedText: "text-(--muted)",
		mutedBorder: "border-(--border)",
		tabSelected: "data-[selected]:bg-white data-[selected]:text-black",
	},
} as const;

export type Accent = keyof typeof accents;
