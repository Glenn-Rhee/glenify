import BannerContainer from "@/components/BannerContainer";
import ContextMenuLibraryItems from "@/components/contextmenu/ContextMenuLibraryItems";
import Image from "next/image";

export default function BannerPlaylist() {
  return (
    <BannerContainer className="h-[30dvh] bg-orange-800 flex px-3 py-2 gap-x-2 items-end">
      <ContextMenuLibraryItems>
        <Image
          src={"/dummy-prof.jpg"}
          alt="Album Picture"
          width={180}
          height={180}
          className="object-cover aspect-square rounded-md shadow-xl"
        />
      </ContextMenuLibraryItems>
      <div className="flex flex-col gap-y-2">
        <span>Public Playlist</span>
        <ContextMenuLibraryItems>
          <h1 className="font-bold text-5xl">Playlist cihuy</h1>
        </ContextMenuLibraryItems>
      </div>
    </BannerContainer>
  );
}
