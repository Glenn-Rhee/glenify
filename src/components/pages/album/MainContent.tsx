import Container from "@/components/Container";
import DropdownmenuAlbum from "@/components/dropdownmenu/DropdownmenuAlbum";
import { MoreVertical, PlayIcon, PlusCircle, ShuffleIcon } from "lucide-react";

export default function MainContent() {
  return (
    <Container className="space-y-2 pb-56">
      <div className="flex items-center gap-x-8 w-full my-4">
        <button className="size-12 bg-primary rounded-full flex items-center justify-center">
          <PlayIcon className="size-6" fill="white" />
        </button>
        <button>
          <ShuffleIcon className="size-6" />
        </button>
        <button>
          <PlusCircle className="size-6" />
        </button>
        <DropdownmenuAlbum>
          <MoreVertical className="size-6" />
        </DropdownmenuAlbum>
      </div>
      
    </Container>
  );
}
