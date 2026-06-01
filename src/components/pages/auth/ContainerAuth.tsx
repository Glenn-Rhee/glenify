interface ContainerAuthProps {
  children: React.ReactNode;
}
export default function ContainerAuth(props: ContainerAuthProps) {
  const { children } = props;
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <div className="min-h-screen w-full max-w-md md:max-w-lg lg:max-w-xl justify-center p-4 flex flex-col gap-x-2">
        {children}
      </div>
    </div>
  );
}
