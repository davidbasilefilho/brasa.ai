/**
 * Shared theme class fragments inspired by src/App.tsx styling.
 * Use these tokens to keep components visually consistent.
 */
export const tokens = {
	border: "border border-[color-border]",
	panel: "border border-[color-border] bg-[color-panel-bg]",
	panelMuted: "border border-[color-border] bg-[color-panel-muted-bg]",
	surfaceMuted: "bg-[color-panel-muted-bg]",
	rounded: "rounded-[radius]",
	roundedLg: "rounded-[radius-lg]",
	roundedXl: "rounded-[radius-xl]",
	text: {
		base: "text-[color-foreground]",
		muted: "text-[color-muted]",
		dim: "text-[color-muted]",
		inverse: "text-black",
	},
	focus: {
		ringEmerald:
			"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color-ring] focus-visible:ring-offset-0",
	},
	transition: "transition-colors duration-150",
} as const;

export const accents = {
	emerald: {
		bg: "bg-[color-accent-green]",
		bgHover: "hover:bg-[color-accent-green-hover]",
		text: "text-black",
		mutedBg:
			"bg-[color-mix(in_oklab,var(--color-accent-green)_15%,transparent)]",
		mutedText: "text-[color-mix(in_oklab,var(--color-accent-green)_70%,white)]",
		mutedBorder:
			"border-[color-mix(in_oklab,var(--color-accent-green)_30%,transparent)]",
		tabSelected:
			"data-[selected]:bg-[color-accent-green] data-[selected]:text-black",
	},
	blue: {
		bg: "bg-[color-accent-blue]",
		bgHover: "hover:bg-[color-accent-blue-hover]",
		text: "text-black",
		mutedBg:
			"bg-[color-mix(in_oklab,var(--color-accent-blue)_15%,transparent)]",
		mutedText: "text-[color-mix(in_oklab,var(--color-accent-blue)_70%,white)]",
		mutedBorder:
			"border-[color-mix(in_oklab,var(--color-accent-blue)_30%,transparent)]",
		tabSelected:
			"data-[selected]:bg-[color-accent-blue] data-[selected]:text-black",
	},
	yellow: {
		bg: "bg-[color-accent-yellow]",
		bgHover: "hover:bg-[color-accent-yellow-hover]",
		text: "text-black",
		mutedBg:
			"bg-[color-mix(in_oklab,var(--color-accent-yellow)_10%,transparent)]",
		mutedText:
			"text-[color-mix(in_oklab,var(--color-accent-yellow)_70%,black)]",
		mutedBorder:
			"border-[color-mix(in_oklab,var(--color-accent-yellow)_40%,transparent)]",
		tabSelected:
			"data-[selected]:bg-[color-accent-yellow] data-[selected]:text-black",
	},
	indigo: {
		bg: "bg-[color-accent-indigo]",
		bgHover: "hover:bg-[color-accent-indigo-hover]",
		text: "text-black",
		mutedBg:
			"bg-[color-mix(in_oklab,var(--color-accent-indigo)_15%,transparent)]",
		mutedText:
			"text-[color-mix(in_oklab,var(--color-accent-indigo)_70%,white)]",
		mutedBorder:
			"border-[color-mix(in_oklab,var(--color-accent-indigo)_30%,transparent)]",
		tabSelected:
			"data-[selected]:bg-[color-accent-indigo] data-[selected]:text-black",
	},
	neutral: {
		bg: "bg-white/5",
		bgHover: "hover:bg-white/10",
		text: "text-muted",
		mutedBg: "bg-white/5",
		mutedText: "text-muted",
		mutedBorder: "border-border",
		tabSelected: "data-[selected]:bg-white data-[selected]:text-black",
	},
} as const;

export type Accent = keyof typeof accents;
