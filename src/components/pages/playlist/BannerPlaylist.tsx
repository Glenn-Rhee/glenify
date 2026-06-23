"use client";
import BannerContainer from "@/components/BannerContainer";
import ContextMenuLibraryItems from "@/components/contextmenu/ContextMenuPlaylist";
import HeaderBanner from "@/components/HeaderBanner";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface BannerPlaylistProps {
  elementId: string;
}

export default function BannerPlaylist(props: BannerPlaylistProps) {
  const { elementId } = props;
  const triggerRef = useRef<HTMLHeadingElement | null>(null);

  return (
    <>
      <HeaderBanner
        title="Cihuy 123"
        triggerRef={triggerRef}
        elementId={elementId}
      />
      <BannerContainer className="h-[30dvh] bg-orange-800 flex px-3 py-2 gap-x-2 items-end">
        <Image
          src={"/dummy-prof.jpg"}
          alt="Playlist Picture"
          width={180}
          height={180}
          className="object-cover aspect-square rounded-md shadow-xl"
        />
        <div className="flex flex-col gap-y-4">
          <span>Public Playlist</span>
          <ContextMenuLibraryItems>
            <h1 className="font-bold text-5xl">Cihuy 123</h1>
          </ContextMenuLibraryItems>
          <div className="flex items-center gap-x-1">
            <div className="flex items-center gap-x-1">
              <Image
                src={"/dummy-prof.jpg"}
                alt="Profile Picture"
                width={20}
                height={20}
                className="object-cover aspect-square rounded-md shadow-xl"
              />
              <Link
                href={"/profile/1"}
                className="font-medium text-sm hover:underline"
              >
                Glenn Rhee
              </Link>
            </div>
            <span className="text-sm font-medium">
              {" "}
              | 273 songs, 18 hr 2 min
            </span>
          </div>
        </div>
      </BannerContainer>
    </>
  );
}
