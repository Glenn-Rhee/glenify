import { cn } from "@/lib/utils";
import { Ref } from "react";

interface BannerContainerProps {
  className?: string;
  ref?: Ref<HTMLHeadElement>;
  children: React.ReactNode;
}
export default function BannerContainer(props: BannerContainerProps) {
  const { className, ref, children } = props;
  return (
    <header
      ref={ref}
      className={cn("bg-orange-900/80 w-full h-[45dvh]", className)}
    >
      {children}
    </header>
  );
}
