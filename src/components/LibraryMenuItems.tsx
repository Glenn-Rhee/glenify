import {
  ListMusicIcon,
  LockIcon,
  MinusCircle,
  Music4Icon,
  PencilIcon,
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
      <ItemOverlayPlaylist menu={menu} />
      <ItemOverlayShare menu={menu} />
    </>
  );
}
