import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/program", label: "Program" },
  // { href: '/linimasa', label: 'Linimasa' },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = router.pathname.replace("/[slug]", "");
  return (
    <nav className="w-full bg-transparent font-bold px-16 py-8 absolute top-0 z-10">
      <div className="mx-auto flex justify-between items-center text-xl">
        <Link href="/" className="font-bold">
          <Image src={"/forkompi-logo.png"} alt="forkompi-logo" width={100} height={100} priority />
        </Link>
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`hover:underline underline-offset-2 text-2xl ${
                  pathname == item.href ? "text-outline" : "text-red-600"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
