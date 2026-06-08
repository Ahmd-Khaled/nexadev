import { PhoneCall } from "lucide-react";

const MobileCall = ({ size }: { size?: number }) => {
  return (
    <a
      href="tel:+201000000000"
      className="relative flex h-10 w-10 items-center justify-center"
    >
      <span className="absolute inline-flex h-10 w-10 animate-ping rounded-full bg-cyan-400/40" />
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-white animate-bounce">
        <PhoneCall className="h-4 w-4" />
      </div>
    </a>
  );
};

export default MobileCall;
