import React from "react";
import Navbar from "../ui/navbar";
import Footer from "../ui/footer";
import { Hammersmith_One } from "next/font/google";
import WhatsAppButton from "../ui/wa_button";
type LayoutProps = {
  children: React.ReactNode;
};

const hammersmith = Hammersmith_One({
  subsets: ["latin"],
  weight: "400",
});
// todo : nanti untuk page /admin mah jangan pake layout ini
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`min-h-svh ` + hammersmith.className}>
      <Navbar />
      <main className="flex items-center">{children}</main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Layout;
