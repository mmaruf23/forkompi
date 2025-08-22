import React from 'react';
import Navbar from '../ui/navbar';
import Footer from '../ui/footer';
type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    // sementara nanti edit aja
    <div className="min-h-svh">
      <Navbar />
      <main className="grow flex items-center">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
