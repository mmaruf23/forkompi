import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-gray-50 shadow-sm dark:bg-gray-900 "
      style={{ backgroundImage: "url(/assets/images/red-batik.jpg)" }}
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={"/assets/images/forkompi-logo.png"}
              alt="forkompi-logo"
              width={50}
              height={50}
              priority
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Forkompi
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
            <li>
              <Link href="/#about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">
                Social Media
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center ">
          © 2023{" "}
          <a href="forkompi.com" className="hover:underline">
            Forkompi™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
