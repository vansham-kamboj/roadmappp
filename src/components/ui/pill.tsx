
import { cn } from "@/lib/utils";
import React from "react";

export function Pill({
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement>) {
    return (
      <div
        className={cn(
          "inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm",
          className
        )}
        {...props}
      />
    );
  }
