import ContextMenuArtist from "@/components/contextmenu/ContextMenuArtist";
import Image from "next/image";
import Link from "next/link";

export default function ArtistSection() {
  return (
    <section>
      <h4 className="font-bold text-3xl">Artist</h4>
      <ContextMenuArtist>
        <div className="flex items-center gap-x-4 mt-2 px-1.5">
          {Array.from({ length: 20 }).map((_, i) => (
            <Link
              key={i}
              href={"/artist/1"}
              className="flex flex-col items-center w-full max-w-32 gap-y-1 hover:bg-white/10 transition-colors py-1.5 rounded-md"
            >
              <Image
                src={"/dummy-prof.jpg"}
                alt="Profile pict Artiist"
                width={100}
                height={100}
                className="aspect-square object-cover rounded-full"
              />
              <span className="font-semibold text-center text-xl truncate w-full">
                Taylor Swift
              </span>
            </Link>
          ))}
        </div>
      </ContextMenuArtist>
    </section>
  );
}
