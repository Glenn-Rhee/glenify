import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import SongMenuItems, { ItemsOverlay } from "../SongMenuItems";

export const DropdownMap: ItemsOverlay = {
  Item: DropdownMenuItem,
  Sub: DropdownMenuSub,
  SubTrigger: DropdownMenuSubTrigger,
  SubContent: DropdownMenuSubContent,
  Group: DropdownMenuGroup,
  Separator: DropdownMenuSeparator,
};

export default function DropdownMenuSong() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group-hover/item:opacity-100 opacity-0 cursor-pointer">
        <MoreVertical className="size-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-64 px-2 py-1.5 rounded-sm! space-y-2"
        onContextMenu={(e) => e.stopPropagation()}
      >
        <SongMenuItems menu={DropdownMap} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
