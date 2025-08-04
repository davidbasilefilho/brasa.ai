import * as React from "react";
import { Select as SelectPrimitive } from "@base-ui-components/react/select";
import { cn } from "../utils/cn";
import { tokens } from "../utils/theme";

export interface SelectProps
	extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {}
export const Select = SelectPrimitive.Root;

export interface SelectTriggerProps
	extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
	className?: string;
}

export const SelectTrigger = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Trigger>,
	SelectTriggerProps
>(({ className, ...props }, ref) => {
	return (
		<SelectPrimitive.Trigger
			ref={ref}
			className={cn(
				"inline-flex h-10 w-full items-center justify-between gap-2 px-3 text-sm",
				tokens.border,
				"bg-[--panel-muted-bg]",
				tokens.text.base,
				"rounded-[var(--radius)]",
				tokens.transition,
				tokens.focus.ringEmerald,
				"disabled:opacity-50 disabled:pointer-events-none",
				className,
			)}
			{...props}
		/>
	);
});
SelectTrigger.displayName = "SelectTrigger";

export const SelectValue = SelectPrimitive.Value;

export interface SelectContentProps
	extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Popup> {
	className?: string;
	sideOffset?: number;
}

export const SelectContent = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Popup>,
	SelectContentProps
>(({ className, sideOffset = 6, ...props }, ref) => {
	return (
		<SelectPrimitive.Portal>
			<SelectPrimitive.Positioner sideOffset={sideOffset}>
				<SelectPrimitive.Popup
					ref={ref}
					className={cn(
						"z-50 min-w-[8rem] overflow-hidden rounded-md",
						tokens.panel,
						"p-1 shadow-lg",
						className,
					)}
					{...props}
				/>
			</SelectPrimitive.Positioner>
		</SelectPrimitive.Portal>
	);
});
SelectContent.displayName = "SelectContent";

export const SelectGroup = SelectPrimitive.Group;

export interface SelectItemProps
	extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
	className?: string;
}

export const SelectItem = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Item>,
	SelectItemProps
>(({ className, ...props }, ref) => {
	return (
		<SelectPrimitive.Item
			ref={ref}
			className={cn(
				"relative flex w-full cursor-default select-none items-center rounded px-2 py-1.5 text-sm outline-none",
				"text-[--foreground]",
				"focus:bg-[color-mix(in_oklab,white_10%,var(--panel-bg))] data-[state=checked]:bg-[--accent-green] data-[state=checked]:text-black",
				className,
			)}
			{...props}
		>
			<SelectPrimitive.ItemIndicator className="absolute left-1.5" />
			<SelectPrimitive.ItemText />
		</SelectPrimitive.Item>
	);
});
SelectItem.displayName = "SelectItem";

export const SelectSeparator = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("my-1 h-px w-full bg-[--border]", className)}
		{...props}
	/>
));
SelectSeparator.displayName = "SelectSeparator";
