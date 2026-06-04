"use client";
import ContextMenuAlbum from "@/components/contextmenu/ContextMenuAlbum";
import { PlayIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface AlbumListProps {
  expanded?: boolean;
}

export default function AlbumList(props: AlbumListProps) {
  const { expanded } = props;
  const router = useRouter();

  return (
    <ContextMenuAlbum>
      <div className="grid grid-cols-8 gap-4 mt-2 px-1.5">
        {Array.from({
          length: typeof expanded === "undefined" ? 32 : expanded ? 32 : 16,
        }).map((_, i) => (
          <div
            onClick={() => router.push("/album/1")}
            role="button"
            key={i}
            className="flex flex-col items-center w-full max-w-32 gap-y-1 group/album hover:bg-white/10 transition-colors py-1.5 px-2 rounded-md cursor-pointer"
          >
            <div className="relative w-full">
              <Image
                src={"/dummy-prof.jpg"}
                alt="Album profile"
                width={110}
                height={110}
                className="aspect-square object-cover rounded-md w-full"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  alert("ok");
                }}
                className="size-8 opacity-0 group-hover/album:opacity-100 transition-all duration-400 cursor-pointer rounded-full bg-primary flex items-center justify-center absolute bottom-2 right-2"
              >
                <PlayIcon className="size-4" fill="white" />
              </button>
            </div>
            <div className="flex flex-col w-full gap-y-1">
              <h6 className="font-semibold">Lover</h6>
              <span>Taylor Swift</span>
            </div>
          </div>
        ))}
      </div>
    </ContextMenuAlbum>
  );
}
