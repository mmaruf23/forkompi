import React from "react";
import Navbar from "../ui/navbar";
import Footer from "../ui/footer";
import { Hammersmith_One } from "next/font/google";
type LayoutProps = {
  children: React.ReactNode;
};

const hammersmith = Hammersmith_One({
  subsets: ["latin"],
  weight: "400",
});
const Layout = ({ children }: LayoutProps) => {
  return (
    // sementara nanti edit aja
    <div className={`min-h-svh ` + hammersmith.className}>
      <Navbar />
      <main className="grow flex items-center">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
