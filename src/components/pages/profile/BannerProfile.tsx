"use client";
import BannerContainer from "@/components/BannerContainer";
import ContextMenuProfile from "@/components/contextmenu/ContextMenuProfile";
import HeaderBanner from "@/components/HeaderBanner";
import { Pencil } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function BannerProfile() {
  const triggerRef = useRef<HTMLHeadingElement | null>(null);

  return (
    <>
      <HeaderBanner
        title="Ariel Rizki"
        elementId="profile-page"
        triggerRef={triggerRef}
      />
      <BannerContainer
        ref={triggerRef}
        className="h-[30dvh] bg-orange-800 flex px-3 py-2 gap-x-8 items-end"
      >
        <button className="relative cursor-pointer group/profile">
          <Image
            src={"/dummy-prof.jpg"}
            alt="Profile Picture"
            width={180}
            height={180}
            className="object-cover aspect-square rounded-full shadow-xl"
          />
          <div className="absolute group-hover/profile:opacity-100 transition-all duration-300 opacity-0 top-0 right-0 left-0 bg-sidebar/30 h-full w-full rounded-full flex items-center justify-center">
            <Pencil className="size-8" />
          </div>
        </button>
        <div className="flex flex-col gap-y-1.5">
          <span>Profile</span>
          <ContextMenuProfile>
            <button>
              <h1 className="font-bold text-7xl">Glenn</h1>
            </button>
          </ContextMenuProfile>
          <span className="font-medium text-lg">10 Public Playlist</span>
        </div>
      </BannerContainer>
    </>
  );
}
