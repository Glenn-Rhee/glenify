import AlbumMenuItems from "../AlbumMenuItems";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DropdownMap } from "./DropdownMenuSong";

interface DropdownmenuAlbumProps {
  children: React.ReactNode;
}
export default function DropdownmenuAlbum(props: DropdownmenuAlbumProps) {
  const { children } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <AlbumMenuItems menu={DropdownMap} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
