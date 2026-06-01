import { cn } from "@/lib/utils";

interface ContainerAuthProps {
  children: React.ReactNode;
  className?: string;
}
export default function ContainerAuth(props: ContainerAuthProps) {
  const { children, className } = props;
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <div
        className={cn(
          "min-h-screen w-full max-w-md md:max-w-lg lg:max-w-xl justify-center p-4 flex flex-col gap-x-2",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
