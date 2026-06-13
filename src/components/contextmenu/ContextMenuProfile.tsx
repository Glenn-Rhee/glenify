import ProfileMenuItems from "../ProfileMenuItems";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
} from "../ui/context-menu";
import { ContextMap } from "./ContextMenuSong";

interface ContextMenuProfileProps {
  children: React.ReactNode;
}

export default function ContextMenuProfile(props: ContextMenuProfileProps) {
  const { children } = props;
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-64 overflow-y-hidden px-2 py-1.5 rounded-sm! space-y-2">
        <ProfileMenuItems menu={ContextMap} />
      </ContextMenuContent>
    </ContextMenu>
  );
}
