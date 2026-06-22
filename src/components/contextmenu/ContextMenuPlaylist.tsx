import PlaylistMenuItems from "../PlaylistMenuItems";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
} from "../ui/context-menu";
import { ContextMap } from "./ContextMenuSong";

interface ContextMenuPlaylist {
  children: React.ReactNode;
}
export default function ContextMenuPlaylist(props: ContextMenuPlaylist) {
  const { children } = props;
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-64 px-2 py-1.5 rounded-sm! space-y-2">
        <PlaylistMenuItems menu={ContextMap} />
      </ContextMenuContent>
    </ContextMenu>
  );
}
