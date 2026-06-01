import { Music4Icon } from "lucide-react";

interface HeaderAuthProps {
    children: React.ReactNode
}

export default function HeaderAuth(props: HeaderAuthProps) {
  const { children } = props;
  return (
    <div className="w-full flex flex-col items-center">
      <Music4Icon className="size-24" />
      <h1 className="font-bold text-white text-4xl max-w-sm text-center">
        {children}
      </h1>
    </div>
  );
}
