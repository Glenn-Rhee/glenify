"use client";

import LibrarySidebar from "./LibrarySidebar";
import { SidebarInset, SidebarProvider } from "./ui/sidebar";
import { TooltipProvider } from "./ui/tooltip";

interface ProvidersProps {
  children: React.ReactNode;
}
export default function Providers(props: ProvidersProps) {
  const { children } = props;
  return (
    <TooltipProvider>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 90)",
          } as React.CSSProperties
        }
      >
        <LibrarySidebar />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
