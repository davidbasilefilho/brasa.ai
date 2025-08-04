import * as React from "react";
import { Tabs } from "@base-ui-components/react/tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import { accents, type Accent, tokens } from "../utils/theme";

const listVariants = cva("flex flex-wrap gap-2", {
	variants: {
		size: {
			sm: "gap-1.5",
			md: "gap-2",
		},
	},
	defaultVariants: { size: "md" },
});

const tabVariants = cva(
	cn(
		"rounded px-3 py-1.5 text-sm inline-flex items-center gap-2",
		"border",
		tokens.surfaceMuted,
		"border-[--border]",
		tokens.transition,
		tokens.focus.ringEmerald,
	),
	{
		variants: {
			color: {
				emerald: accents.emerald.tabSelected,
				blue: accents.blue.tabSelected,
				yellow: accents.yellow.tabSelected,
				indigo: accents.indigo.tabSelected,
				neutral: accents.neutral.tabSelected,
			},
			size: {
				sm: "px-2.5 py-1 text-xs",
				md: "px-3 py-1.5 text-sm",
			},
		},
		defaultVariants: {
			color: "emerald",
			size: "md",
		},
	},
);

type TabsRootProps = React.ComponentPropsWithoutRef<typeof Tabs.Root>;
type TabsListProps = React.ComponentPropsWithoutRef<typeof Tabs.List>;
type TabsTabProps = React.ComponentPropsWithoutRef<typeof Tabs.Tab>;
type TabsPanelProps = React.ComponentPropsWithoutRef<typeof Tabs.Panel>;

export interface BrasaTabsProps extends TabsRootProps {
	color?: Accent;
	size?: VariantProps<typeof tabVariants>["size"];
	className?: string;
	children?: React.ReactNode;
}
export function BrasaTabsRoot({
	className,
	children,
	...props
}: BrasaTabsProps) {
	return (
		<Tabs.Root className={className} {...props}>
			{children}
		</Tabs.Root>
	);
}

export interface BrasaTabsListProps
	extends TabsListProps,
		VariantProps<typeof listVariants> {
	className?: string;
	children?: React.ReactNode;
}
export function BrasaTabsList({
	className,
	size,
	children,
	...props
}: BrasaTabsListProps) {
	return (
		<Tabs.List className={cn(listVariants({ size }), className)} {...props}>
			{children}
		</Tabs.List>
	);
}

export interface BrasaTabProps
	extends TabsTabProps,
		VariantProps<typeof tabVariants> {
	color?: Accent;
	className?: string;
	children?: React.ReactNode;
}
export function BrasaTab({
	className,
	color = "emerald",
	size,
	children,
	...props
}: BrasaTabProps) {
	return (
		<Tabs.Tab
			className={cn(tabVariants({ color, size }), className)}
			{...props}
		>
			{children}
		</Tabs.Tab>
	);
}

export interface BrasaTabsPanelProps extends TabsPanelProps {
	className?: string;
	children?: React.ReactNode;
}
export function BrasaTabsPanel({ children, ...props }: BrasaTabsPanelProps) {
	return <Tabs.Panel {...props}>{children}</Tabs.Panel>;
}

export const BrasaTabs = {
	Root: BrasaTabsRoot,
	List: BrasaTabsList,
	Tab: BrasaTab,
	Panel: BrasaTabsPanel,
};
