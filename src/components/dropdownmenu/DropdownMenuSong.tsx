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
import { cn } from "@/lib/utils";

export const DropdownMap: ItemsOverlay = {
  Item: DropdownMenuItem,
  Sub: DropdownMenuSub,
  SubTrigger: DropdownMenuSubTrigger,
  SubContent: DropdownMenuSubContent,
  Group: DropdownMenuGroup,
  Separator: DropdownMenuSeparator,
};

interface DropdownMenuSongProps {
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function DropdownMenuSong(props: DropdownMenuSongProps) {
  const { asChild = false, className, children } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild={asChild}
        className={cn(
          asChild
            ? className
            : "group-hover/item:opacity-100 opacity-0 cursor-pointer",
          className,
        )}
      >
        {asChild ? children : <MoreVertical className="size-6" />}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-64"
        onContextMenu={(e) => e.stopPropagation()}
      >
        <SongMenuItems menu={DropdownMap} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
