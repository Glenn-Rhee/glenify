"use client";
import ContextMenuSong from "@/components/contextmenu/ContextMenuSong";
import DropdownMenuSong from "@/components/dropdownmenu/DropdownMenuSong";
import ImageTriggerSong from "@/components/ImageTriggerSong";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

export default function SongList() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <ContextMenuSong>
      <div className="flex flex-col gap-y-1.5 w-full mt-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            role="button"
            className="w-full hover:bg-white/10 grid grid-cols-[1fr_20rem] group/item items-center gap-x-2 rounded-sm px-4 py-3"
          >
            <div className="flex items-center gap-x-4">
              <ImageTriggerSong
                isplaying={isPlaying}
                href="/album/1"
                setIsPlaying={setIsPlaying}
                size={70}
                src="/dummy-prof.jpg"
              />
              <div className="flex flex-col gap-y-1">
                <h6 className="text-xl font-semibold">loml</h6>
                <span>Taylor Swift</span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-x-8">
              <span className="text-sm">100.000.000</span>
              <div className="flex items-center justify-evenly w-full max-w-32">
                <button>
                  <PlusCircle className="size-5" />
                </button>
                <div className="text-sm flex items-center gap-x-0.5">
                  <span>4</span>
                  <span>:</span>
                  <span>20</span>
                </div>
                <DropdownMenuSong />
              </div>
            </div>
          </div>
        ))}
      </div>
    </ContextMenuSong>
  );
}
