import BannerContainer from "@/components/BannerContainer";
import Image from "next/image";

export default function BannerAlbum() {
  return (
    <BannerContainer className="h-[30dvh] bg-orange-800 flex px-3 py-2 gap-x-2 items-end">
      <Image
        src={"/dummy-prof.jpg"}
        alt="Album Picture"
        width={180}
        height={180}
        className="object-cover aspect-square rounded-md shadow"
      />
      <div className="flex flex-col gap-y-2">
        <span>Album</span>
        <h1 className="font-bold text-5xl">The Life Of Show Girl</h1>
        <h6 className="font-medium text-lg">
          Taylor Swift | 2025 | 26 Songs, 1hr 6min 8sec
        </h6>
      </div>
    </BannerContainer>
  );
}
