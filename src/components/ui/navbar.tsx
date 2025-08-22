import Link from 'next/link';
import React from 'react';

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/news', label: 'News' },
  { href: '/program', label: 'Program' },
  // { href: '/linimasa', label: 'Linimasa' },
];

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 text-white p-4">
      <div className="mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          My App
        </Link>
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-gray-300">
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
