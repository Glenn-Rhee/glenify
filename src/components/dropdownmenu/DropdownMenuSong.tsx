import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import SongMenuItems from "../SongMenuItems";

const DropdownMap = {
  Item: DropdownMenuItem,
  Sub: DropdownMenuSub,
  SubTrigger: DropdownMenuSubTrigger,
  SubContent: DropdownMenuSubContent,
  Group: DropdownMenuGroup,
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
