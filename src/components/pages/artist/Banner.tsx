"use client";
import Container from "@/components/Container";
import ContextMenuArtist from "@/components/contextmenu/ContextMenuArtist";
import { useRef } from "react";
import BannerContainer from "../../BannerContainer";
import HeaderBanner from "@/components/HeaderBanner";

interface BannerProps {
  elementId: string;
}

export default function Banner(props: BannerProps) {
  const { elementId } = props;
  const triggerRef = useRef<HTMLHeadingElement | null>(null);
  return (
    <>
      <HeaderBanner
        title="Taylor Swift"
        elementId={elementId}
        triggerRef={triggerRef}
      />
      <BannerContainer ref={triggerRef}>
        <Container
          className="w-full flex flex-col bg-fixed justify-end pb-5 h-full gap-y-4 bg-center bg-cover"
          style={{ backgroundImage: "url('/dummy-prof.jpg')" }}
        >
          <ContextMenuArtist>
            <h1 className="font-bold text-7xl">Taylor Swift</h1>
          </ContextMenuArtist>
          <span className="font-medium text-lg">
            100.000.000 monthly listened
          </span>
        </Container>
      </BannerContainer>
    </>
  );
}
