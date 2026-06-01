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
import Image from "next/image";
import Link from "next/link";
import MediaControl from "./MediaControl";
import { useState } from "react";
import DropdownMenuSong from "./DropdownMenuSong";

export default function QueueSidebar() {
  const { open } = useSidebar();
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <Tabs defaultValue="queue">
      <Sidebar collapsible="icon" variant="inset" side="right">
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
              <div className="hover:bg-muted flex items-center justify-between px-1.5 py-2 rounded-md mt-2 group/item cursor-default">
                <div className="flex items-center gap-x-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsPlaying(!isPlaying);
                    }}
                    className="relative z-30 cursor-pointer"
                  >
                    <Image
                      src={"/dummy-prof.jpg"}
                      alt="Picture of song"
                      width={50}
                      height={50}
                      className="aspect-square rounded-md object-cover"
                    />
                    <MediaControl isPlaying={isPlaying} />
                  </button>
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
              </div>
              <h4 className="font-semibold text-lg mt-4">Next</h4>
              <div className="flex flex-col gap-y-2">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center gap-x-2 mt-2 hover:bg-muted px-1.5 py-2 rounded-md group/item cursor-default"
                  >
                    <div className="flex items-center gap-x-2">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setIsPlaying(!isPlaying);
                        }}
                        className="relative z-30 cursor-pointer"
                      >
                        <Image
                          src={"/dummy-prof.jpg"}
                          alt="Picture of song"
                          width={50}
                          height={50}
                          className="aspect-square rounded-md object-cover"
                        />
                        <MediaControl isPlaying={isPlaying} />
                      </button>
                      <div>
                        <h5 className="font-medium truncate">
                          I Love You But Im letting Go
                        </h5>
                        <span className="truncate text-sm">Taylor Swift</span>
                      </div>
                    </div>
                    <DropdownMenuSong />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent
              value="recentlyPlayed"
              className="mt-4 flex flex-col gap-y-4"
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="flex items-center gap-x-2 mt-2">
                  <Image
                    src={"/dummy-prof.jpg"}
                    alt="Picture of song"
                    width={50}
                    height={50}
                    className="aspect-square rounded-md object-cover"
                  />
                  <div>
                    <h5 className="font-medium truncate">
                      I Love You But Im letting Go
                    </h5>
                    <span className="truncate text-sm">Taylor Swift</span>
                  </div>
                </div>
              ))}
            </TabsContent>
          </SidebarContent>
        )}
      </Sidebar>
    </Tabs>
  );
}
