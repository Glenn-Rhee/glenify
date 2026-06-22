import AristMenuItems from "../AristMenuItems";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DropdownMap } from "./DropdownMenuSong";

interface DropdownmenuArtistProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export default function DropdownmenuArtist(props: DropdownmenuArtistProps) {
  const { children, asChild = false } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild={asChild}>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <AristMenuItems menu={DropdownMap} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
