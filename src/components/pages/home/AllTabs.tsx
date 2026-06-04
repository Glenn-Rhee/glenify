import AlbumSection from "./AlbumSection";
import ArtistSection from "./ArtistSection";

export default function AllTabs() {
  return (
    <div className="flex flex-col gap-y-4">
      <ArtistSection />
      <AlbumSection />
    </div>
  );
}
