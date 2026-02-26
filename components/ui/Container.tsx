import { cn } from "@/lib/utils";

type ContainerSize = "default" | "narrow";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Constrain content width: "default" (same as navbar) or "narrow" for readable text blocks. */
  size?: ContainerSize;
  /** Root element. */
  as?: "div" | "section" | "article" | "main";
}

const sizeClasses: Record<ContainerSize, string> = {
  default: "max-w-7xl",
  narrow: "max-w-3xl",
};

/**
 * Shared layout container so all main page content aligns with the navbar.
 * Uses container mx-auto px-4 (sm:px-6 lg:px-8). Do not add max-w-* in sections.
 */
export default function Container({
  size = "default",
  as: Component = "div",
  className,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "container mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}
