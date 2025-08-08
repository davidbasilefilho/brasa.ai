import * as React from "react";
import { cn } from "../utils/cn";
import { tokens } from "../utils/theme";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	interactive?: boolean;
	padded?: "none" | "sm" | "md" | "lg";
	muted?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
	(
		{ className, interactive = false, padded = "md", muted = false, ...props },
		ref,
	) => {
		const padding =
			padded === "none"
				? "p-0"
				: padded === "sm"
					? "p-3"
					: padded === "md"
						? "p-4"
						: "p-6";

		return (
			<div
				ref={ref}
				className={cn(
					muted ? tokens.panelMuted : tokens.panel,
					tokens.roundedXl,
					interactive &&
						"hover:bg-[color-mix(in_oklab,white_10%,var(--panel-bg))] transition-colors",
					padding,
					className,
				)}
				{...props}
			/>
		);
	},
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex items-start justify-between gap-2", className)}
		{...props}
	/>
));
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h3
		ref={ref}
		className={cn("text-lg font-semibold tracking-tight", className)}
		{...props}
	/>
));
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p ref={ref} className={cn("text-sm text-(--muted)", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn("mt-4", className)} {...props} />
));
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("mt-6 flex items-center gap-2", className)}
		{...props}
	/>
));
CardFooter.displayName = "CardFooter";
