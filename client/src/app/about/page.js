'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LogoBlack from '../assets/images/LogoBlack.png'
import LogoWhite from '../assets/images/LogoWhite.png';
import { LuPhone, LuMail } from "react-icons/lu";
import { LuClock } from "react-icons/lu";
import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '#' },
  { name: 'Gallery', href: '#' },
  { name: 'Contact', href: '/contact' },
];

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative h-screen sm:overflow-hidden bg-lotionWhite">


      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-4 sm:p-6 lg:px-8" aria-label="Global">
          <div className="flex flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Francisco's Roofing Inc</span>
              <Image
                alt="Logo White 160x160"
                src={LogoBlack}
                className="h-10 w-auto sm:h-12"
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
              <Bars3Icon aria-hidden="true" className="h-6 w-6 text-lotionWhite" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-poppins font-semibold text-winterBlack relative after:content-[''] after:absolute after:bottom-0.5 after:left-0 after:w-0 after:h-[2px] after:bg-winterBlack after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact"
              className="text-sm font-semibold bg-lotionWhite hover:bg-black hover:text-lotionWhite text-winterBlack font-bold py-2 px-4 rounded"
            >
              Free Quote <span aria-hidden="true">&rarr;</span>
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
                    Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <div className='relative flex items-center h-screen bg-lotionWhite'>
       
        <footer className="absolute bottom-0 left-0 w-full py-4 flex items-center justify-center bg-lotionWhite">
            <span className="text-sm text-winterBlack text-center">
                © 2022 Francisco's Roofing, Inc. All rights reserved.
            </span>
        </footer>
      </div>     
    </div>
  );
}
