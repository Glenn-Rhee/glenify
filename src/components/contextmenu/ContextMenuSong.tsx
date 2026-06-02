import SongMenuItems from "../SongMenuItems";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "../ui/context-menu";

interface ContextMenuSongProps {
  children: React.ReactNode;
}

const ContextMap = {
  Item: ContextMenuItem,
  Sub: ContextMenuSub,
  SubTrigger: ContextMenuSubTrigger,
  SubContent: ContextMenuSubContent,
  Group: ContextMenuGroup,
};
export default function ContextMenuSong(props: ContextMenuSongProps) {
  const { children } = props;
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-64 px-2 py-1.5 rounded-sm! space-y-2">
        <SongMenuItems menu={ContextMap} />
      </ContextMenuContent>
    </ContextMenu>
  );
}
