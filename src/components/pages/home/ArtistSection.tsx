"use client";
import { useState } from "react";
import ArtistList from "./ArtistList";

export default function ArtistSection() {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <section>
      <h4 className="font-bold text-3xl">Artist</h4>
      <ArtistList expanded={expanded} />
      <div className="flex items-center justify-end mt-4">
        <button
          className="cursor-pointer hover:text-white text-gray-300"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          Show {expanded ? "less" : "more"}
        </button>
      </div>
    </section>
  );
}
