import GoogleIcon from "@/components/icon/GoogleIcon";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Music4Icon } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <div className="min-h-screen w-full max-w-md md:max-w-lg lg:max-w-xl justify-center p-4 flex flex-col gap-x-2">
        <div className="w-full flex flex-col items-center">
          <Music4Icon className="size-24" />
          <h1 className="font-bold text-white text-4xl max-w-sm text-center">
            Signup For Best Experience
          </h1>
        </div>
        <form className="mt-8 w-full space-y-4">
          <Field>
            <FieldLabel htmlFor="email" className="font-medium text-xl">
              Email Address
            </FieldLabel>
            <Input id="email" placeholder="youremail@domain.com" />
          </Field>
          <Button className="w-full font-semibold text-[22px] py-6">
            Signup
          </Button>
        </form>
        <span className="text-lg my-4 text-center">Or</span>
        <Button
          variant={"outline"}
          className="w-full font-semibold text-[22px] py-6"
        >
          <GoogleIcon />
          Signup with Google
        </Button>
        <p className="font-medium mt-16 text-center">
          Already have an account?
        </p>
        <Link href={"/auth/signin"} className="font-bold mt-4 text-center">
          Login
        </Link>
      </div>
    </div>
  );
}
