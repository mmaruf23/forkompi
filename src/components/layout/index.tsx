import React from "react";
import Navbar from "../ui/navbar";
type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    // sementara nanti edit aja
    <div className="min-h-svh">
      <Navbar />
      <main className="grow flex items-center">{children}</main>
    </div>
  );
};

export default Layout;
