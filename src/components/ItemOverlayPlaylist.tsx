import { PlusIcon, SearchIcon } from "lucide-react";
import { ItemsOverlay } from "./SongMenuItems";
import Link from "next/link";

interface ItemOverlayPlaylistProps {
  menu: ItemsOverlay;
}
export default function ItemOverlayPlaylist(props: ItemOverlayPlaylistProps) {
  const { menu } = props;
  return (
    <menu.Sub>
      <menu.SubTrigger>
        <PlusIcon className="size-4" /> Add to other playlist
      </menu.SubTrigger>
      <menu.SubContent className="w-64 mx-3 px-2 py-1.5 rounded-sm! space-y-2">
        <div className="flex items-center gap-2">
          <SearchIcon className="size-4" />
          <input
            className="bg-transparent w-full border-b border-popover group-hover/context-menu-item:border-foreground focus:outline-none pb-1 focus:border-primary placeholder:text-sm"
            placeholder="Search your library..."
          />
        </div>
        <menu.Item>
          <PlusIcon className="size-4" /> New Playlist
        </menu.Item>
        <menu.Group>
          <menu.Item>
            <Link href="/playlist/1" className="w-full">
              Lets Sing With Tay
            </Link>
          </menu.Item>
          <menu.Item>
            <Link href="/playlist/1" className="w-full">
              Cihuy 123
            </Link>
          </menu.Item>
          <menu.Item>
            <Link href="/playlist/1" className="w-full">
              Cihuy 456
            </Link>
          </menu.Item>{" "}
        </menu.Group>
      </menu.SubContent>
    </menu.Sub>
  );
}
