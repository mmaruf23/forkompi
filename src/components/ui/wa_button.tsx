import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-10 right-10 ">
      <div className="bg-white animate-bounce h-8 w-8 rounded-full">
        <IoLogoWhatsapp className="text-[#00E11A] text-5xl -translate-2" />
      </div>
    </div>
  );
};

export default WhatsAppButton;
