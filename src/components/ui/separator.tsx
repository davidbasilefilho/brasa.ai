import * as React from "react";
import { cn } from "../utils/cn";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
	orientation?: "horizontal" | "vertical";
}
export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
	({ className, orientation = "horizontal", ...props }, ref) => {
		return (
			<div
				ref={ref}
				role="separator"
				aria-orientation={orientation}
				className={cn(
					orientation === "vertical"
						? "w-px h-full bg-border"
						: "h-px w-full bg-border",
					className,
				)}
				{...props}
			/>
		);
	},
);
Separator.displayName = "Separator";
