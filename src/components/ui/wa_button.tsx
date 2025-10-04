import Link from "next/link";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-10 right-10 ">
      <Link href="https://wa.me/6285162853107">
        <div className="bg-white animate-bounce h-8 w-8 rounded-full">
          <IoLogoWhatsapp className="text-[#00E11A] text-5xl -translate-2" />
        </div>
      </Link>
    </div>
  );
};

export default WhatsAppButton;
