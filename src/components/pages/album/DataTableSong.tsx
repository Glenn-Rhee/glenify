"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ColumnTableValidation from "@/validation/column-table-validation";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import z from "zod";
import { columnsSong } from "./columns";
import ContextMenuSong from "@/components/contextmenu/ContextMenuSong";

interface DataTableSongProps {
  columns: ColumnDef<z.infer<typeof ColumnTableValidation.SCHEMASONGS>>[];
  songs: z.infer<typeof ColumnTableValidation.SCHEMASONGS>[];
}

export default function DataTableSong(props: DataTableSongProps) {
  const { columns, songs } = props;
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: songs,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <Table>
      <TableHeader className="sticky top-0 z-10 bg-transparent border-b border-gray-800 rounded-xl">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow className="group/option" key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="py-1 h-full">
                  <ContextMenuSong isForPlaylist key={row.id}>
                    <div className="h-full">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </div>
                  </ContextMenuSong>
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={columnsSong.length}
              className="h-16 text-center"
            >
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
