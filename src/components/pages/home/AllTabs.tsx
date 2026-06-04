import AlbumSection from "./AlbumSection";
import ArtistSection from "./ArtistSection";
import SongSection from "./SongSection";

export default function AllTabs() {
  return (
    <div className="flex flex-col gap-y-4">
      <ArtistSection />
      <AlbumSection />
      <SongSection />
    </div>
  );
}
