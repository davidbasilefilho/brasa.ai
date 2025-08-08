import { Popover as PopoverPrimitive } from "@base-ui-components/react/popover";
import * as React from "react";
import { cn } from "../utils/cn";
import { tokens } from "../utils/theme";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;

export interface PopoverContentProps
	extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Popup> {
	className?: string;
	sideOffset?: number;
}

export const PopoverContent = React.forwardRef<
	React.ElementRef<typeof PopoverPrimitive.Popup>,
	PopoverContentProps
>(({ className, sideOffset = 8, ...props }, ref) => {
	return (
		<PopoverPrimitive.Portal>
			<PopoverPrimitive.Positioner sideOffset={sideOffset}>
				<PopoverPrimitive.Popup
					ref={ref}
					className={cn(
						"z-50 w-72 rounded-radius-md p-4 shadow-md outline-none",
						tokens.panel,
						className,
					)}
					{...props}
				/>
			</PopoverPrimitive.Positioner>
		</PopoverPrimitive.Portal>
	);
});
PopoverContent.displayName = "PopoverContent";
