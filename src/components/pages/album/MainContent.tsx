"use client";
import Container from "@/components/Container";
import DropdownmenuAlbum from "@/components/dropdownmenu/DropdownmenuAlbum";
import { MoreVertical, PlayIcon, PlusCircle, ShuffleIcon } from "lucide-react";
import DataTableSong from "./DataTableSong";
import SearchGhost from "@/components/SearchGhost";
import DropdownmenuShortPlaylist from "@/components/dropdownmenu/DropdownmenuShortPlaylist";
import DropdownmenuPlaylist from "@/components/dropdownmenu/DropdownmenuPlaylist";
import { columnsSong, songs } from "./columns";

interface MainContentProps {
  useFor?: "playlist" | "album";
}

export default function MainContent(props: MainContentProps) {
  const { useFor = "album" } = props;
  return (
    <Container className="space-y-2 pb-56">
      <div className="flex items-center justify-between gap-x-8 w-full my-4">
        <div className="flex items-center gap-x-8 w-full">
          <button className="size-12 bg-primary rounded-full flex items-center justify-center">
            <PlayIcon className="size-6" fill="white" />
          </button>
          <button>
            <ShuffleIcon className="size-6" />
          </button>
          <button>
            <PlusCircle className="size-6" />
          </button>
          {useFor === "playlist" ? (
            <DropdownmenuPlaylist>
              <MoreVertical className="size-6" />
            </DropdownmenuPlaylist>
          ) : (
            <DropdownmenuAlbum>
              <MoreVertical className="size-6" />
            </DropdownmenuAlbum>
          )}
        </div>
        {useFor === "playlist" && (
          <div className="flex items-center gap-x-4">
            <SearchGhost placeholder="Find in playlist" direction="left" />
            <DropdownmenuShortPlaylist />
          </div>
        )}
      </div>
      <DataTableSong columns={columnsSong} songs={songs} />
    </Container>
  );
}
