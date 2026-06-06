"use client";
import { useSidebarStore } from "@/store/sidebar-store";
import QueueSidebar from "./QueueSidebar";
import { SidebarInset, SidebarProvider } from "./ui/sidebar";

interface QueueProviderProps {
  children: React.ReactNode;
}

export default function QueueProvider(props: QueueProviderProps) {
  const { children } = props;
  const { isQueueOpen, setIsQueueOpen } = useSidebarStore();
  return (
    <SidebarInset className="flex-1 overflow-hidden p-0">
      <SidebarProvider
        open={isQueueOpen}
        onOpenChange={setIsQueueOpen}
        className="overflow-hidden bg-transparent min-w-0"
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 85)",
          } as React.CSSProperties
        }
      >
        {children}
        <QueueSidebar />
      </SidebarProvider>
    </SidebarInset>
  );
}
