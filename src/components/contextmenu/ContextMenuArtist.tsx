import AristMenuItems from "../AristMenuItems";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
} from "../ui/context-menu";
import { ContextMap } from "./ContextMenuSong";

interface ContextMenuArtistProps {
  children: React.ReactNode;
}

export default function ContextMenuArtist(props: ContextMenuArtistProps) {
  const { children } = props;
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-64 overflow-y-hidden px-2 py-1.5 rounded-sm! space-y-2">
        <AristMenuItems menu={ContextMap} />
      </ContextMenuContent>
    </ContextMenu>
  );
}
