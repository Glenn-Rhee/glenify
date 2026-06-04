import { List, PlusCircleIcon } from "lucide-react";
import { ItemsOverlay } from "./SongMenuItems";
import ItemOverlayPlaylist from "./ItemOverlayPlaylist";
import ItemOverlayShare from "./ItemOverlayShare";

interface AlbumMenuItemsProps {
  menu: ItemsOverlay;
}

export default function AlbumMenuItems(props: AlbumMenuItemsProps) {
  const { menu } = props;
  return (
    <>
      <menu.Item>
        <PlusCircleIcon className="size-4" /> Add to your library
      </menu.Item>
      <menu.Item>
        <List className="size-4" /> Add to queue
      </menu.Item>
      <menu.Separator />
      <ItemOverlayPlaylist menu={menu} />
      <ItemOverlayShare menu={menu}/>
    </>
  );
}
