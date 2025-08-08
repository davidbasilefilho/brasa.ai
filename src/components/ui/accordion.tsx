import { Accordion } from "@base-ui-components/react/accordion";
import * as React from "react";
import { cn } from "../utils/cn";
import { tokens } from "../utils/theme";

export const AccordionRoot = Accordion.Root;

export interface AccordionItemProps
	extends React.ComponentPropsWithoutRef<typeof Accordion.Item> {}
export const AccordionItem = React.forwardRef<
	React.ElementRef<typeof Accordion.Item>,
	AccordionItemProps
>(({ className, ...props }, ref) => {
	return (
		<Accordion.Item
			ref={ref}
			className={cn("rounded-radius", tokens.panel, "p-0", className)}
			{...props}
		/>
	);
});
AccordionItem.displayName = "AccordionItem";

export const AccordionHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("px-3 py-2", "border-b border-border", className)}
		{...props}
	/>
));
AccordionHeader.displayName = "AccordionHeader";

export interface AccordionTriggerProps
	extends React.ComponentPropsWithoutRef<typeof Accordion.Trigger> {}
export const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof Accordion.Trigger>,
	AccordionTriggerProps
>(({ className, ...props }, ref) => {
	return (
		<Accordion.Trigger
			ref={ref}
			className={cn(
				"w-full text-left text-sm font-medium",
				"inline-flex items-center justify-between gap-2",
				"px-3 py-2",
				"transition-colors hover:bg-[color-mix(in_oklab,white_10%,varpanel-bg)]",
				className,
			)}
			{...props}
		/>
	);
});
AccordionTrigger.displayName = "AccordionTrigger";

export interface AccordionContentProps
	extends React.ComponentPropsWithoutRef<typeof Accordion.Panel> {}
export const AccordionContent = React.forwardRef<
	React.ElementRef<typeof Accordion.Panel>,
	AccordionContentProps
>(({ className, ...props }, ref) => {
	return (
		<Accordion.Panel
			ref={ref}
			className={cn("px-3 py-3 text-sm text-muted", className)}
			{...props}
		/>
	);
});
AccordionContent.displayName = "AccordionContent";
