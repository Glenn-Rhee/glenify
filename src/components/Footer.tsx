"use client";
import {
  ChevronFirstIcon,
  ChevronLastIcon,
  List,
  MicVocalIcon,
  PauseIcon,
  RepeatIcon,
  Shuffle,
  Volume2,
} from "lucide-react";
import Image from "next/image";
import { Progress } from "./ui/progress";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <footer className="h-24 sticky z-50 shrink-0 px-10 grid grid-cols-[18rem_1fr_18rem] justify-center bg-[#0b0f18]">
      <div className="flex items-center gap-x-4">
        <Image
          src={"/dummy-prof.jpg"}
          alt="Currently Playing"
          width={55}
          height={55}
          className="aspect-square object-cover rounded-md"
        />
      </div>

      <div className="flex flex-col justify-end pb-2 h-full gap-y-2">
        <div className="flex items-center justify-center gap-x-4">
          <button>
            <Shuffle className="size-5" />
          </button>
          <button>
            <ChevronFirstIcon className="size-6" />
          </button>
          <button className="aspect-square size-10 rounded-full bg-gray-100/35 flex items-center justify-center">
            <PauseIcon fill="white" className="size-5" />
          </button>
          <button>
            <ChevronLastIcon className="size-6" />
          </button>
          <button>
            <RepeatIcon className="size-5" />
          </button>
        </div>
        <div className="flex w-full items-center justify-center gap-x-2">
          <span className="font-light text-xs">1.20</span>
          <Progress value={(80 / 260) * 100} className="max-w-124" />
          <span className="font-light text-xs">4.20</span>
        </div>
      </div>

      <div className="flex items-center justify-end h-full gap-x-4">
        <button
          className="cursor-pointer flex flex-col gap-y-1 relative"
          onClick={() => {
            if (pathname === "/lyric") {
              router.push("/");
            } else {
              router.push("/lyric");
            }
          }}
        >
          <MicVocalIcon
            stroke={
              pathname === "/lyric" ? "oklch(0.582 0.193 255.585)" : "white"
            }
            className="size-5"
          />
          <div
            className={cn(
              "transition-all duration-200 mx-auto h-0.5 rounded-md bg-primary absolute -bottom-2 right-0 left-0",
              {
                "w-[calc(100%-0.5rem)]": pathname === "/lyric",
                "w-0": pathname !== "/lyric",
              },
            )}
          />
        </button>
        <button>
          <List className="size-5" />
        </button>
        <button>
          <Volume2 className="size-5" />
        </button>
        <Progress value={90} className="max-w-40" />
      </div>
    </footer>
  );
}
