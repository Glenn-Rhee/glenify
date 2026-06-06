import BannerPlaylist from "@/components/pages/playlist/BannerPlaylist";

export default function LibraryPage() {
  return (
    <div
      id="library-page"
      className="w-full relative overflow-x-hidden overflow-y-auto no-scrollbar"
    >
      <BannerPlaylist />
    </div>
  );
}
