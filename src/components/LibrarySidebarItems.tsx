import { Music4Icon } from "lucide-react";
import { ItemsOverlay } from "./SongMenuItems";

interface LibrarySidebarItemsProps {
  menu: ItemsOverlay;
}
export default function LibrarySidebarItems(props: LibrarySidebarItemsProps) {
  const { menu } = props;
  return (
    <menu.Item>
      <Music4Icon className="size-4"/> Create Playlist
    </menu.Item>
  );
}
