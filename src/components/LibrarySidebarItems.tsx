import { Music4Icon } from "lucide-react";
import { ItemsOverlay } from "./SongMenuItems";

interface LibrarySidebarItemsProps {
  menu: ItemsOverlay;
}
export default function LibrarySidebarItems(props: LibrarySidebarItemsProps) {
  const { menu } = props;
  return (
    <menu.Item>
      <Music4Icon /> Create Playlist
    </menu.Item>
  );
}
