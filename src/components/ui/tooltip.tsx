import * as React from "react";
import { Tooltip as TooltipPrimitive } from "@base-ui-components/react/tooltip";
import { cn } from "../utils/cn";

export const TooltipProvider = TooltipPrimitive.Provider;

export interface TooltipProps
	extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> {}
export const Tooltip = TooltipPrimitive.Root;

export const TooltipTrigger = TooltipPrimitive.Trigger;

export interface TooltipContentProps
	extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Popup> {
	className?: string;
	sideOffset?: number;
}

export const TooltipContent = React.forwardRef<
	React.ElementRef<typeof TooltipPrimitive.Popup>,
	TooltipContentProps
>(({ className, sideOffset = 6, ...props }, ref) => {
	return (
		<TooltipPrimitive.Portal>
			<TooltipPrimitive.Positioner sideOffset={sideOffset}>
				<TooltipPrimitive.Popup
					ref={ref}
					className={cn(
						"z-50 overflow-hidden rounded px-3 py-1.5 text-xs",
						"animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
						"data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
						"bg-[--accent-green] text-black",
						className,
					)}
					{...props}
				/>
			</TooltipPrimitive.Positioner>
		</TooltipPrimitive.Portal>
	);
});
TooltipContent.displayName = "TooltipContent";
