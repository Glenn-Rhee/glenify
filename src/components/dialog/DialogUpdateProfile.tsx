import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
interface DialogUpdateProfileProps {
  children: React.ReactNode;
}
export default function DialogUpdateProfile(props: DialogUpdateProfileProps) {
  const { children } = props;
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent
          className="max-w-lg"
          onContextMenu={(e) => e.stopPropagation()}
        >
          <DialogHeader>
            <DialogTitle className="text-lg font-medium">
              Profile Details
            </DialogTitle>
          </DialogHeader>
          <div className="w-full flex items-center justify-between gap-x-4">
            <div className="w-40 aspect-square relative h-40 group/profile-details">
              <Image
                src={"/dummy-prof.jpg"}
                alt="Profile User"
                fill
                className="aspect-square rounded-full object-cover"
              />
              <div className="font-medium absolute group-hover/profile-details:opacity-100 opacity-0 transition-all duration-300 top-0 right-0 left-0 bottom-0 flex items-center justify-center text-white bg-sidebar/40 rounded-full">
                <span>Choose Photo</span>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 items-end">
              <input
                placeholder="Your Name"
                className="w-full placeholder:text-white/60 text-lg rounded-md py-2 px-3 text-white font-semibold bg-gray-500/80 placeholder:font-medium focus-visible:border-ring focus:outline-none placeholder:text-lg transition-all"
              />
              <button className="bg-white text-sidebar w-20 py-1 rounded-md">
                Save
              </button>
            </div>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
