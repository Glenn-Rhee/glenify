"use client";
import Container from "@/components/Container";
import ContextMenuArtist from "@/components/contextmenu/ContextMenuArtist";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PlayIcon } from "lucide-react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const triggerRef = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    const scrollContainer = document.getElementById("artist-page");
    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, { y: -20, opacity: 0, display: "none" });
      ScrollTrigger.create({
        trigger: triggerRef.current,
        scroller: scrollContainer,
        start: "bottom top",
        onEnter: () => {
          gsap.to(headerRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            display: "flex",
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(headerRef.current, {
            y: -20,
            opacity: 0,
            duration: 0.3,
            display: "none",
            ease: "power2.in",
          });
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 items-center gap-x-4 left-[--sidebar-width] right-[--sidebar-width] w-full z-50 bg-chart-3/60 backdrop-blur-md px-6 py-3 hidden"
      >
        <button className="size-12 bg-primary rounded-full flex items-center justify-center">
          <PlayIcon className="size-6" fill="white" />
        </button>
        <h2 className="font-bold text-2xl">Taylor Swift</h2>
      </header>
      <header ref={triggerRef} className="bg-orange-900/80 w-full h-[45dvh]">
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
      </header>
    </>
  );
}
