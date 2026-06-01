"use client";
import { PauseIcon, PlayIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ImageTriggerSongProps {
  isplaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  src: string;
  size: number;
  open?: boolean;
  href: string;
}

export default function ImageTriggerSong(props: ImageTriggerSongProps) {
  const { isplaying, setIsPlaying, src, size, open = true, href } = props;
  const router = useRouter();
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        if (open) {
          setIsPlaying(!isplaying);
          return;
        }
        router.push(href);
      }}
      className="relative z-30 cursor-pointer"
    >
      <Image
        src={src}
        alt="Image of Library"
        width={size}
        height={size}
        loading="eager"
        className="aspect-square rounded-md object-cover"
      />
      <span className="absolute cursor-pointer z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-50 rounded-full p-1 opacity-0 group-hover/item:opacity-100 transition-opacity">
        {isplaying ? (
          <PauseIcon className="size-6" />
        ) : (
          <PlayIcon className="size-6" />
        )}
      </span>
      <div className="absolute z-20 top-0 right-0 left-0 bottom-0 bg-gray-700/25 rounded-md opacity-0 transition-all group-hover/item:opacity-100" />
    </button>
  );
}
