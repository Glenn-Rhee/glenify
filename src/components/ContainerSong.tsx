"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface ContainerSongProps {
  href?: string;
  children: React.ReactNode;
  open?: boolean;
  className?: string;
  asChild?: boolean;
}

export default function ContainerSong(props: ContainerSongProps) {
  const { href, children, open = true, asChild = false, className } = props;
  const router = useRouter();
  return (
    <div
      onClick={() => {
        if (href) {
          router.push(href);
        }
      }}
      role="button"
      className={cn(
        "hover:bg-muted cursor-default px-1.5 py-2 rounded-md",
        open ? "group/item" : "",
        className,
      )}
    >
      {asChild ? children : <div className="z-20">{children}</div>}
    </div>
  );
}
