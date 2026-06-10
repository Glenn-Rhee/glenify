import { List } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function DropdownmenuShortPlaylist() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-x-2">
        <span>Title</span>
        <List className="size-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>Sort By</DropdownMenuLabel>
        <DropdownMenuItem className="font-medium text-sm">
          Custom Order
        </DropdownMenuItem>
        <DropdownMenuItem className="font-medium text-sm">
          Title
        </DropdownMenuItem>
        <DropdownMenuItem className="font-medium text-sm">
          Artist
        </DropdownMenuItem>
        <DropdownMenuItem className="font-medium text-sm">
          Album
        </DropdownMenuItem>
        <DropdownMenuItem className="font-medium text-sm">
          Recently Added
        </DropdownMenuItem>
        <DropdownMenuItem className="font-medium text-sm">
          Duration
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
