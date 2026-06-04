import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}
export default function Container(props: ContainerProps) {
  const { children, className, ...otherProps } = props;
  return (
    <div
      className={cn(
        "px-4 py-2 w-full overflow-x-hidden overflow-y-auto no-scrollbar pb-56",
        className,
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
}
