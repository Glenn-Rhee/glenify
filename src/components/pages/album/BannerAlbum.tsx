"use client";
import BannerContainer from "@/components/BannerContainer";
import ContextMenuAlbum from "@/components/contextmenu/ContextMenuAlbum";
import ContextMenuArtist from "@/components/contextmenu/ContextMenuArtist";
import HeaderBanner from "@/components/HeaderBanner";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface BannerAlbumProps {
  elementId: string;
}

export default function BannerAlbum(props: BannerAlbumProps) {
  const { elementId } = props;
  const triggerRef = useRef<HTMLHeadingElement | null>(null);

  return (
    <>
      <HeaderBanner
        title="The Life of Show Girl"
        elementId={elementId}
        triggerRef={triggerRef}
      />
      <BannerContainer
        ref={triggerRef}
        className="h-[30dvh] bg-orange-800 flex px-3 py-2 gap-x-2 items-end"
      >
        <ContextMenuAlbum>
          <Image
            src={"/dummy-prof.jpg"}
            alt="Album Picture"
            width={180}
            height={180}
            className="object-cover aspect-square rounded-md shadow-xl"
          />
        </ContextMenuAlbum>
        <div className="flex flex-col gap-y-2">
          <span>Album</span>
          <ContextMenuAlbum>
            <h1 className="font-bold text-5xl">The Life Of Show Girl</h1>
          </ContextMenuAlbum>
          <h6 className="font-medium text-lg">
            <ContextMenuArtist>
              <Link href={"/artist/1"} className="hover:underline">
                Taylor Swift
              </Link>{" "}
            </ContextMenuArtist>
            | 2025 | 26 Songs, 1hr 6min 8sec
          </h6>
        </div>
      </BannerContainer>
    </>
  );
}
