import Container from "@/components/Container";
import DropdownmenuMoreOptProfile from "@/components/dropdownmenu/DropdownmenuMoreOptProfile";
import { MoreHorizontal } from "lucide-react";
import SectionArtist from "./SectionArtist";
import SectionPlaylist from "./SectionPlaylist";

export default function MainProfile() {
  return (
    <Container className="space-y-2 pb-56">
      <DropdownmenuMoreOptProfile>
        <MoreHorizontal className="size-6" />
      </DropdownmenuMoreOptProfile>
      <SectionArtist />
      <SectionPlaylist />
    </Container>
  );
}
