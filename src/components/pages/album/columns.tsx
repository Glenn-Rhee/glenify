import ContextMenuArtist from "@/components/contextmenu/ContextMenuArtist";
import DropdownMenuSong from "@/components/dropdownmenu/DropdownMenuSong";
import { getFormatDurationSong } from "@/helper/getFormatDuration";
import ColumnTableValidation from "@/validation/column-table-validation";
import { ColumnDef } from "@tanstack/react-table";
import { MoreVertical, PlusCircleIcon } from "lucide-react";
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
    accessorKey: "DataSong",
    header: "Title",
    cell: ({ row }) => (
      <div className="flex flex-col gap-y-1">
        <h6 className="font-medium">{row.original.DataSong.Title}</h6>
        <ContextMenuArtist>
          <Link href={"/artist/1"} className="text-xs hover:underline">
            {row.original.DataSong.Artist}
          </Link>
        </ContextMenuArtist>
      </div>
    ),
  },
  {
    accessorKey: "Plays",
    header: "Plays",
    cell: ({ row }) => (
      <span className="text-sm">
        {row.original.Plays.toLocaleString("id-ID")}
      </span>
    ),
  },
  {
    accessorKey: "Duration",
    header: "Duration",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2 text-white">
        <button className="cursor-pointer">
          <PlusCircleIcon className="size-5" />
        </button>
        <span className="text-sm">
          {getFormatDurationSong(row.original.Duration)}
        </span>
        <DropdownMenuSong asChild>
          <button className="cursor-pointer">
            <MoreVertical className="size-5" />
          </button>
        </DropdownMenuSong>
      </div>
    ),
  },
];
