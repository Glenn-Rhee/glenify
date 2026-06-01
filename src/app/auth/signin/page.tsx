import GoogleIcon from "@/components/icon/GoogleIcon";
import ContainerAuth from "@/components/pages/auth/ContainerAuth";
import HeaderAuth from "@/components/pages/auth/HeaderAuth";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
  return (
    <ContainerAuth>
      <HeaderAuth>Welcome Back</HeaderAuth>
      <form className="mt-8 w-full space-y-4">
        <Field>
          <FieldLabel htmlFor="email" className="font-medium text-xl">
            Email Address
          </FieldLabel>
          <Input id="email" placeholder="youremail@domain.com" />
        </Field>
        <Button className="w-full font-semibold text-[22px] py-6">
          Continue
        </Button>
      </form>
      <span className="text-lg my-4 text-center">Or</span>
      <Button
        variant={"outline"}
        className="w-full font-semibold text-[22px] py-6 relative"
      >
        <GoogleIcon />
        Continue with Google
      </Button>
      <p className="font-medium mt-16 text-center">
        Don&apos;t have an account?
      </p>
      <Link href={"/auth/signup"} className="font-bold mt-4 text-center">
        Signup
      </Link>
    </ContainerAuth>
  );
}
