"use client";
import ContextMenuArtist from "@/components/contextmenu/ContextMenuArtist";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ArtistSection() {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <section>
      <h4 className="font-bold text-3xl">Artist</h4>
      <ContextMenuArtist>
        <div className={cn("grid grid-cols-8 gap-4 mt-2 px-1.5")}>
          {Array.from({ length: expanded ? 18 : 8 }).map((_, i) => (
            <Link
              key={i}
              href={"/artist/1"}
              className="flex flex-col items-center w-full max-w-32 gap-y-1 hover:bg-white/10 transition-colors py-1.5 rounded-md"
            >
              <Image
                src={"/dummy-prof.jpg"}
                alt="Profile pict Artiist"
                width={110}
                height={110}
                className="aspect-square object-cover rounded-full"
              />
              <span className="font-semibold text-center text-xl truncate w-full">
                Taylor Swift
              </span>
            </Link>
          ))}
        </div>
      </ContextMenuArtist>
      <div className="flex items-center justify-end mt-4">
        <button
          className="cursor-pointer hover:text-white text-gray-300"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          Show {expanded ? "less" : "more"}
        </button>
      </div>
    </section>
  );
}
