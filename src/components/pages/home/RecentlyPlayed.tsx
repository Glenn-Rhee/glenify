"use client";
import { Play } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RecentlyPlayed() {
  const router = useRouter();
  return (
    <div className="w-full grid grid-cols-4 gap-1 mt-1.5 mb-2">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          onClick={() => {
            router.push("/playlist/1");
          }}
          role="button"
          key={i}
          className="flex items-center cursor-pointer hover:bg-gray-700/90 group/recently transition-all justify-between w-full bg-gray-700/60 rounded-xs p-1"
        >
          <div className="flex items-center gap-x-4">
            <Image
              className="aspect-square rounded-md object-cover"
              src={"/dummy-prof.jpg"}
              alt="Profile picture of"
              width={45}
              height={45}
            />
            <span className="font-medium text-sm">Taylor</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="size-8 me-2 rounded-full cursor-pointer flex group-hover/recently:opacity-100 transition-all opacity-0 items-center justify-center bg-primary"
          >
            <Play className="size-4" fill="white" />
          </button>
        </div>
      ))}
    </div>
  );
}
