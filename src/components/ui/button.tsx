import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import { tokens, accents, type Accent } from "../utils/theme";

const buttonVariants = cva(
	cn(
		"inline-flex items-center justify-center font-semibold",
		tokens.rounded ?? "rounded-md",
		tokens.transition,
		tokens.focus.ringEmerald,
		"disabled:opacity-50 disabled:pointer-events-none",
	),
	{
		variants: {
			variant: {
				solid: "",
				outline: cn(tokens.panelMuted),
				ghost: "bg-transparent",
				link: "underline underline-offset-4",
				tinted: "", // translucent colored background + border + text
			},
			color: {
				emerald: "",
				blue: "",
				yellow: "",
				indigo: "",
				neutral: "",
			},
			size: {
				sm: "h-8 px-3 text-sm gap-2",
				md: "h-10 px-4 text-sm gap-2",
				lg: "h-11 px-5 text-base gap-2",
				icon: "h-9 w-9",
			},
			destructive: {
				true: "",
				false: "",
			},
		},
		compoundVariants: [
			// Solid by color
			{
				variant: "solid",
				color: "emerald",
				className: cn(
					accents.emerald.bg,
					accents.emerald.bgHover,
					accents.emerald.text,
				),
			},
			{
				variant: "solid",
				color: "blue",
				className: cn(accents.blue.bg, accents.blue.bgHover, accents.blue.text),
			},
			{
				variant: "solid",
				color: "yellow",
				className: cn(
					accents.yellow.bg,
					accents.yellow.bgHover,
					accents.yellow.text,
				),
			},
			{
				variant: "solid",
				color: "indigo",
				className: cn(
					accents.indigo.bg,
					accents.indigo.bgHover,
					accents.indigo.text,
				),
			},
			{
				variant: "solid",
				color: "neutral",
				className: cn(tokens.panel, tokens.text.dim, "hover:bg-white/10"),
			},

			// Outline by color
			{
				variant: "outline",
				color: "emerald",
				className: cn(
					"bg-white/5",
					"border-emerald-400/30",
					accents.emerald.mutedText,
					"hover:bg-white/10",
				),
			},
			{
				variant: "outline",
				color: "blue",
				className: cn(
					"bg-white/5",
					"border-blue-400/30",
					accents.blue.mutedText,
					"hover:bg-white/10",
				),
			},
			{
				variant: "outline",
				color: "yellow",
				className: cn(
					"bg-white/5",
					"border-yellow-300/40",
					accents.yellow.mutedText,
					"hover:bg-white/10",
				),
			},
			{
				variant: "outline",
				color: "indigo",
				className: cn(
					"bg-white/5",
					"border-indigo-400/30",
					accents.indigo.mutedText,
					"hover:bg-white/10",
				),
			},
			{
				variant: "outline",
				color: "neutral",
				className: cn(tokens.panelMuted, tokens.text.dim, "hover:bg-white/10"),
			},

			// Ghost by color
			{
				variant: "ghost",
				color: "emerald",
				className: cn("text-emerald-300 hover:bg-emerald-400/10"),
			},
			{
				variant: "ghost",
				color: "blue",
				className: cn("text-blue-200 hover:bg-blue-400/10"),
			},
			{
				variant: "ghost",
				color: "yellow",
				className: cn("text-yellow-200 hover:bg-yellow-300/10"),
			},
			{
				variant: "ghost",
				color: "indigo",
				className: cn("text-indigo-200 hover:bg-indigo-400/10"),
			},
			{
				variant: "ghost",
				color: "neutral",
				className: cn(tokens.text.dim, "hover:bg-white/10"),
			},

			// Tinted by color (semi-transparent bg + colored border + colored text)
			{
				variant: "tinted",
				color: "yellow",
				className: cn(
					"border border-yellow-300/40",
					"bg-yellow-300/10",
					"text-yellow-200",
					"hover:bg-yellow-300/20",
				),
			},
			{
				variant: "tinted",
				color: "blue",
				className: cn(
					"border border-blue-300/40",
					"bg-blue-300/10",
					"text-blue-200",
					"hover:bg-blue-300/20",
				),
			},
			{
				variant: "tinted",
				color: "emerald",
				className: cn(
					"border border-emerald-400/30",
					"bg-emerald-400/10",
					"text-emerald-200",
					"hover:bg-emerald-400/20",
				),
			},

			// Link by color
			{
				variant: "link",
				color: "emerald",
				className: "text-emerald-300 hover:text-emerald-200",
			},
			{
				variant: "link",
				color: "blue",
				className: "text-blue-200 hover:text-blue-100",
			},
			{
				variant: "link",
				color: "yellow",
				className: "text-yellow-200 hover:text-yellow-100",
			},
			{
				variant: "link",
				color: "indigo",
				className: "text-indigo-200 hover:text-indigo-100",
			},
			{
				variant: "link",
				color: "neutral",
				className: "text-neutral-300 hover:text-neutral-200",
			},

			// Destructive modifier (applies a red-ish tone while preserving structure)
			{
				destructive: true,
				className:
					"data-[destructive=true]:bg-red-500 data-[destructive=true]:text-black",
			},
		],
		defaultVariants: {
			variant: "solid",
			color: "emerald",
			size: "md",
			destructive: false,
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		Omit<VariantProps<typeof buttonVariants>, "color"> {
	asChild?: boolean;
	color?: Accent;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, color, size, destructive, ...props }, ref) => {
		return (
			<button
				ref={ref}
				data-destructive={destructive ? "true" : undefined}
				className={cn(
					buttonVariants({
						variant,
						color: color as Accent,
						size,
						destructive,
					}),
					className,
				)}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";
