import {
  Copy,
  DiscAlbum,
  ListMusicIcon,
  MinusCircle,
  PlusCircleIcon,
  PlusIcon,
  SearchIcon,
  ShareIcon,
  UserKeyIcon,
} from "lucide-react";
import {
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from "./ui/context-menu";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

export interface ItemsOverlay {
  Item: typeof DropdownMenuItem | typeof ContextMenuItem;
  Sub: typeof DropdownMenuSub | typeof ContextMenuSub;
  SubTrigger: typeof DropdownMenuSubTrigger | typeof ContextMenuSubTrigger;
  SubContent: typeof DropdownMenuSubContent | typeof ContextMenuSubContent;
  Group: typeof DropdownMenuGroup | typeof ContextMenuGroup;
}

interface SongMenuItemsProps {
  menu: ItemsOverlay;
}

export default function SongMenuItems(props: SongMenuItemsProps) {
  const { menu } = props;
  return (
    <>
      <menu.Sub>
        <menu.SubTrigger>
          <PlusIcon className="size-4" /> Add to playlist
        </menu.SubTrigger>
        <menu.SubContent className="w-64 me-2 px-2 mb-1 py-1.5 rounded-sm! space-y-2">
          <menu.Item onClick={(e) => e.preventDefault()}>
            <div className="flex items-center gap-2">
              <SearchIcon className="size-4 text-white" />
              <input
                className="bg-transparent w-56 border-b text-white border-white focus:outline-none placeholder:text-sm"
                placeholder="Search your library..."
              />
            </div>
          </menu.Item>
          <menu.Item>
            <PlusIcon className="size-4" /> New Playlist
          </menu.Item>
          <menu.Group>
            <menu.Item>
              <Link href="/library/1" className="w-full">
                Lets Sing With Tay
              </Link>
            </menu.Item>
            <menu.Item>
              <Link href="/library/1" className="w-full">
                Cihuy 123
              </Link>
            </menu.Item>
            <menu.Item>
              <Link href="/library/1" className="w-full">
                Cihuy 456
              </Link>
            </menu.Item>{" "}
          </menu.Group>
        </menu.SubContent>
      </menu.Sub>
      <menu.Item>
        <MinusCircle className="size-4" /> Remove From This Playlist
      </menu.Item>
      <menu.Item>
        <PlusCircleIcon className="size-4" /> Save to your liked songs
      </menu.Item>
      <menu.Item>
        <ListMusicIcon className="size-4" /> Add to queue
      </menu.Item>
      <menu.Item>
        <UserKeyIcon className="size-4" /> Go to artist
      </menu.Item>
      <menu.Item>
        <DiscAlbum className="size-4" /> Go to album
      </menu.Item>
      <menu.Sub>
        <menu.SubTrigger>
          <ShareIcon className="size-4" /> Share
        </menu.SubTrigger>
        <menu.SubContent className="w-64 me-2 px-2 mb-1 py-1.5 rounded-sm! space-y-2">
          <menu.Item className="relative">
            Copy link{" "}
            <Copy className="size-4 absolute top-1/2 -translate-y-1/2 right-5" />
          </menu.Item>
        </menu.SubContent>
      </menu.Sub>
    </>
  );
}
