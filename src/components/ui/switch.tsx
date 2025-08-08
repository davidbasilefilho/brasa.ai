import * as React from "react";
import { Switch as SwitchPrimitive } from "@base-ui-components/react/switch";
import { cn } from "../utils/cn";

export interface SwitchProps
	extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
	className?: string;
}

export const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitive.Root>,
	SwitchProps
>(({ className, ...props }, ref) => {
	return (
		<SwitchPrimitive.Root
			ref={ref}
			className={cn(
				"peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors",
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-0",
				"disabled:cursor-not-allowed disabled:opacity-50",
				"data-[state=checked]:bg-(--accent-green) data-[state=unchecked]:bg-[color-mix(in_oklab,white_20%,var(--panel-bg))]",
				className,
			)}
			{...props}
		>
			<SwitchPrimitive.Thumb
				className={cn(
					"pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform",
					"data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
				)}
			/>
		</SwitchPrimitive.Root>
	);
});
Switch.displayName = "Switch";
