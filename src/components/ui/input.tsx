import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import { tokens } from "../utils/theme";

const inputVariants = cva(
	cn(
		"flex w-full bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium",
		"placeholder:text-neutral-400",
		"focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
		tokens.border,
		tokens.rounded ?? "rounded-md",
		tokens.focus.ringEmerald,
		tokens.transition,
	),
	{
		variants: {
			size: {
				sm: "h-8 px-2 text-xs",
				md: "h-10 px-3 text-sm",
				lg: "h-12 px-4 text-base",
			},
			state: {
				default: "",
				invalid: "border-red-500 focus-visible:ring-red-300/40",
			},
		},
		defaultVariants: {
			size: "md",
			state: "default",
		},
	},
);

export interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
		VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, size, state, ...props }, ref) => {
		return (
			<input
				ref={ref}
				className={cn(inputVariants({ size, state }), className)}
				{...props}
			/>
		);
	},
);
Input.displayName = "Input";
