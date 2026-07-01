"use client";
import ContextMenuArtist from "@/components/contextmenu/ContextMenuArtist";
import DropdownMenuSong from "@/components/dropdownmenu/DropdownMenuSong";
import { getFormatDurationSong } from "@/helper/getFormatDuration";
import ColumnTableValidation from "@/validation/column-table-validation";
import { ColumnDef } from "@tanstack/react-table";
import { Clock, MoreVertical, PlusCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import z from "zod";

export const columnsSong: ColumnDef<
  z.infer<typeof ColumnTableValidation.SCHEMASONGS>
>[] = [
  {
    id: "no",
    header: "#",
    cell: ({ row, table }) => {
      const { pageIndex, pageSize } = table.getState().pagination;
      return <span>{pageIndex * pageSize + row.index + 1}</span>;
    },
  },
  {
    accessorKey: "DataSong.Title",
    header: "Title",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-4">
        <Image
          src={"/dummy-prof.jpg"}
          alt="Song artist picture"
          width={60}
          height={60}
          className="aspect-square rounded-md"
        />
        <div className="flex flex-col gap-y-1">
          <h6 className="font-medium">{row.original.DataSong.Title}</h6>
          <ContextMenuArtist>
            <Link href={"/artist/1"} className="text-xs hover:underline">
              {row.original.DataSong.Artist}
            </Link>
          </ContextMenuArtist>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "DataSong.Album",
    header: "Album",
    cell: ({ row }) => (
      <span className="text-sm">{row.original.DataSong.Album}</span>
    ),
  },
  {
    accessorKey: "Duration",
    header: () => (
      <div className="w-full flex justify-end">
        <Clock className="size-4" />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-end gap-x-3 text-white">
        <button className="cursor-pointer opacity-0 group-hover/option:opacity-100 transition-all duration-100">
          <PlusCircleIcon className="size-5" />
        </button>
        <span className="text-sm">
          {getFormatDurationSong(row.original.Duration)}
        </span>
        <DropdownMenuSong asChild>
          <button className="cursor-pointer opacity-0 group-hover/option:opacity-100 transition-all duration-100">
            <MoreVertical className="size-5" />
          </button>
        </DropdownMenuSong>
      </div>
    ),
  },
];
