import { Dialog as DialogPrimitive } from "@base-ui-components/react/dialog";
import * as React from "react";
import { cn } from "../utils/cn";
import { tokens } from "../utils/theme";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;

export interface DialogContentProps
	extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Popup> {
	className?: string;
}

export const DialogContent = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Popup>,
	DialogContentProps
>(({ className, ...props }, ref) => {
	return (
		<DialogPrimitive.Portal>
			<DialogPrimitive.Backdrop className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" />
			<DialogPrimitive.Popup
				ref={ref}
				className={cn(
					"fixed z-50 grid w-full max-w-lg gap-4 p-6 shadow-lg duration-200",
					"top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
					tokens.panel,
					tokens.rounded,
					className,
				)}
				{...props}
			/>
		</DialogPrimitive.Portal>
	);
});
DialogContent.displayName = "DialogContent";

export const DialogTitle = React.forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h2
		ref={ref}
		className={cn("text-lg font-semibold tracking-tight", className)}
		{...props}
	/>
));
DialogTitle.displayName = "DialogTitle";

export const DialogDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p
		ref={ref}
		className={cn("mt-1 text-sm text-muted", className)}
		{...props}
	/>
));
DialogDescription.displayName = "DialogDescription";

export const DialogClose = DialogPrimitive.Close;
