"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchGhostProps {
  direction?: "left" | "right";
  placeholder?: string;
}

export default function SearchGhost(props: SearchGhostProps) {
  const { direction = "right", placeholder } = props;
  const [openSearch, setOpenSearch] = useState(false);
  return (
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
          direction === "left" ? "order-first" : "order-last",
        )}
        placeholder={placeholder}
      />
    </div>
  );
}
