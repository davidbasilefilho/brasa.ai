import { Tabs } from "@base-ui-components/react/tabs";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../utils/cn";
import { type Accent, tokens } from "../utils/theme";

const listVariants = cva(
	cn(
		"flex w-full flex-wrap items-center justify-center md:justify-start w-fit",
		tokens.roundedLg,
		tokens.transition,
		"border border-border bg-panel-muted-bg",
	),
	{
		variants: {
			size: {
				sm: "gap-x-1.5 gap-y-1.5 px-1.5 py-2.5 md:px-2 md:py-2",
				md: "gap-x-6 gap-y-1.5 px-1.5 py-2.5 md:px-2 md:py-2",
			},
		},
		defaultVariants: { size: "md" },
	},
);

const tabVariants = cva(
	cn(
		"inline-flex items-center justify-center text-center leading-snug font-semibold gap-2",
		tokens.rounded,
		"min-h-[2.25rem] px-2.5 py-1 text-sm md:min-h-0 md:h-9 md:px-3 md:py-0",
		"bg-transparent",
		tokens.text.dim,
		tokens.transition,
		tokens.focus.ringEmerald,
		"cursor-pointer data-[selected]:cursor-default",
		"hover:bg-white/10 md:hover:scale-[1.02] will-change-transform",
		"transition-[transform,background-color,opacity,border-color] duration-200 ease-out",
		"data-[selected]:hover:scale-100",
	),
	{
		variants: {
			color: {
				emerald:
					"data-[selected]:border data-[selected]:border-emerald-400/30 data-[selected]:bg-emerald-400/10 data-[selected]:text-emerald-200 data-[selected]:hover:bg-emerald-400/20",
				blue: "data-[selected]:border data-[selected]:border-blue-300/40 data-[selected]:bg-blue-300/10 data-[selected]:text-blue-200 data-[selected]:hover:bg-blue-300/20",
				yellow:
					"data-[selected]:border data-[selected]:border-yellow-300/40 data-[selected]:bg-yellow-300/10 data-[selected]:text-yellow-200 data-[selected]:hover:bg-yellow-300/20",
				indigo:
					"data-[selected]:border data-[selected]:border-indigo-400/30 data-[selected]:bg-indigo-400/10 data-[selected]:text-indigo-200 data-[selected]:hover:bg-indigo-400/20",
				neutral:
					"data-[selected]:border data-[selected]:border-border data-[selected]:bg-white/5 data-[selected]:text-neutral-200 data-[selected]:hover:bg-white/10",
			},
			size: {
				sm: "text-xs md:text-sm",
				md: "text-sm",
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
