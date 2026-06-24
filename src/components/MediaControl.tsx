import { PauseIcon, PlayIcon } from "lucide-react";

interface MediControlProps {
  isPlaying: boolean;
}

export default function MediaControl(props: MediControlProps) {
  const { isPlaying } = props;
  return (
    <>
      <span className="absolute cursor-pointer z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-50 rounded-full p-1 opacity-0 group-hover/item:opacity-100 transition-opacity">
        {isPlaying ? (
          <PauseIcon className="size-6" fill="white"/>
        ) : (
          <PlayIcon className="size-6" fill="white" />
        )}
      </span>
      <div className="absolute z-20 top-0 right-0 left-0 bottom-0 bg-gray-700/25 rounded-md opacity-0 transition-all group-hover/item:opacity-100" />
    </>
  );
}