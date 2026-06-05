import ColumnTableValidation from "@/validation/column-table-validation";
import { ColumnDef } from "@tanstack/react-table";
import z from "zod";

export const columnsAlbum: ColumnDef<
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
        <span className="text-xs">{row.original.DataSong.Artist}</span>
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
    
  }
];
