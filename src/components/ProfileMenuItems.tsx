import { Copy } from "lucide-react";
import { ItemsOverlay } from "./SongMenuItems";

interface ProfileMenuItems {
  menu: ItemsOverlay;
}
export default function ProfileMenuItems(props: ProfileMenuItems) {
  const { menu } = props;
  return (
    <menu.Item className="flex items-center gap-x-3">
      <Copy className="size-4" /> Copy link profile
    </menu.Item>
  );
}
