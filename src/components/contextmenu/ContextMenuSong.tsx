import SongMenuItems, { ItemsOverlay } from "../SongMenuItems";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "../ui/context-menu";

interface ContextMenuSongProps {
  children: React.ReactNode;
  isForPlaylist?: boolean;
}

export const ContextMap: ItemsOverlay = {
  Item: ContextMenuItem,
  Sub: ContextMenuSub,
  SubTrigger: ContextMenuSubTrigger,
  SubContent: ContextMenuSubContent,
  Group: ContextMenuGroup,
  Separator: ContextMenuSeparator,
};

export default function ContextMenuSong(props: ContextMenuSongProps) {
  const { children, isForPlaylist = false } = props;
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-64 px-2 py-1.5 rounded-sm! space-y-2">
        <SongMenuItems menu={ContextMap} isForPlaylist={isForPlaylist} />
      </ContextMenuContent>
    </ContextMenu>
  );
}
