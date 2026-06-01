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
import Image from "next/image";

export default function LibrarySidebar() {
  const pathname = usePathname();
  const { open } = useSidebar();
  const [openSearch, setOpenSearch] = useState(false);

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
              <SidebarMenuItem key={i} className="flex items-center gap-x-4">
                <Image
                  src={"/dummy-prof.jpg"}
                  alt="Image of Library"
                  width={60}
                  height={60}
                  className="aspect-square rounded-md object-cover"
                />
                {open ? (
                  <div>
                    <h4 className="font-semibold">Taylorrrrrr</h4>
                    <span className="text-sm">Playlist | Glenn Rhee</span>
                  </div>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
