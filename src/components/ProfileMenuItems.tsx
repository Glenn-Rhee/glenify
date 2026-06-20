"use client";
import { Copy, PencilIcon } from "lucide-react";
import { ItemsOverlay } from "./SongMenuItems";
import DialogUpdateProfile from "./dialog/DialogUpdateProfile";

interface ProfileMenuItems {
  menu: ItemsOverlay;
  isForOption?: boolean;
}
export default function ProfileMenuItems(props: ProfileMenuItems) {
  const { menu, isForOption = false } = props;
  return (
    <>
      {isForOption ? (
        <menu.Item onClick={(e) => e.preventDefault()}>
          <DialogUpdateProfile>
            <button className="flex items-center gap-x-3">
              <PencilIcon className="size-4" /> Edit Profile
            </button>
          </DialogUpdateProfile>
        </menu.Item>
      ) : null}
      <menu.Item className="flex items-center gap-x-3">
        <Copy className="size-4" /> Copy link profile
      </menu.Item>
    </>
  );
}
