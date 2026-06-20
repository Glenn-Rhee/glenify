"use client";
import ProfileMenuItems from "../ProfileMenuItems";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DropdownMap } from "./DropdownMenuSong";

interface Props {
  children: React.ReactNode;
}

export default function DropdownmenuMoreOptProfile(props: Props) {
  const { children } = props;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="mt-4">{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <ProfileMenuItems menu={DropdownMap} isForOption />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
