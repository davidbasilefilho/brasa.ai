import * as React from "react";
import { cn } from "../utils/cn";
import { type Accent, accents } from "../utils/theme";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
	value?: number; // 0-100
	color?: Accent;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
	({ className, value = 0, color = "emerald", ...props }, ref) => {
		const safe = Number.isFinite(value) ? Math.min(100, Math.max(0, value)) : 0;
		// Choose accent background color for the filled bar
		const fillClass =
			color === "emerald"
				? accents.emerald.bg
				: color === "blue"
					? accents.blue.bg
					: color === "yellow"
						? accents.yellow.bg
						: color === "indigo"
							? accents.indigo.bg
							: "bg-white/30";

		return (
			<div
				ref={ref}
				className={cn(
					"w-full h-2 rounded-radius-radius bg-white/10 overflow-hidden",
					className,
				)}
				role="progressbar"
				aria-valuemin={0}
				aria-valuemax={100}
				aria-valuenow={safe}
				{...props}
			>
				<div
					className={cn("h-full transition-[width] duration-300", fillClass)}
					style={{ width: `${safe}%` }}
				/>
			</div>
		);
	},
);
Progress.displayName = "Progress";
