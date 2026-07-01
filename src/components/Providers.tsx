"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Header from "./Header";
import LibrarySidebar from "./LibrarySidebar";
import QueueProvider from "./QueueProvider";
import { SidebarProvider } from "./ui/sidebar";
import { TooltipProvider } from "./ui/tooltip";

interface ProvidersProps {
  children: React.ReactNode;
}
export default function Providers(props: ProvidersProps) {
  const { children } = props;
  const pathname = usePathname();

  if (pathname.includes("/auth")) return <>{children}</>;
  return (
    <TooltipProvider>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <SidebarProvider
            className="rounded-2xl overflow-hidden bg-transparent"
            style={
              {
                "--sidebar-width": "calc(var(--spacing) * 85)",
              } as React.CSSProperties
            }
          >
            <LibrarySidebar />
            <QueueProvider>{children}</QueueProvider>
          </SidebarProvider>
        </div>
        <Footer />
      </div>
    </TooltipProvider>
  );
}
