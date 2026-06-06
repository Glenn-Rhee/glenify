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
import { PlusIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ContainerSong from "./ContainerSong";
import ImageTriggerSong from "./ImageTriggerSong";
import { usePageShow } from "@/hooks/use-page-show";
import SearchGhost from "./SearchGhost";
import DropdownShortLibrary from "./dropdownmenu/DropdownShortLibrary";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
} from "./ui/context-menu";
import LibrarySidebarItems from "./LibrarySidebarItems";
import { ContextMap } from "./contextmenu/ContextMenuSong";
import ContextMenuLibraryItems from "./contextmenu/ContextMenuLibraryItems";

export default function LibrarySidebar() {
  usePageShow();
  const pathname = usePathname();
  const { open } = useSidebar();
  const [isplaying, setIsPlaying] = useState(false);
  if (pathname.includes("/auth")) return null;
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Sidebar
          className="h-[calc(100%-4rem-6rem)] mt-18 bg-[#0b0f18] pt-0"
          collapsible="icon"
          variant="inset"
        >
          <SidebarHeader className={cn("flex flex-col")}>
            <div
              className={cn(
                "flex items-center justify-between",
                open ? "justify-between" : "justify-center",
              )}
            >
              {open ? (
                <h4 className="text-lg font-bold">Your Library</h4>
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
                <SearchGhost />
                <DropdownShortLibrary />
              </div>
            ) : null}
          </SidebarHeader>
          <SidebarContent
            style={{ overflowY: "auto" }}
            className={cn("overflow-y-auto", open ? "mt-4" : "mt-0")}
          >
            <SidebarGroup>
              <SidebarMenu className={"gap-y-2"}>
                {Array.from({ length: 50 }).map((_, i) => (
                  <ContextMenuLibraryItems key={i}>
                    <ContainerSong key={`${pathname}-${i}`} href="/playlist/1">
                      <SidebarMenuItem className="flex items-center gap-x-4">
                        <ImageTriggerSong
                          open={open}
                          href={"/playlist/1"}
                          isplaying={isplaying}
                          setIsPlaying={setIsPlaying}
                          src={"/dummy-prof.jpg"}
                          size={50}
                        />
                        {open ? (
                          <div>
                            <h4 className="font-semibold">Taylorrrrrr</h4>
                            <span className="text-sm">
                              Playlist | Glenn Rhee
                            </span>
                          </div>
                        ) : null}
                      </SidebarMenuItem>
                    </ContainerSong>
                  </ContextMenuLibraryItems>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter />
        </Sidebar>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64 px-2 py-1.5 rounded-sm! space-y-2">
        <LibrarySidebarItems menu={ContextMap} />
      </ContextMenuContent>
    </ContextMenu>
  );
}
