import AristMenuItems from "../AristMenuItems";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DropdownMap } from "./DropdownMenuSong";

interface DropdownmenuArtistProps {
  children: React.ReactNode;
}

export default function DropdownmenuArtist(props: DropdownmenuArtistProps) {
  const { children } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <AristMenuItems menu={DropdownMap} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
