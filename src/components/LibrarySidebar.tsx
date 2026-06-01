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
import { PlusIcon, SearchIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import DropdownShortLibrary from "./DropdownShortLibrary";
import ContainerSong from "./ContainerSong";
import ImageTriggerSong from "./ImageTriggerSong";
import { usePageShow } from "@/hooks/use-page-show";
import Link from "next/link";

export default function LibrarySidebar() {
  usePageShow();
  const pathname = usePathname();
  const { open } = useSidebar();
  const [openSearch, setOpenSearch] = useState(false);
  const [isplaying, setIsPlaying] = useState(false);
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
          {open ? (
            <Link href={"/"} className="text-lg font-bold">
              Your Library
            </Link>
          ) : null}
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
              <ContainerSong
                open={open}
                key={`${pathname}-${i}`}
                href="/library/1"
              >
                <SidebarMenuItem className="flex items-center gap-x-4">
                  <ImageTriggerSong
                    open={open}
                    href={"/library/1"}
                    isplaying={isplaying}
                    setIsPlaying={setIsPlaying}
                    src={"/dummy-prof.jpg"}
                    size={60}
                  />
                  {open ? (
                    <div>
                      <h4 className="font-semibold">Taylorrrrrr</h4>
                      <span className="text-sm">Playlist | Glenn Rhee</span>
                    </div>
                  ) : null}
                </SidebarMenuItem>
              </ContainerSong>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
