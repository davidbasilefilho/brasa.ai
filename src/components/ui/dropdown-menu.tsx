import * as React from "react";
import { Menu } from "@base-ui-components/react/menu";
import { cn } from "../utils/cn";
import { tokens } from "../utils/theme";

export const DropdownMenu = Menu.Root;
export const DropdownMenuTrigger = Menu.Trigger;

export interface DropdownMenuContentProps
	extends React.ComponentPropsWithoutRef<typeof Menu.Popup> {
	className?: string;
	sideOffset?: number;
}

export const DropdownMenuContent = React.forwardRef<
	React.ElementRef<typeof Menu.Popup>,
	DropdownMenuContentProps
>(({ className, sideOffset = 6, ...props }, ref) => {
	return (
		<Menu.Portal>
			<Menu.Positioner sideOffset={sideOffset}>
				<Menu.Popup
					ref={ref}
					className={cn(
						"z-50 min-w-[10rem] overflow-hidden rounded-md p-1 shadow-lg",
						tokens.panel,
						className,
					)}
					{...props}
				/>
			</Menu.Positioner>
		</Menu.Portal>
	);
});
DropdownMenuContent.displayName = "DropdownMenuContent";

export const DropdownMenuGroup = Menu.Group;

export interface DropdownMenuItemProps
	extends React.ComponentPropsWithoutRef<typeof Menu.Item> {
	className?: string;
}

export const DropdownMenuItem = React.forwardRef<
	React.ElementRef<typeof Menu.Item>,
	DropdownMenuItemProps
>(({ className, ...props }, ref) => {
	return (
		<Menu.Item
			ref={ref}
			className={cn(
				"relative flex w-full cursor-default select-none items-center rounded px-2 py-1.5 text-sm outline-none",
				"text-(--foreground)",
				"focus:bg-[color-mix(in_oklab,white_10%,var(--panel-bg))] data-[state=checked]:bg-(--accent-green) data-[state=checked]:text-black",
				"data-[disabled]:opacity-50 data-[disabled]:pointer-events-none",
				className,
			)}
			{...props}
		/>
	);
});
DropdownMenuItem.displayName = "DropdownMenuItem";

export const DropdownMenuSeparator = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("my-1 h-px w-full bg-(--border)", className)}
		{...props}
	/>
));
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";
