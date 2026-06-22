"use client";
import PlaylistMenuItems from "../PlaylistMenuItems";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DropdownMap } from "./DropdownMenuSong";

interface Props {
  children: React.ReactNode;
  asChild?: boolean;
}

export default function DropdownmenuPlaylist(props: Props) {
  const { children, asChild = false } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild={asChild}>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <PlaylistMenuItems menu={DropdownMap} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
