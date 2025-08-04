import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import { tokens } from "../utils/theme";

const textareaVariants = cva(
	cn(
		"w-full",
		"bg-[--panel-muted-bg]",
		tokens.text.base,
		tokens.border,
		tokens.rounded ?? "rounded-md",
		tokens.transition,
		tokens.focus.ringEmerald,
		"placeholder:text-[color-mix(in_oklab,var(--foreground)_45%,var(--panel-bg))]",
		"disabled:opacity-50 disabled:pointer-events-none",
		"resize-y",
	),
	{
		variants: {
			size: {
				sm: "min-h-20 p-2.5 text-sm",
				md: "min-h-24 p-3 text-sm",
				lg: "min-h-28 p-3.5 text-base",
			},
			state: {
				default: "",
				invalid:
					"border-[color-mix(in_oklab,red_50%,transparent)] focus-visible:ring-[color-mix(in_oklab,red_40%,transparent)]",
			},
		},
		defaultVariants: {
			size: "md",
			state: "default",
		},
	},
);

export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
		VariantProps<typeof textareaVariants> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, size, state, ...props }, ref) => {
		return (
			<textarea
				ref={ref}
				className={cn(textareaVariants({ size, state }), className)}
				{...props}
			/>
		);
	},
);
Textarea.displayName = "Textarea";
