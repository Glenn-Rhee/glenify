"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface ContainerSongProps {
  href: string;
  children: React.ReactNode;
  open?: boolean;
}

export default function ContainerSong(props: ContainerSongProps) {
  const { href, children, open = true } = props;
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(href);
      }}
      role="button"
      className={cn(
        "hover:bg-muted cursor-auto px-1.5 py-2 rounded-md",
        open ? "group/item" : "",
      )}
    >
      <div className="z-20">{children}</div>
    </div>
  );
}
