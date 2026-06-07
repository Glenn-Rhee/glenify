"use client";
import { PlayIcon } from "lucide-react";
import { RefObject, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeaderBannerProps {
  elementId: string;
  triggerRef: RefObject<HTMLHeadingElement | null>;
  title: string;
}

export default function HeaderBanner(props: HeaderBannerProps) {
  const { elementId, triggerRef, title } = props;
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const scrollContainer = document.getElementById(elementId);
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
  }, [elementId, triggerRef]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 items-center gap-x-4 left-[--sidebar-width] right-[--sidebar-width] w-full z-50 bg-chart-3/60 backdrop-blur-md px-6 py-3 hidden"
    >
      <button className="size-12 bg-primary rounded-full flex items-center justify-center">
        <PlayIcon className="size-6" fill="white" />
      </button>
      <h2 className="font-bold text-2xl">{title}</h2>
    </header>
  );
}
