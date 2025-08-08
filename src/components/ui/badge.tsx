import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import { accents } from "../utils/theme";

const badgeVariants = cva(
	"inline-flex items-center gap-1 shrink-0 rounded px-2 py-1 text-xs font-semibold",
	{
		variants: {
			color: {
				emerald: cn(
					"border",
					accents.emerald.mutedBorder,
					accents.emerald.mutedBg,
					accents.emerald.mutedText,
				),
				blue: cn(
					"border",
					accents.blue.mutedBorder,
					accents.blue.mutedBg,
					accents.blue.mutedText,
				),
				yellow: cn(
					"border",
					accents.yellow.mutedBorder,
					accents.yellow.mutedBg,
					accents.yellow.mutedText,
				),
				indigo: cn(
					"border",
					accents.indigo.mutedBorder,
					accents.indigo.mutedBg,
					accents.indigo.mutedText,
				),
				neutral:
					"border border-(--border) bg-(--panel-muted-bg) text-(--muted)",
			},
			size: {
				sm: "text-[11px] px-1.5 py-0.5 rounded",
				md: "text-xs px-2 py-1 rounded",
			},
			outlined: {
				true: "bg-transparent",
				false: "",
			},
		},
		defaultVariants: {
			color: "emerald",
			size: "md",
			outlined: false,
		},
	},
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLSpanElement>,
		Omit<VariantProps<typeof badgeVariants>, "color"> {
	color?: "emerald" | "blue" | "yellow" | "indigo" | "neutral";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
	({ className, color = "emerald", size, outlined, ...props }, ref) => {
		return (
			<span
				ref={ref}
				className={cn(badgeVariants({ color, size, outlined }), className)}
				{...props}
			/>
		);
	},
);
Badge.displayName = "Badge";
