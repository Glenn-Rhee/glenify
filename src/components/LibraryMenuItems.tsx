import {
  ListMusicIcon,
  LockIcon,
  MinusCircle,
  Music4Icon,
  PencilIcon,
  PlusIcon,
  UserCircle2,
} from "lucide-react";
import { ItemsOverlay } from "./SongMenuItems";
import ItemOverlayPlaylist from "./ItemOverlayPlaylist";
import ItemOverlayShare from "./ItemOverlayShare";

interface LibraryMenuItemsProps {
  menu: ItemsOverlay;
}
export default function LibraryMenuItems(props: LibraryMenuItemsProps) {
  const { menu } = props;
  return (
    <>
      <menu.Item>
        <ListMusicIcon className="size-4" /> Add to queue
      </menu.Item>
      <menu.Item>
        <UserCircle2 className="size-4" /> Remove from profile
      </menu.Item>
      <menu.Separator />
      <menu.Item>
        <PencilIcon className="size-4" /> Edit Details
      </menu.Item>
      <menu.Item>
        <MinusCircle className="size-4" /> Delete
      </menu.Item>
      <menu.Separator />
      <menu.Item>
        <Music4Icon className="size-4" /> Create Playlist
      </menu.Item>
      <menu.Separator />
      <menu.Item>
        <LockIcon className="size-4" /> Make Private
      </menu.Item>
      <menu.Sub>
        <menu.SubTrigger>
          <PlusIcon className="size-4" /> Add to other playlist
        </menu.SubTrigger>
        <menu.SubContent className="w-64 me-2 px-2 mb-1 py-1.5 rounded-sm! space-y-2">
          <ItemOverlayPlaylist menu={menu} />
        </menu.SubContent>
      </menu.Sub>
      <ItemOverlayShare menu={menu} />
    </>
  );
}
