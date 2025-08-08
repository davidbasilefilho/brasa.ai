import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../utils/cn";

const alertVariants = cva("w-full rounded-radius-md border px-3 py-2 text-sm", {
	variants: {
		variant: {
			default: "border-border bg-panel-bg text-foreground",
			success:
				"border-[color-mix(in_oklab,varaccent-green_30%,transparent)] bg-[color-mix(in_oklab,varaccent-green_10%,transparent)] text-[color-mix(in_oklab,varaccent-green_70%,white)]",
			info: "border-[color-mix(in_oklab,varaccent-blue_30%,transparent)] bg-[color-mix(in_oklab,varaccent-blue_10%,transparent)] text-[color-mix(in_oklab,varaccent-blue_70%,white)]",
			warning:
				"border-[color-mix(in_oklab,varaccent-yellow_40%,transparent)] bg-[color-mix(in_oklab,varaccent-yellow_10%,transparent)] text-[color-mix(in_oklab,varaccent-yellow_70%,black)]",
			destructive:
				"border-[color-mix(in_oklab,red_35%,transparent)] bg-[color-mix(in_oklab,red_12%,transparent)] text-[color-mix(in_oklab,red_80%,white)]",
		},
		elevated: {
			true: "shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]",
			false: "",
		},
	},
	defaultVariants: {
		variant: "default",
		elevated: true,
	},
});

export interface AlertProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof alertVariants> {}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
	({ className, variant, elevated, ...props }, ref) => {
		return (
			<div
				ref={ref}
				role="status"
				className={cn(alertVariants({ variant, elevated }), className)}
				{...props}
			/>
		);
	},
);
Alert.displayName = "Alert";

export const AlertTitle = React.forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h5
		ref={ref}
		className={cn("mb-1 text-sm font-semibold tracking-tight", className)}
		{...props}
	/>
));
AlertTitle.displayName = "AlertTitle";

export const AlertDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p
		ref={ref}
		className={cn("text-xs leading-relaxed text-inherit/90", className)}
		{...props}
	/>
));
AlertDescription.displayName = "AlertDescription";
