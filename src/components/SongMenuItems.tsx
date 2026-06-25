import {
  DiscAlbum,
  ListMusicIcon,
  MinusCircle,
  PlusCircleIcon,
  UserKeyIcon,
} from "lucide-react";
import {
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from "./ui/context-menu";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "./ui/dropdown-menu";
import ItemOverlayPlaylist from "./ItemOverlayPlaylist";
import ItemOverlayShare from "./ItemOverlayShare";

export interface ItemsOverlay {
  Item: typeof DropdownMenuItem | typeof ContextMenuItem;
  Sub: typeof DropdownMenuSub | typeof ContextMenuSub;
  SubTrigger: typeof DropdownMenuSubTrigger | typeof ContextMenuSubTrigger;
  SubContent: typeof DropdownMenuSubContent | typeof ContextMenuSubContent;
  Group: typeof DropdownMenuGroup | typeof ContextMenuGroup;
  Separator: typeof DropdownMenuSeparator | typeof ContextMenuSeparator;
}

interface SongMenuItemsProps {
  menu: ItemsOverlay;
  isForPlaylist?: boolean;
}

export default function SongMenuItems(props: SongMenuItemsProps) {
  const { menu, isForPlaylist = false } = props;
  return (
    <>
      <ItemOverlayPlaylist menu={menu} />
      {isForPlaylist ? (
        <menu.Item>
          <MinusCircle className="size-4" /> Remove From This Playlist
        </menu.Item>
      ) : null}
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
      <ItemOverlayShare menu={menu} />
    </>
  );
}
