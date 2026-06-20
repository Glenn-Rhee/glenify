import ContextMenuSong from "@/components/contextmenu/ContextMenuSong";
import DropdownMenuSong from "@/components/dropdownmenu/DropdownMenuSong";
import { Check, MoreHorizontal, Play } from "lucide-react";
import Image from "next/image";
import DataSearch from "./DataSearch";

const musicData = [
  {
    title: "Blinding Lights",
    type: "song",
    owner: "The Weeknd",
    alreadyAddLibrary: true,
  },
  {
    title: "After Hours",
    type: "album",
    owner: "The Weeknd",
    alreadyAddLibrary: false,
  },
  {
    title: "Morning Vibes",
    type: "playlist",
    owner: "Spotify",
    alreadyAddLibrary: true,
  },
  {
    title: "Taylor Swift",
    type: "artist",
    owner: "Taylor Swift",
    alreadyAddLibrary: false,
  },
  {
    title: "As It Was",
    type: "song",
    owner: "Harry Styles",
    alreadyAddLibrary: true,
  },
  {
    title: "Harry's House",
    type: "album",
    owner: "Harry Styles",
    alreadyAddLibrary: false,
  },
  {
    title: "Chill Lo-Fi Study",
    type: "playlist",
    owner: "LoFi Girl",
    alreadyAddLibrary: true,
  },
  {
    title: "Flowers",
    type: "song",
    owner: "Miley Cyrus",
    alreadyAddLibrary: false,
  },
  {
    title: "Endless Summer Hits",
    type: "playlist",
    owner: "Apple Music",
    alreadyAddLibrary: true,
  },
  {
    title: "Billie Eilish",
    type: "artist",
    owner: "Billie Eilish",
    alreadyAddLibrary: false,
  },
];

export default function Alltabs() {
  return (
    <section className="w-full flex flex-col gap-y-2 mt-6">
      <ContextMenuSong>
        <div className="w-full rounded-md bg-white/10 hover:bg-white/30 cursor-pointer px-3 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <Image
              src={"/dummy-prof.jpg"}
              alt="Image of xx"
              width={80}
              height={80}
              className="aspect-square object-cover rounded-md"
            />
            <div className="flex flex-col gap-y-1.5">
              <h2 className="font-semibold text-2xl truncate">All to Well</h2>
              <span className="text-sm font-medium">Song | Taylor Swift</span>
            </div>
          </div>

          <div className="flex items-center gap-x-6">
            <DropdownMenuSong asChild>
              <button className="cursor-pointer group/more">
                <MoreHorizontal className="size-5 text-white/60 group-hover/more:text-white transition-all" />
              </button>
            </DropdownMenuSong>
            <button className="cursor-pointer rounded-full size-5 bg-primary flex items-center justify-center">
              <Check className="size-3 text-black" />
            </button>
            <button className="cursor-pointer rounded-full size-12 bg-primary flex items-center justify-center">
              <Play fill="black" className="size-6 text-black" />
            </button>
          </div>
        </div>
      </ContextMenuSong>

      {musicData.map((data, i) => (
        <DataSearch key={i} dataMusic={data} />
      ))}
    </section>
  );
}
