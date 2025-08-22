import React from 'react';
import Navbar from '../ui/navbar';
import Footer from '../ui/footer';
type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    // sementara nanti edit aja
    <div className="h-svh flex flex-col justify-center items-center">
      <Navbar />
      <main className="grow flex items-center">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
