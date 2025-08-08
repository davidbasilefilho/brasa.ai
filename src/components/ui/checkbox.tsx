import { Checkbox as CheckboxPrimitive } from "@base-ui-components/react/checkbox";
import * as React from "react";
import { cn } from "../utils/cn";
import { tokens } from "../utils/theme";

export interface CheckboxProps
	extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
	className?: string;
}

export const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	CheckboxProps
>(({ className, ...props }, ref) => {
	return (
		<CheckboxPrimitive.Root
			ref={ref}
			className={cn(
				"peer inline-flex size-4 items-center justify-center rounded border bg-panel-muted-bg transition-colors",
				"border-border",
				tokens.focus.ringEmerald,
				"data-[state=checked]:bg-accent-green data-[state=checked]:border-[color-mix(in_oklab,varaccent-green_40%,transparent)] data-[state=checked]:text-black",
				"disabled:opacity-50 disabled:pointer-events-none",
				className,
			)}
			{...props}
		>
			<CheckboxPrimitive.Indicator className="text-black data-[state=checked]:text-black" />
		</CheckboxPrimitive.Root>
	);
});
Checkbox.displayName = "Checkbox";
