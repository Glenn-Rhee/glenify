import Link from "next/link";
import { Disc3, Home, Search } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center px-6">
      <div className="flex flex-col items-center max-w-md text-center">
        <div className="relative mb-8">
          <div className="relative size-36 rounded-full bg-linear-to-br from-card to-background border border-border shadow-lg flex items-center justify-center animate-[spin_18s_linear_infinite] paused">
            <div className="absolute inset-3 rounded-full border border-border/60" />
            <div className="absolute inset-7 rounded-full border border-border/40" />
            <div className="absolute inset-11 rounded-full border border-border/30" />
            <div className="relative size-10 rounded-full bg-primary flex items-center justify-center">
              <Disc3 className="size-5 text-primary-foreground" />
            </div>
          </div>

          <div className="absolute -top-2 -right-6 w-16 h-1.5 rounded-full bg-muted-foreground/60 rotate-38 origin-right" />
          <div className="absolute -top-3.5 -right-6 size-3 rounded-full bg-muted-foreground/60" />
        </div>

        <div className="flex items-end gap-1 h-6 mb-6">
          {[3, 5, 2, 6, 2, 4, 3].map((h, i) => (
            <span
              key={i}
              className="w-1 rounded-full bg-secondary/40"
              style={{ height: `${h * 2}px` }}
            />
          ))}
        </div>

        <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-3">
          Track 404
        </span>

        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground">
          Track Not Found
        </h1>

        <p className="text-muted-foreground mt-3 text-base leading-relaxed">
          Sepertinya lagu ini sudah di-skip dari daftar kami. Halaman yang kamu
          cari tidak tersedia.
        </p>

        <div className="flex items-center gap-3 mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Home className="size-4" />
            Kembali ke Beranda
          </Link>
          <Link
            href="/search"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-foreground text-sm font-semibold hover:bg-white/5 transition-colors"
          >
            <Search className="size-4" />
            Cari Musik
          </Link>
        </div>
      </div>
    </div>
  );
}
