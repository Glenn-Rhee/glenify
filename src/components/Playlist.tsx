import CollectionCard from "./CollectionCard";
import ContextMenuPlaylist from "./contextmenu/ContextMenuPlaylist";

export default function Playlist() {
  return (
    <ContextMenuPlaylist>
      <div className="grid grid-cols-6 gap-4 mt-2">
        {Array.from({
          length: 36,
        }).map((_, i) => (
          <CollectionCard key={i} />
        ))}
      </div>
    </ContextMenuPlaylist>
  );
}
