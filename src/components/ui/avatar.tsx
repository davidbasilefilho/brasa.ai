import * as React from "react";
import { cn } from "../utils/cn";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
	src?: string | null;
	alt?: string;
	fallback?: React.ReactNode;
	size?: "sm" | "md" | "lg";
	rounded?: "full" | "md";
}

const sizeMap = {
	sm: "h-8 w-8 text-xs",
	md: "h-10 w-10 text-sm",
	lg: "h-12 w-12 text-base",
} as const;

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
	(
		{ className, src, alt, fallback, size = "md", rounded = "full", ...props },
		ref,
	) => {
		const [errored, setErrored] = React.useState(false);
		const radius = rounded === "full" ? "rounded-full" : "rounded-md";

		return (
			<div
				ref={ref}
				className={cn(
					"relative inline-flex shrink-0 items-center justify-center overflow-hidden",
					"bg-[color-mix(in_oklab,white_10%,var(--panel-bg))] text-[--muted]",
					sizeMap[size],
					radius,
					className,
				)}
				{...props}
			>
				{src && !errored ? (
					<img
						src={src}
						alt={alt}
						className="h-full w-full object-cover"
						onError={() => setErrored(true)}
					/>
				) : (
					<span className="select-none">{fallback ?? "?"}</span>
				)}
			</div>
		);
	},
);
Avatar.displayName = "Avatar";
