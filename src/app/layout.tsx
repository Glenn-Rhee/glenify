import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Glenify Music Platform",
  description:
    "Glenify is a music streaming platform where you can discover, listen, and enjoy music from artists around the world.",
  keywords: ["music", "streaming", "music platform", "listen music", "glenify"],
  openGraph: {
    title: "Glenify Music Platform",
    description:
      "Glenify is a music streaming platform where you can discover, listen, and enjoy music from artists around the world.",
      
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark h-full antialiased`}>
      <body className="min-h-full font-poppins flex flex-col bg-[#0b0f18] text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
