export default function NotFoundPage() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl">404 - Page Not Found</h1>
        <p className="text-xl mt-4 text-center">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}
