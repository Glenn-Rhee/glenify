"use client";
import { House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Input } from "./ui/input";
import DropdownmenuProfile from "./dropdownmenu/DropdownmenuProfile";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="h-18 sticky top-0 left-0 right-0 z-50 shrink-0 px-4 flex items-center justify-between bg-[#0b0f18]">
      <Link href={"/"}>
        <Image
          src={"/dummy-prof.jpg"}
          alt="Glenify Icon"
          width={55}
          height={55}
          className="aspect-square object-cover rounded-full"
        />
      </Link>
      <div className="flex items-center gap-x-2">
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
        <Input className="w-124" />
      </div>
      <div className="flex items-center gap-x-2">
        <DropdownmenuProfile />
      </div>
    </header>
  );
}
