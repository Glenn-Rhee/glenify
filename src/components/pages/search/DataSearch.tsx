"use client";
import ContextMenuAlbum from "@/components/contextmenu/ContextMenuAlbum";
import ContextMenuArtist from "@/components/contextmenu/ContextMenuArtist";
import ContextMenuPlaylist from "@/components/contextmenu/ContextMenuPlaylist";
import ContextMenuSong from "@/components/contextmenu/ContextMenuSong";
import DropdownmenuAlbum from "@/components/dropdownmenu/DropdownmenuAlbum";
import DropdownmenuArtist from "@/components/dropdownmenu/DropdownmenuArtist";
import DropdownmenuPlaylist from "@/components/dropdownmenu/DropdownmenuPlaylist";
import DropdownMenuSong from "@/components/dropdownmenu/DropdownMenuSong";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Check, MoreHorizontal, PlayIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  dataMusic: {
    title: string;
    type: string;
    owner: string;
    alreadyAddLibrary: boolean;
  };
}

export default function DataSearch(props: Props) {
  const { dataMusic } = props;
  const children = (
    <div className="flex flex-col gap-y-1 w-full">
      <div className="w-full rounded-md hover:bg-white/10 cursor-pointer px-3 py-2.5 flex items-center group/list-song justify-between">
        <div className="w-[70%] flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <div className="relative">
              <Image
                src={"/dummy-prof.jpg"}
                alt={"Image of " + dataMusic.title}
                width={60}
                height={60}
                className={cn(
                  "aspect-square object-cover",
                  dataMusic.type === "artist" ? "rounded-full" : "rounded-md",
                )}
              />
              <button className="absolute cursor-pointer top-0 right-0 left-0 bottom-0 opacity-0 group-hover/list-song:opacity-100 transition-all bg-black/30 rounded-md flex items-center justify-center">
                <PlayIcon fill="white" className="size-5 text-white" />
              </button>
            </div>
            <div className="flex flex-col gap-y-1.5">
              <h6 className="font-medium text-xl truncate">
                {dataMusic.title}
              </h6>
              <span className="text-sm text-white/60 font-medium">
                {dataMusic.type[0].toUpperCase() + dataMusic.type.slice(1)}
                {dataMusic.type === "artist" ? null : (
                  <>
                    {" "}
                    |{" "}
                    <Link
                      href={"/artist/1"}
                      className="cursor-pointer hover:underline text-white"
                    >
                      {dataMusic.owner}
                    </Link>
                  </>
                )}
              </span>
            </div>
          </div>
          <Badge variant={"outline"} className="px-2.5">
            {dataMusic.type[0].toUpperCase() + dataMusic.type.slice(1)}
          </Badge>
        </div>

        <div className="w-[30%] flex items-center justify-end gap-x-4">
          {dataMusic.type === "song" ? (
            <DropdownMenuSong asChild>
              <button className="cursor-pointer group-hover/list-song:opacity-100 opacity-0 transition-all">
                <MoreHorizontal className="size-4" />
              </button>
            </DropdownMenuSong>
          ) : dataMusic.type === "album" ? (
            <DropdownmenuAlbum asChild>
              <button className="cursor-pointer group-hover/list-song:opacity-100 opacity-0 transition-all">
                <MoreHorizontal className="size-4" />
              </button>
            </DropdownmenuAlbum>
          ) : dataMusic.type === "artist" ? (
            <DropdownmenuArtist asChild>
              <button className="cursor-pointer group-hover/list-song:opacity-100 opacity-0 transition-all">
                <MoreHorizontal className="size-4" />
              </button>
            </DropdownmenuArtist>
          ) : (
            <DropdownmenuPlaylist asChild>
              <button className="cursor-pointer group-hover/list-song:opacity-100 opacity-0 transition-all">
                <MoreHorizontal className="size-4" />
              </button>
            </DropdownmenuPlaylist>
          )}
          <button className="cursor-pointer rounded-full size-5 bg-primary flex items-center justify-center">
            <Check className="size-3 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
  return dataMusic.type === "song" ? (
    <ContextMenuSong>{children}</ContextMenuSong>
  ) : dataMusic.type === "album" ? (
    <ContextMenuAlbum>{children}</ContextMenuAlbum>
  ) : dataMusic.type === "artist" ? (
    <ContextMenuArtist>{children}</ContextMenuArtist>
  ) : (
    <ContextMenuPlaylist>{children}</ContextMenuPlaylist>
  );
}
