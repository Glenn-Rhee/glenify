import LibraryMenuItems from "../LibraryMenuItems";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
} from "../ui/context-menu";
import { ContextMap } from "./ContextMenuSong";

interface ContextMenuLibraryItemsProps {
  children: React.ReactNode;
}
export default function ContextMenuLibraryItems(
  props: ContextMenuLibraryItemsProps,
) {
  const { children } = props;
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-64 px-2 py-1.5 rounded-sm! space-y-2">
        <LibraryMenuItems menu={ContextMap} />
      </ContextMenuContent>
    </ContextMenu>
  );
}
