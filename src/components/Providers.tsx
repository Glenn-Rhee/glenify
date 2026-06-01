"use client";

import LibrarySidebar from "./LibrarySidebar";
import QueueSidebar from "./QueueSidebar";
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
            "--sidebar-width": "calc(var(--spacing) * 85)",
          } as React.CSSProperties
        }
      >
        <LibrarySidebar />
        <SidebarProvider
          style={
            {
              "--sidebar-width": "calc(var(--spacing) * 85)",
            } as React.CSSProperties
          }
        >
          <SidebarInset>{children}</SidebarInset>
          <QueueSidebar />
        </SidebarProvider>
      </SidebarProvider>
    </TooltipProvider>
  );
}
