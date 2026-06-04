import Banner from "@/components/pages/artist/Banner";
import MainContent from "@/components/pages/artist/MainContent";

export default function ArtistPage() {
  return (
    <div className="w-full overflow-x-hidden overflow-y-auto no-scrollbar">
      <Banner />
      <MainContent />
    </div>
  );
}
