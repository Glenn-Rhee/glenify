"use client";
import { House, SearchIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import DropdownmenuProfile from "./dropdownmenu/DropdownmenuProfile";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isSearchFocus, setIsSearchFocus] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const pathname = usePathname();
  const router = useRouter();
  return (
    <header className="h-18 sticky top-0 left-0 right-0 z-50 shrink-0 px-10 flex items-center justify-between bg-[#0b0f18]">
      <Link href={"/"} className="font-bold text-2xl">
        Glenifyy
      </Link>
      <div className="flex items-center gap-x-2 h-full">
        <Link
          href={"/"}
          className="aspect-square flex items-center justify-center rounded-full size-12 bg-gray-100/35"
        >
          {pathname === "/" ? (
            <House className="size-6" fill="white" />
          ) : (
            <House className="size-6" />
          )}
        </Link>
        <div
          className={cn(
            "flex items-center gap-x-2 bg-gray-100/10 h-[calc(100%-1.3rem)] px-2 rounded-xl group/search transition-colors",
            isSearchFocus ? "border-ring ring-2 ring-white/50 inset-0.5" : "",
          )}
        >
          <SearchIcon className="size-6" />
          <input
            placeholder="What do you want to play?"
            onFocus={() => setIsSearchFocus(true)}
            onBlur={() => setIsSearchFocus(false)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                router.push("/search?query=" + searchValue.trim());
              }
            }}
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            className="w-124 bg-transparent placeholder:font-medium focus-visible:border-ring focus:outline-none placeholder:text-sm transition-all"
          />
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <DropdownmenuProfile />
      </div>
    </header>
  );
}
