"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { PauseIcon, PlayIcon, PlusIcon, SearchIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import DropdownShortLibrary from "./DropdownShortLibrary";
import Image from "next/image";
import Link from "next/link";

export default function LibrarySidebar() {
  const pathname = usePathname();
  const { open } = useSidebar();
  const [openSearch, setOpenSearch] = useState(false);
  const [isplaying, setIsPlaying] = useState(false);
  const router = useRouter();

  if (pathname.includes("/auth")) return null;
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader className={cn("flex flex-col")}>
        <div
          className={cn(
            "flex items-center justify-between",
            open ? "justify-between" : "justify-center",
          )}
        >
          {open ? <h4 className="text-lg font-bold">Your Library</h4> : null}
          <div
            className={cn(
              "flex items-center gap-2",
              open ? "flex-row" : "flex-col",
            )}
          >
            <Button
              size={"icon-sm"}
              variant={"ghost"}
              className={cn(open ? "order-first" : "order-last")}
            >
              <PlusIcon className="size-6" />
            </Button>
            <SidebarTrigger />
          </div>
        </div>
        {open ? (
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <Button
                onClick={() => setOpenSearch(!openSearch)}
                variant={"ghost"}
                size={"icon-sm"}
                className="relative"
              >
                <SearchIcon className="size-6" />
              </Button>
              <input
                className={cn(
                  "w-56 bg-transparent border-b border-white focus-visible:border-ring focus:ring-0 focus:outline-none placeholder:text-sm transition-all",
                  openSearch ? "w-56" : "w-0",
                )}
                placeholder="Search your library..."
              />
            </div>
            <DropdownShortLibrary />
          </div>
        ) : null}
      </SidebarHeader>
      <SidebarContent
        style={{ overflowY: "auto" }}
        className={cn("overflow-y-auto", open ? "mt-4" : "mt-0")}
      >
        <SidebarGroup>
          <SidebarMenu className={cn(open ? "gap-y-4" : "gap-y-2")}>
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                onClick={() => router.push("/library/1")}
                role="button"
                className="hover:bg-muted px-1.5 py-2 rounded-md group/item"
              >
                <SidebarMenuItem className="flex items-center gap-x-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPlaying(!isplaying);
                    }}
                    className="relative z-10 cursor-pointer"
                  >
                    <Image
                      src={"/dummy-prof.jpg"}
                      alt="Image of Library"
                      width={60}
                      height={60}
                      className="aspect-square rounded-md object-cover"
                    />
                    <span className="absolute cursor-pointer z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-50 rounded-full p-1 opacity-0 group-hover/item:opacity-100 transition-opacity">
                      {isplaying ? (
                        <PauseIcon className="size-6" />
                      ) : (
                        <PlayIcon className="size-6" />
                      )}
                    </span>
                    <div className="absolute z-20 top-0 right-0 left-0 bottom-0 bg-gray-700/25 rounded-md opacity-0 transition-all group-hover/item:opacity-100" />
                  </button>
                  {open ? (
                    <div>
                      <h4 className="font-semibold">Taylorrrrrr</h4>
                      <span className="text-sm">Playlist | Glenn Rhee</span>
                    </div>
                  ) : null}
                </SidebarMenuItem>
              </div>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
