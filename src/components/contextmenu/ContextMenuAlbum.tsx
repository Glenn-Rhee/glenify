import AlbumMenuItems from "../AlbumMenuItems";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
} from "../ui/context-menu";
import { ContextMap } from "./ContextMenuSong";

interface ContextMenuAlbumProps {
  children: React.ReactNode;
}

export default function ContextMenuAlbum(props: ContextMenuAlbumProps) {
  const { children } = props;
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-64 overflow-y-hidden px-2 py-1.5 rounded-sm! space-y-2">
        <AlbumMenuItems menu={ContextMap} />
      </ContextMenuContent>
    </ContextMenu>
  );
}
