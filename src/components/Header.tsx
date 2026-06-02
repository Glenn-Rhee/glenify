import Image from "next/image";

export default function Header() {
  return (
    <header className="h-18 sticky top-0 left-0 right-0 z-50 shrink-0 px-4 flex items-center justify-between bg-[#0b0f18]">
      <Image
        src={"/dummy-prof.jpg"}
        alt="Glenify Icon"
        width={60}
        height={60}
      />
    </header>
  );
}
