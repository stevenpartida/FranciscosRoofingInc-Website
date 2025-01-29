'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LogoBlack from '../assets/images/LogoBlack.png'
import LogoWhite from '../assets/images/LogoWhite.png';
import StockPhoto from '../assets/images/StockPhoto.jpg'
import { LuPhone, LuMail } from "react-icons/lu";
import { LuClock } from "react-icons/lu";
import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';
import axios from 'axios';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Contact', href: '/contact' },
];

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="relative sm:overflow-hidden bg-lotionWhite">
      <header className=" inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-4 sm:p-6 lg:px-8" aria-label="Global">
          <div className="flex flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Francisco's Roofing Inc</span>
              <Image
                alt="Logo White 160x160"
                src={LogoBlack}
                className="h-12 w-auto sm:h-16"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6 text-winterBlack" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium  text-winterBlack relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-winterBlack after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact"
              className="text-sm font-medium bg-winterBlack hover:bg-black hover:text-lotionWhite text-lotionWhite font-bold py-2 px-4 rounded"
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
                className="-m-2.5 rounded-md p-2.5 text-winterBlack"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6 text-lotionWhite" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-lotionWhite hover:bg-lotionWhite hover:text-winterBlack"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-lotionWhite hover:bg-lotionWhite hover:text-winterBlack"
                  >
                    Free  Estimate
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <div className='relative px-4 pt-8 sm:px-6 lg:px-8'>
        <div className="mx-auto max-w-xl sm:max-w-2xl lg:max-w-5xl pt-8 sm:pt-16 lg:pt-24 flex flex-col sm:flex-row  ">
          {/* Image Container */}
          <div className="flex-1 p-4 rounded-lg shadow-sm items-center">
            <Image
              alt="Stock Photo"
              src={StockPhoto}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 p-6 min-w-0 ">
            <h3 className="text-gray-800 uppercase mb-2 text-base sm:text-lg tracking-widest font-light">
              About Francisco's Roofing, Inc
            </h3>
            <h1 className="text-gray-900 capitalize font-bold text-2xl sm:text-4xl leading-snug text-balance">
              Trusted by Homeowners & Businesses for Quality Roofing
            </h1>
            <p className="text-gray-400 mt-2">
            From residential homes to large-scale commercial and industrial projects, we provide durable, high-quality roofing solutions tailored to your needs. With expert craftsmanship and premium materials, we ensure lasting protection and peace of mind.
            </p>
          </div>
        </div>
        <section className="bg-lotionWhite text-white py-12 px-2 sm:px-6">
          {/*}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-balance">Trusted by Homeowners & Businesses for Quality Roofing</h2>
            <p className="text-gray-400 mt-2">
            From residential homes to large-scale commercial and industrial projects, we provide durable, high-quality roofing solutions tailored to your needs. With expert craftsmanship and premium materials, we ensure lasting protection and peace of mind.
            </p>
          </div>
          */}
          <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
            <div className="bg-gray-200 px-8 py-4 text-center max-w-md mx-auto rounded-lg sm:rounded-l-xl sm:rounded-r-none">
              <h3 className="text-lg font-semibold mb-2 text-winterBlack">Residential Roofing</h3>
              <p className="text-sm text-winterBlack">
                Protecting homes with durable, high-quality roofing solutions tailored for long-lasting safety and curb appeal.
              </p>
            </div>
            <div className="bg-gray-200 px-8 py-4 rounded-lg sm:rounded-none text-center max-w-md mx-auto">
              <h3 className="text-lg font-semibold mb-2 text-winterBlack">Commercial Roofing</h3>
              <p className="text-sm text-winterBlack">
                Expert roofing services for businesses, ensuring energy efficiency, weather resistance, and low maintenance costs.
              </p>
            </div>
             <div className="bg-gray-200 px-8 py-4 rounded-lg sm:rounded-r-xl sm:rounded-l-none text-center max-w-md mx-auto">
              <h3 className="text-lg font-semibold mb-2 text-winterBlack">Industrial Roofing</h3>
              <p className="text-sm text-winterBlack">
                Strong and reliable roofing systems designed to withstand extreme conditions and enhance operational efficiency.
              </p>
            </div>
          </div>
        </section>

      </div>
      <footer className="absolute bottom-0 left-0 w-full py-4 flex items-center justify-center">
          <span className="text-sm text-winterBlack text-center">
              © 2025 Francisco's Roofing, Inc. All rights reserved.
          </span>
      </footer>
    </div>     
  );
}
