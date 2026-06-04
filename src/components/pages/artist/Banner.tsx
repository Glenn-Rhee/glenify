"use client";
import Container from "@/components/Container";
import ContextMenuArtist from "@/components/contextmenu/ContextMenuArtist";

export default function Banner() {
  return (
    <header className="bg-orange-900/80 w-full h-[calc(100%-40rem)]">
      <Container
        className="w-full flex flex-col bg-fixed justify-end pb-5 h-full gap-y-4 bg-center bg-cover"
        style={{ backgroundImage: "url('/dummy-prof.jpg')" }}
      >
        <ContextMenuArtist>
          <h1 className="font-bold text-7xl">Taylor Swift</h1>
        </ContextMenuArtist>
        <span className="font-medium text-lg">
          100.000.000 monthly listened
        </span>
      </Container>
    </header>
  );
}
