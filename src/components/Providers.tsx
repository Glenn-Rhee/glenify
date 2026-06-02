"use client";

import Header from "./Header";
import LibrarySidebar from "./LibrarySidebar";
import QueueSidebar from "./QueueSidebar";
import { SidebarProvider } from "./ui/sidebar";
import { TooltipProvider } from "./ui/tooltip";

interface ProvidersProps {
  children: React.ReactNode;
}
export default function Providers(props: ProvidersProps) {
  const { children } = props;
  return (
    <TooltipProvider>
      <div className="flex flex-col h-screen">
        <Header />

        <div className="flex flex-1 overflow-hidden">
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
              {children}
              <QueueSidebar />
            </SidebarProvider>
          </SidebarProvider>
        </div>
      </div>
    </TooltipProvider>
  );
}
