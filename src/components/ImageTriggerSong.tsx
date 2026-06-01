"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MediaControl from "./MediaControl";

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
      <MediaControl isPlaying={isplaying} />
    </button>
  );
}
