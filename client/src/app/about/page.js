"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LogoWhite from "../assets/images/LogoWhite.png";
import StockPhoto from "../assets/images/StockPhoto.jpg";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "#" },
  { name: "Contact", href: "/contact" },
];

const stats = [
  { id: 1, name: "Total Projects", value: "800+" },
  { id: 2, name: "Years Experience", value: "35+" },
  { id: 3, name: "Total Clients", value: "500+" },
  { id: 4, name: "Licensed & Insured", value: "100%" },
];

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-woodsmoke950 ">
      <header className="inset-x-0 top-0 z-50 bg-woodsmoke950">
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
      <div className="relative">
        <div className="relative z-[1] bg-woodsmoke950 flex items-center justify-center py-8 sm:py-16">
          <div className="max-w-5xl flex flex-col sm:flex-row items-center">
            {/* Image Container */}
            <div className="flex-1 p-4 rounded-lg shadow-sm items-center">
              <Image
                alt="Stock Photo"
                src={StockPhoto}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 min-w-0 h-full flex flex-col justify-center p-4">
              <h3 className="text-woodsmoke100 uppercase mb-2 text-lg sm:text-xl tracking-widest font-light">
                About Francisco's Roofing, Inc
              </h3>
              <h1 className="text-woodsmoke50 font-extrabold text-2xl sm:text-4xl leading-snug text-balance uppercase">
                Who Are We
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-woodsmoke100 mt-2">
                Francisco’s Roofing, Inc. is a{" "}
                <span className="font-semibold">family and veteran-owned</span>{" "}
                roofing company, proudly serving the{" "}
                <span className="font-semibold">Los Angeles area</span>. We
                specialize in{" "}
                <span className="font-semibold">
                  residential and commercial roofing services
                </span>
                , delivering durable, high-quality craftsmanship.
                <br />
                <br />
                Founded in <span className="font-semibold">2022</span> by
                Francisco Senior and Francisco Jr., we bring{" "}
                <span className="font-semibold">35+ years of experience</span>{" "}
                in the roofing industry. Our mission is to provide long-lasting
                roofing solutions that protect homes and businesses.
                <br />
                <br />
                As a{" "}
                <span className="font-semibold">
                  fully licensed and insured
                </span>{" "}
                company, we are committed to safety, quality, and customer
                satisfaction. At Francisco’s Roofing, Inc., your trust is our
                foundation, and your roof is our priority.{" "}
                <span className="font-semibold">
                  Contact us today for your free roofing estimate!
                </span>
              </p>
              <div className="flex justify-center sm:justify-end mt-8 sm:mt-10">
                <Link
                  href="/contact"
                  className="text-sm font-medium bg-woodsmoke500 hover:bg-woodsmoke600 active:bg-woodsmoke700 text-woodsmoke50 font-bold py-2 px-4 rounded"
                >
                  Get in Touch <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section className="relative flex flex-col justify-center text-center text-woodsmoke50 py-12 sm:py-16">
          <div
            className="fixed top-0 left-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${StockPhoto.src})` }}
          ></div>
          {/* Dark Tint Overlay */}
          <div className="absolute inset-0 bg-woodsmoke950/60"></div>

          {/* Content Inside the Section */}
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-none text-balance mb-6">
              Reliable Roofing Solutions for Homes & Businesses
            </h2>
            <p className="text-base lg:text-lg text-balance font-medium text-woodsmoke100 leading-relaxed">
              From residential homes to large-scale commercial, we deliver
              durable, high-quality roofing solutions tailored to your needs.
              Our expert craftsmanship and premium materials provide lasting
              protection and peace of mind.
            </p>
          </div>

          {/* Roofing Services */}
          <div className="relative sm:max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 my-16 px-4 text-woodsmoke50">
            <div className="bg-woodsmoke900/90 px-8 py-6 text-center w-full rounded-xl sm:rounded-l-xl sm:rounded-r-none">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-woodsmoke50">
                Residential Roofing
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-woodsmoke50">
                Protecting homes with durable, high-quality roofing solutions
                tailored for long-lasting safety and curb appeal.
              </p>
            </div>
            <div className="bg-woodsmoke900/90 px-8 py-6 text-center w-full rounded-xl sm:rounded-r-xl sm:rounded-l-none">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-woodsmoke50">
                Commercial Roofing
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-woodsmoke50">
                Expert roofing services for businesses, ensuring energy
                efficiency, weather resistance, and low maintenance costs.
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="relative py-8 sm:py-16 text-woodsmoke50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-12 text-center">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="mx-auto flex w-full max-w-sm flex-col gap-y-4"
                  >
                    <dt className="text-base sm:text-lg text-woodsmoke50">
                      {stat.name}
                    </dt>
                    <dd className="order-first text-3xl font-semibold tracking-wide text-woodsmoke400 sm:text-5xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
        {/* Logo Cloud */}
        <section className="relative bg-woodsmoke950 py-12 sm:py-16 flex justify-center items-center">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-base sm:text-3xl font-bold tracking-tight leading-none text-balance mb-6 text-center">
              Expert Roofing Backed by Trusted Brands
            </h2>
          </div>
        </section>
      </div>
      <footer className="relative py-4 bg-woodsmoke950 text-woodsmoke50">
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
