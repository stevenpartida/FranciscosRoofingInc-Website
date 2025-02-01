"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import LogoWhite from "./assets/images/LogoWhite.png";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative h-screen ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover -z-10"
      >
        <source src="/videos/HeroVideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-woodsmoke950/70"></div>

      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-4 sm:p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Francisco's Roofing Inc</span>
              <Image
                alt="Logo White 160x160"
                src={LogoWhite}
                className="h-12 w-auto sm:h-16"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-woodsmoke50"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="h-6 w-6 text-woodsmoke50"
              />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-woodsmoke50 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-woodsmoke50 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact"
              className="text-sm font-medium bg-woodsmoke500 hover:bg-woodsmoke600 active:bg-woodsmoke700 hover:text-woodsmoke50 text-woodsmoke50 font-bold py-2 px-4 rounded"
            >
              Free Estimate <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>

        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-woodsmoke950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-woodsmoke400">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Francisco's Roofing Inc</span>
                <Image
                  alt="Logo White 160x160"
                  src={LogoWhite}
                  className="h-10 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-woodsmoke50"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon
                  aria-hidden="true"
                  className="h-6 w-6 text-lotionWhite"
                />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium  text-woodsmoke50 hover:bg-woodsmoke50 hover:text-woodsmoke950"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium  text-woodsmoke50 hover:bg-woodsmoke50 hover:text-woodsmoke950"
                  >
                    Free Estimate
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl sm:max-w-2xl py-16 sm:py-32 lg:py-48">
          <div className=" mb-4 sm:mb-8 flex justify-center">
            <div className="relative rounded-full px-2 py-0.5 sm:px-3 sm:py-1 font-medium sm:font-medium drop-shadow-md sm:drop-shadow-2xl text-xs sm:text-sm text-woodsmoke50 ring-1 ring-woodsmoke400 hover:ring-woodsmoke500 active:ring-woodsmoke600 backdrop-blur-md">
              See our recent work.{" "}
              <Link
                href="#"
                className="font-medium sm:font-bold text-woodsmoke400"
              >
                <span className="absolute inset-0 " aria-hidden="true"></span>
                <span className="underline underline-offset-2">
                  Projects
                </span>{" "}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl uppercase font-bold text-woodsmoke50 sm:text-6xl">
              Francisco's Roofing, Inc
            </h1>
            <p className="mt-6 text-poppins text-base sm:text-lg text-woodsmoke100 drop-shadow-2xl">
              At Francisco's Roofing, Inc, we provide top-quality roofing
              services with years of expertise. As a Licensed and Insured
              company, we deliver reliable results with exceptional
              craftsmanship. Whether it's repairs, replacements, or
              installations, we’re here to protect your property.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="w-full sm:w-auto rounded-md bg-woodsmoke500 px-6 py-3 text-sm font-semibold text-woodsmoke50 shadow-sm hover:bg-woodsmoke600 active:bg-woodsmoke700"
              >
                Get started
              </a>
              <Link
                href="/about"
                className="text-sm font-semibold text-woodsmoke50 hover:text-woodsmoke200 active:text-woodsmoke300"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="absolute inset-x-0 bottom-0 z-50 py-4">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center px-4">
          {/* Left Section: Copyright and License */}
          <div className="text-xs sm:text-sm text-woodsmoke50 text-center sm:text-left">
            <span>© 2025 Francisco's Roofing, Inc. All rights reserved.</span>
            <br className="sm:hidden" />
            <span className="sm:ml-2">License No. #1086198</span>
          </div>

          {/* Right Section: Social Media Links */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link
              href="#"
              className="text-woodsmoke50 hover:text-woodsmoke200 active:text-woodsmoke300"
            >
              <FaFacebook size={25} />
            </Link>
            <Link
              href="#"
              className="text-woodsmoke50 hover:text-woodsmoke200 active:text-woodsmoke300"
            >
              <FaInstagram size={25} />
            </Link>
            <Link
              href="#"
              className="text-woodsmoke50 hover:text-woodsmoke200 active:text-woodsmoke300"
            >
              <FaGoogle size={25} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
