import CollectionCard from "@/components/CollectionCard";
import ContextMenuAlbum from "@/components/contextmenu/ContextMenuAlbum";

interface AlbumListProps {
  expanded?: boolean;
}

export default function AlbumList(props: AlbumListProps) {
  const { expanded } = props;

  return (
    <ContextMenuAlbum>
      <div className="grid grid-cols-6 gap-4 mt-2">
        {Array.from({
          length: typeof expanded === "undefined" ? 36 : expanded ? 36 : 6,
        }).map((_, i) => (
          <CollectionCard key={i} />
        ))}
      </div>
    </ContextMenuAlbum>
  );
}
