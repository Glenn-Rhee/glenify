"use client";
import { PlayIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SectionPlaylist() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const router = useRouter();
  return (
    <section className="w-full flex flex-col gap-y-1 mt-8">
      <div className="w-full flex items-center justify-between">
        <h4 className="font-bold text-xl">Top Artists this month</h4>
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="cursor-pointer hover:underline text-sm"
        >
          Show {expanded ? "less" : "all"}
        </button>
      </div>
      <div className="grid grid-cols-6 gap-4 mt-2 px-1.5">
        {Array.from({
          length: typeof expanded === "undefined" ? 36 : expanded ? 36 : 6,
        }).map((_, i) => (
          <div
            onClick={() => router.push("/playlist/1")}
            role="button"
            key={i}
            className="flex flex-col items-center justify-self-center w-full max-w-32 gap-y-1 group/album hover:bg-white/10 transition-colors py-1.5 px-2 rounded-md cursor-pointer"
          >
            <div className="relative w-full">
              <Image
                src={"/dummy-prof.jpg"}
                alt="Album profile"
                width={200}
                height={200}
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
              <h6 className="font-semibold truncate">Lover</h6>
              <span className="truncate">Taylor Swift</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
