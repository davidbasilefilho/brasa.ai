import * as React from "react";
import { cn } from "../utils/cn";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					"animate-pulse rounded-[var(--radius)] bg-[color-mix(in_oklab,white_10%,var(--panel-bg))]",
					className,
				)}
				{...props}
			/>
		);
	},
);
Skeleton.displayName = "Skeleton";
