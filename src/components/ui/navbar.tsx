import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/program", label: "Program" },
  // { href: '/linimasa', label: 'Linimasa' },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = router.pathname.replace("/[slug]", "");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent font-bold px-6 md:px-16 py-6 absolute top-0 z-10">
      <div className="mx-auto flex justify-between items-center text-xl">
        {/* Logo */}
        <Link href="/" className="font-bold">
          <Image src={"/forkompi-logo.png"} alt="forkompi-logo" width={80} height={80} priority />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`hover:underline underline-offset-2 text-xl ${
                  pathname == item.href ? "text-outline" : "text-red-600"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-red-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <BiX size={28} /> : <BiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4 bg-white/90 p-6 rounded-lg shadow-lg">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)} // close menu on click
                className={`block hover:underline underline-offset-2 text-lg ${
                  pathname == item.href ? "text-outline" : "text-red-600"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
