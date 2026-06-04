import Container from "@/components/Container";
import { MoreVertical, PlayIcon, ShuffleIcon } from "lucide-react";
import SongList from "../home/SongList";
import DropdownmenuArtist from "@/components/dropdownmenu/DropdownmenuArtist";

export default function MainContent() {
  return (
    <Container className="space-y-2 pb-56">
      <div className="flex items-center gap-x-4 w-full my-4">
        <button className="size-12 bg-primary rounded-full flex items-center justify-center">
          <PlayIcon className="size-6" fill="white" />
        </button>
        <button>
          <ShuffleIcon className="size-6" />
        </button>
        <DropdownmenuArtist>
          <MoreVertical className="size-6" />
        </DropdownmenuArtist>
      </div>
      <h5 className="font-bold text-lg">Popular</h5>
      <SongList />
    </Container>
  );
}
