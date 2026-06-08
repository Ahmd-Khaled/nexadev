import { MessageCircle } from "lucide-react";

const WhatsAppCall = ({ size = 10 }: { size?: number }) => {
  return (
    <a
      href="https://wa.me/201000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="relative flex items-center justify-center"
    >
      <span
        className="absolute inline-flex animate-ping rounded-full bg-green-400/40"
        style={{ width: size * 4, height: size * 4 }}
      />

      <div
        className="relative flex items-center justify-center rounded-full bg-green-500 text-white animate-bounce shadow-lg"
        style={{ width: size * 4, height: size * 4 }}
      >
        <MessageCircle
          style={{
            width: size * 1.6,
            height: size * 1.6,
          }}
        />
      </div>
    </a>
  );
};

export default WhatsAppCall;
