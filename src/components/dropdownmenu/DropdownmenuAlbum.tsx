"use client";
import AlbumMenuItems from "../AlbumMenuItems";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DropdownMap } from "./DropdownMenuSong";

interface DropdownmenuAlbumProps {
  children: React.ReactNode;
  asChild?: boolean;
}
export default function DropdownmenuAlbum(props: DropdownmenuAlbumProps) {
  const { children, asChild = false } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild={asChild}>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <AlbumMenuItems menu={DropdownMap} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
