"use client"
import { PlayIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CollectionCard() {
      const router = useRouter();

  return (
    <div
      onClick={() => router.push("/album/1")}
      role="button"
      className="flex flex-col items-center justify-self-center-safe w-full gap-y-1 group/album hover:bg-white/10 transition-colors p-1.5 rounded-md cursor-pointer"
    >
      <div className="relative w-full">
        <Image
          src={"/dummy-prof.jpg"}
          alt="Album profile"
          width={200}
          height={200}
          className="aspect-square object-cover rounded-md"
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
        <h6 className="font-medium text-lg truncate">Lover</h6>
        <span className="truncate text-sm font-semibold text-muted-foreground">
          2024 | Taylor Swift
        </span>
      </div>
    </div>
  );
}
