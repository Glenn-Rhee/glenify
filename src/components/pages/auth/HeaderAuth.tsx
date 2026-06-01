import { cn } from "@/lib/utils";
import { Music4Icon } from "lucide-react";

interface HeaderAuthProps {
  children: React.ReactNode;
  className?: string;
}

export default function HeaderAuth(props: HeaderAuthProps) {
  const { children, className } = props;
  return (
    <div className={cn("w-full flex flex-col items-center", className)}>
      <Music4Icon className="size-24" />
      <h1 className="font-bold text-white text-4xl max-w-sm text-center">
        {children}
      </h1>
    </div>
  );
}
