import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function OTP() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup className="w-full grid grid-cols-6 gap-4">
        <InputOTPSlot
          index={0}
          className="flex-1 h-12 rounded-lg border border-border text-base font-medium first:rounded-l-lg last:rounded-r-lg focus-within:ring-1 focus-within:ring-ring"
        />
        <InputOTPSlot
          index={1}
          className="flex-1 h-12 rounded-lg border border-border text-base font-medium first:rounded-l-lg last:rounded-r-lg focus-within:ring-1 focus-within:ring-ring"
        />
        <InputOTPSlot
          index={2}
          className="flex-1 h-12 rounded-lg border border-border text-base font-medium first:rounded-l-lg last:rounded-r-lg focus-within:ring-1 focus-within:ring-ring"
        />
        <InputOTPSlot
          index={3}
          className="flex-1 h-12 rounded-lg border border-border text-base font-medium first:rounded-l-lg last:rounded-r-lg focus-within:ring-1 focus-within:ring-ring"
        />
        <InputOTPSlot
          index={4}
          className="flex-1 h-12 rounded-lg border border-border text-base font-medium first:rounded-l-lg last:rounded-r-lg focus-within:ring-1 focus-within:ring-ring"
        />
        <InputOTPSlot
          index={5}
          className="flex-1 h-12 rounded-lg border border-border text-base font-medium first:rounded-l-lg last:rounded-r-lg focus-within:ring-1 focus-within:ring-ring"
        />
      </InputOTPGroup>
    </InputOTP>
  );
}
