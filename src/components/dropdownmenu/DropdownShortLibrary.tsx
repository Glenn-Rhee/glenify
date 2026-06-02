"use client";
import { CheckIcon, ListIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";

export default function DropdownShortLibrary() {
  const [shortBy, setShortBy] = useState("Recents");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          size={"icon-sm"}
          className="data-[state=open]:text-foreground"
        >
          <ListIcon className="size-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Short by</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setShortBy("Recents")}>
            {shortBy === "Recents" && (
              <CheckIcon className="size-4 text-primary! focus:text-primary" />
            )}
            Recents
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setShortBy("Alphabetical")}>
            {shortBy === "Alphabetical" && (
              <CheckIcon className="size-4 text-primary! focus:text-primary" />
            )}
            Alphabetical
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
