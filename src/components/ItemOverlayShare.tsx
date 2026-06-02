import { Copy, ShareIcon } from "lucide-react";
import { ItemsOverlay } from "./SongMenuItems";

interface ItemOverlayShare {
  menu: ItemsOverlay;
}
export default function ItemOverlayShare(props: ItemOverlayShare) {
  const { menu } = props;
  return (
    <menu.Sub>
      <menu.SubTrigger>
        <ShareIcon className="size-4" /> Share
      </menu.SubTrigger>
      <menu.SubContent className="w-64 me-2 px-2 mb-1 py-1.5 rounded-sm! space-y-2">
        <menu.Item className="relative">
          Copy link{" "}
          <Copy className="size-4 absolute top-1/2 -translate-y-1/2 right-5" />
        </menu.Item>
      </menu.SubContent>
    </menu.Sub>
  );
}
