import ItemOverlayShare from "./ItemOverlayShare";
import { ItemsOverlay } from "./SongMenuItems";

interface ArtistMenuItems {
  menu: ItemsOverlay;
}
export default function AristMenuItems(props: ArtistMenuItems) {
  const { menu } = props;
  return (
    <>
      <ItemOverlayShare menu={menu}/>
    </>
  );
}
