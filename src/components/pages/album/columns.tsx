"use client";
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
      <div className="flex items-center gap-x-3 text-white">
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

export const songs: z.infer<typeof ColumnTableValidation.SCHEMASONGS>[] = [
  {
    DataSong: {
      Title: "Blinding Lights",
      Artist: "The Weeknd",
      ArtistId: "artist_001",
      Album: "Red",
    },
    Plays: 3200000000,
    Duration: 200,
  },
  {
    DataSong: {
      Title: "Shape of You",
      Artist: "Ed Sheeran",
      ArtistId: "artist_002",
      Album: "Red",
    },
    Plays: 3100000000,
    Duration: 234,
  },
  {
    DataSong: {
      Title: "Someone Like You",
      Artist: "Adele",
      ArtistId: "artist_003",
      Album: "Red",
    },
    Plays: 2800000000,
    Duration: 285,
  },
  {
    DataSong: {
      Title: "Uptown Funk",
      Artist: "Mark Ronson ft. Bruno Mars",
      ArtistId: "artist_004",
      Album: "Red",
    },
    Plays: 2500000000,
    Duration: 270,
  },
  {
    DataSong: {
      Title: "Stay With Me",
      Artist: "Sam Smith",
      ArtistId: "artist_005",
      Album: "Red",
    },
    Plays: 1900000000,
    Duration: 172,
  },
  {
    DataSong: {
      Title: "Levitating",
      Artist: "Dua Lipa",
      ArtistId: "artist_006",
      Album: "Red",
    },
    Plays: 1750000000,
    Duration: 203,
  },
  {
    DataSong: {
      Title: "Rolling in the Deep",
      Artist: "Adele",
      ArtistId: "artist_003",
      Album: "Red",
    },
    Plays: 2600000000,
    Duration: 228,
  },
  {
    DataSong: {
      Title: "Bad Guy",
      Artist: "Billie Eilish",
      ArtistId: "artist_007",
      Album: "Red",
    },
    Plays: 2100000000,
    Duration: 194,
  },
  {
    DataSong: {
      Title: "Happier",
      Artist: "Marshmello ft. Bastille",
      ArtistId: "artist_008",
      Album: "Red",
    },
    Plays: 1600000000,
    Duration: 214,
  },
  {
    DataSong: {
      Title: "Peaches",
      Artist: "Justin Bieber",
      ArtistId: "artist_009",
      Album: "Red",
    },
    Plays: 1400000000,
    Duration: 198,
  },
];
