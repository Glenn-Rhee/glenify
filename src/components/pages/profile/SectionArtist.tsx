"use client";
import { cn } from "@/lib/utils";
import { PlayIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SectionArtist() {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <section className="w-full flex flex-col gap-y-1">
      <div className="w-full flex justify-between">
        <h4 className="font-bold text-xl">Top Artists this month</h4>
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="cursor-pointer hover:underline text-sm"
        >
          Show {expanded ? "less" : "all"}
        </button>
      </div>
      <div className={cn("grid grid-cols-6 gap-4 mt-2 px-1.5 justify-center")}>
        {Array.from({
          length: expanded ? 18 : 6,
        }).map((_, i) => (
          <Link
            key={i}
            href={"/artist/1"}
            className="flex flex-col group/artist justify-self-center items-center justify-center w-full max-w-32 gap-y-1 hover:bg-white/10 transition-colors py-1.5 rounded-md"
          >
            <div className="relative">
              <Image
                src={"/dummy-prof.jpg"}
                alt="Profile pict Artiist"
                width={110}
                height={110}
                className="aspect-square object-cover rounded-full"
              />
              <button className="size-10 group-hover/artist:opacity-100 opacity-0 transition-all absolute bottom-2 -right-2 bg-primary flex items-center justify-center rounded-full">
                <PlayIcon fill="white" className="size-6" />
              </button>
            </div>
            <span className="font-semibold text-center text-xl truncate w-full">
              Taylor Swift
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
