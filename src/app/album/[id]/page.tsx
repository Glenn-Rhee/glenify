import BannerAlbum from "@/components/pages/album/BannerAlbum";
import MainContent from "@/components/pages/album/MainContent";

export default function AlbumPageId() {
  return (
    <div
      id="album-page"
      className="w-full relative overflow-x-hidden overflow-y-auto no-scrollbar"
    >
      <BannerAlbum elementId="album-page" />
      <MainContent />
    </div>
  );
}
