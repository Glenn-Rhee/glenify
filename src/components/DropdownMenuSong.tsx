import {
  Copy,
  DiscAlbum,
  ListMusicIcon,
  MinusCircle,
  MoreVertical,
  PlusCircleIcon,
  PlusIcon,
  SearchIcon,
  ShareIcon,
  UserKeyIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function DropdownMenuSong() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group-hover/item:opacity-100 opacity-0 cursor-pointer">
        <MoreVertical className="size-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-64 px-2 py-1.5 rounded-sm! space-y-2"
      >
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <PlusIcon className="size-4" /> Add to playlist{" "}
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-64 me-2 px-2 mb-1 py-1.5 rounded-sm! space-y-2">
            <DropdownMenuItem onClick={(e) => e.preventDefault()}>
              <div className="flex items-center gap-2">
                <SearchIcon className="size-4 text-white" />
                <input
                  className={cn(
                    "bg-transparent w-56 border-b text-white hover:placeholder:text-white border-white focus-visible:border-ring focus:ring-0 focus:outline-none placeholder:text-sm transition-all",
                  )}
                  placeholder="Search your library..."
                />
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-muted hover:text-foreground rounded-sm">
              <PlusIcon className="size-4" /> New Playlist
            </DropdownMenuItem>
            <DropdownMenuGroup className="space-y-1 mt-1">
              <DropdownMenuItem>
                <Link href={"/library/1"} className="w-full">
                  Lets Sing With Tay
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/library/1"} className="w-full">
                  Cihuy 123
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/library/1"} className="w-full">
                  Cihuy 456
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem>
          <MinusCircle className="size-4" /> Remove From This Playlist
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PlusCircleIcon className="size-4" /> Save to your liked songs
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ListMusicIcon className="size-4" /> Add to queue
        </DropdownMenuItem>
        <DropdownMenuItem>
          <UserKeyIcon className="size-4" /> Go to artist
        </DropdownMenuItem>
        <DropdownMenuItem>
          <DiscAlbum className="size-4" /> Go to album
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <ShareIcon className="size-4" /> Share
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-64 me-2 px-2 mb-1 py-1.5 rounded-sm! space-y-2">
            <DropdownMenuItem className="relative">
              Copy link{" "}
              <Copy className="size-4 absolute top-1/2 bottom-1/2 -translate-y-1/2 right-5" />
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
