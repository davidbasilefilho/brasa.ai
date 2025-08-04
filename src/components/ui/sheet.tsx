import * as React from "react";
import { Dialog as SheetPrimitive } from "@base-ui-components/react/dialog";
import { cn } from "../utils/cn";
import { tokens } from "../utils/theme";

export const Sheet = SheetPrimitive.Root;
export const SheetTrigger = SheetPrimitive.Trigger;

export interface SheetContentProps
	extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Popup> {
	side?: "left" | "right" | "top" | "bottom";
	className?: string;
}

const sideClasses: Record<NonNullable<SheetContentProps["side"]>, string> = {
	left: "left-0 top-0 h-full w-80 border-r",
	right: "right-0 top-0 h-full w-80 border-l",
	top: "top-0 left-0 w-full h-64 border-b",
	bottom: "bottom-0 left-0 w-full h-64 border-t",
};

export const SheetContent = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Popup>,
	SheetContentProps
>(({ className, side = "right", ...props }, ref) => {
	return (
		<SheetPrimitive.Portal>
			<SheetPrimitive.Backdrop className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" />
			<SheetPrimitive.Popup
				ref={ref}
				className={cn(
					"fixed z-50",
					sideClasses[side],
					"p-4",
					tokens.panel,
					"rounded-none shadow-xl",
					className,
				)}
				{...props}
			/>
		</SheetPrimitive.Portal>
	);
});
SheetContent.displayName = "SheetContent";

export const SheetClose = SheetPrimitive.Close;
export const SheetTitle = React.forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h2
		ref={ref}
		className={cn("text-base font-semibold tracking-tight", className)}
		{...props}
	/>
));
SheetTitle.displayName = "SheetTitle";
