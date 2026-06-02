import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

export default function DropdownmenuProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <Image
          src={"/dummy-prof.jpg"}
          alt="Profile User"
          width={55}
          height={55}
          className="aspect-square object-cover rounded-full"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <Link href={"/profile"}>
          <DropdownMenuItem>Profile</DropdownMenuItem>
        </Link>
        <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
