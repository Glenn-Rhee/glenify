import { songs } from "../album/columns";
import DataTableSong from "../album/DataTableSong";
import { columnsSong } from "./ColumnsSong";

export default function SongTabs() {
  return (
    <section className="w-full">
      <DataTableSong columns={columnsSong} songs={songs} />
    </section>
  );
}
