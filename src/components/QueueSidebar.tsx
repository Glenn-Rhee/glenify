"use client";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "./ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Link from "next/link";
import { useState } from "react";
import ImageTriggerSong from "./ImageTriggerSong";
import ContainerSong from "./ContainerSong";
import ContextMenuSong from "./contextmenu/ContextMenuSong";
import DropdownMenuSong from "./dropdownmenu/DropdownMenuSong";

export default function QueueSidebar() {
  const { open } = useSidebar();
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <Tabs defaultValue="queue">
      <Sidebar
        className="h-[calc(100%-4rem-6rem)] mt-18 bg-[#0b0f18] pt-0"
        collapsible="icon"
        variant="inset"
        side="right"
      >
        <SidebarHeader
          className={cn(
            "flex flex-row justify-between items-center",
            open ? "" : "h-full",
          )}
        >
          {open && (
            <TabsList variant="line">
              <TabsTrigger value="queue">Queue</TabsTrigger>
              <TabsTrigger value="recentlyPlayed">Recently Played</TabsTrigger>
            </TabsList>
          )}
          <SidebarTrigger side="right" />
        </SidebarHeader>
        {open && (
          <SidebarContent className="px-3">
            <TabsContent value="queue" className="mt-4">
              <h4 className="font-semibold text-lg">Now Playing</h4>
              <ContextMenuSong>
                <ContainerSong
                  asChild
                  className="flex items-center justify-between mt-2"
                >
                  <div className="flex items-center gap-x-2">
                    <ImageTriggerSong
                      src="/dummy-prof.jpg"
                      href="/"
                      size={50}
                      isplaying={isPlaying}
                      setIsPlaying={setIsPlaying}
                    />
                    <div>
                      <h4 className="font-medium truncate">
                        I Love You But Im letting Go
                      </h4>
                      <Link
                        href={"/artist/1"}
                        className="truncate text-sm hover:underline"
                      >
                        Taylor Swift
                      </Link>
                    </div>
                  </div>
                  <DropdownMenuSong />
                </ContainerSong>
              </ContextMenuSong>
              <h4 className="font-semibold text-lg mt-4">Next</h4>
              <div className="flex flex-col gap-y-2">
                {Array.from({ length: 10 }).map((_, i) => (
                  <ContextMenuSong key={i}>
                    <ContainerSong
                      key={i}
                      asChild
                      className="flex items-center justify-between mt-2"
                    >
                      <div className="flex items-center gap-x-2">
                        <ImageTriggerSong
                          src="/dummy-prof.jpg"
                          href="/"
                          size={50}
                          isplaying={isPlaying}
                          setIsPlaying={setIsPlaying}
                        />
                        <div>
                          <h5 className="font-medium truncate">
                            I Love You But Im letting Go
                          </h5>
                          <Link
                            href={"/artist/1"}
                            className="truncate text-sm hover:underline"
                          >
                            Taylor Swift
                          </Link>
                        </div>
                      </div>
                      <DropdownMenuSong />
                    </ContainerSong>
                  </ContextMenuSong>
                ))}
              </div>
            </TabsContent>
            <TabsContent
              value="recentlyPlayed"
              className="mt-4 flex flex-col gap-y-4"
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <ContextMenuSong key={i}>
                  <ContainerSong
                    asChild
                    className="flex items-center justify-between mt-2"
                  >
                    <div key={i} className="flex items-center gap-x-2">
                      <ImageTriggerSong
                        src="/dummy-prof.jpg"
                        href="/"
                        size={50}
                        isplaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                      />
                      <div>
                        <h5 className="font-medium truncate">
                          I Love You But Im letting Go
                        </h5>
                        <span className="truncate text-sm">Taylor Swift</span>
                      </div>
                    </div>
                    <DropdownMenuSong />
                  </ContainerSong>
                </ContextMenuSong>
              ))}
            </TabsContent>
          </SidebarContent>
        )}
      </Sidebar>
    </Tabs>
  );
}
