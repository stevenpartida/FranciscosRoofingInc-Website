'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';
import LogoWhite from './assets/images/LogoWhite.png';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Contact', href: '/contact' },
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
      <div className="absolute inset-0 bg-black/50"></div>

      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-4 sm:p-6 lg:px-8" aria-label="Global">
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
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-lotionWhite"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6 text-lotionWhite" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-lotionWhite relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-lotionWhite after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact"
              className="text-sm font-medium bg-lotionWhite hover:bg-black hover:text-lotionWhite text-winterBlack font-bold py-2 px-4 rounded"
            >
              Free Estimate <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-winterBlack px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6 text-lotionWhite" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium  text-lotionWhite hover:bg-lotionWhite hover:text-winterBlack"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium  text-lotionWhite hover:bg-lotionWhite hover:text-winterBlack"
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
            <div className="relative rounded-full px-2 py-0.5 sm:px-3 sm:py-1 font-medium sm:font-medium drop-shadow-md sm:drop-shadow-2xl text-xs sm:text-sm text-lotionWhite ring-1 ring-lotionWhite hover:ring-winterBlack backdrop-blur-md">
              See our recent work. <a href="#" className="font-medium sm:font-bold text-blue-300  "><span className="absolute inset-0 " aria-hidden="true"></span><span className='underline underline-offset-2'>Projects</span> <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl uppercase font-bold text-lotionWhite sm:text-6xl">
              Francisco's Roofing, Inc
            </h1>
            <p className="mt-6 text-poppins text-base sm:text-lg text-lotionWhite drop-shadow-2xl">
              At Francisco's Roofing, Inc, we provide top-quality roofing services with years of expertise. As a Licensed and Insured company, we deliver reliable results with exceptional craftsmanship. Whether it's repairs, replacements, or installations, we’re here to protect your property.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="w-full sm:w-auto rounded-md bg-winterBlack px-6 py-3 text-sm font-semibold text-lotionWhite shadow-sm hover:bg-black"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold text-lotionWhite hover:text-winterBlack">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="absolute inset-x-0 bottom-0 z-50 py-4">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center px-4">
          {/* Left Section: Copyright and License */}
          <div className="text-xs sm:text-sm text-lotionWhite text-center sm:text-left">
            <span>© 2025 Francisco's Roofing, Inc. All rights reserved.</span>
              <br className="sm:hidden" />
            <span className="sm:ml-2">License No. #1086198</span>
          </div>

          {/* Right Section: Social Media Links */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-lotionWhite hover:text-winterBlack">
              <FaFacebook size={25} />
            </a>
            <a href="#" className="text-lotionWhite hover:text-winterBlack">
              <FaInstagram size={25} />
            </a>
            <a href="#" className="text-lotionWhite hover:text-winterBlack">
              <FaGoogle size={25} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
