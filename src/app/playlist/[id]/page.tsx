import MainContent from "@/components/pages/album/MainContent";
import BannerPlaylist from "@/components/pages/playlist/BannerPlaylist";

export default function PlaylistPage() {
  return (
    <div
      id="library-page"
      className="w-full relative overflow-x-hidden overflow-y-auto no-scrollbar"
    >
      <BannerPlaylist elementId="library-page" />
      <MainContent useFor="playlist" />
    </div>
  );
}
