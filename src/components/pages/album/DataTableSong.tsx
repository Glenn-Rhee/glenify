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
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import z from "zod";
import { columnsSong } from "./columns";
import ContextMenuSong from "@/components/contextmenu/ContextMenuSong";

const songs: z.infer<typeof ColumnTableValidation.SCHEMASONGS>[] = [
  {
    DataSong: {
      Title: "Blinding Lights",
      Artist: "The Weeknd",
      ArtistId: "artist_001",
    },
    Plays: 3200000000,
    Duration: 200,
  },
  {
    DataSong: {
      Title: "Shape of You",
      Artist: "Ed Sheeran",
      ArtistId: "artist_002",
    },
    Plays: 3100000000,
    Duration: 234,
  },
  {
    DataSong: {
      Title: "Someone Like You",
      Artist: "Adele",
      ArtistId: "artist_003",
    },
    Plays: 2800000000,
    Duration: 285,
  },
  {
    DataSong: {
      Title: "Uptown Funk",
      Artist: "Mark Ronson ft. Bruno Mars",
      ArtistId: "artist_004",
    },
    Plays: 2500000000,
    Duration: 270,
  },
  {
    DataSong: {
      Title: "Stay With Me",
      Artist: "Sam Smith",
      ArtistId: "artist_005",
    },
    Plays: 1900000000,
    Duration: 172,
  },
  {
    DataSong: {
      Title: "Levitating",
      Artist: "Dua Lipa",
      ArtistId: "artist_006",
    },
    Plays: 1750000000,
    Duration: 203,
  },
  {
    DataSong: {
      Title: "Rolling in the Deep",
      Artist: "Adele",
      ArtistId: "artist_003",
    },
    Plays: 2600000000,
    Duration: 228,
  },
  {
    DataSong: {
      Title: "Bad Guy",
      Artist: "Billie Eilish",
      ArtistId: "artist_007",
    },
    Plays: 2100000000,
    Duration: 194,
  },
  {
    DataSong: {
      Title: "Happier",
      Artist: "Marshmello ft. Bastille",
      ArtistId: "artist_008",
    },
    Plays: 1600000000,
    Duration: 214,
  },
  {
    DataSong: {
      Title: "Peaches",
      Artist: "Justin Bieber",
      ArtistId: "artist_009",
    },
    Plays: 1400000000,
    Duration: 198,
  },
];

export default function DataTableSong() {
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: songs,
    columns: columnsSong,
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
            <TableRow key={row.id}>
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
