"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import LogoBlack from "../assets/images/LogoBlack.png";
import { LuPhone, LuMail } from "react-icons/lu";
import { LuClock } from "react-icons/lu";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import { delay, motion } from "framer-motion";
import axios from "axios";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "#" },
  { name: "Contact", href: "/contact" },
];

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const formRowVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    email: "",
    phone: "",
    serviceType: "Select Service",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const serviceOptions = [
    "Roof Repair",
    "Roof Installation",
    "Roof Replacement",
    "Roof Estimate",
  ];

  const handleServiceSelect = (service) => {
    setFormData({ ...formData, serviceType: service });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Check if any field is empty
    if (
      !formData.fullName ||
      !formData.address ||
      !formData.email ||
      formData.serviceType === "Select Service" ||
      !formData.phone ||
      !formData.message
    ) {
      setErrorMessage("All fields are required.");
      return;
    }

    // Clear error message if all fields are filled
    setErrorMessage("");
    setLoading(true); // Start loading state

    try {
      const response = await axios.post(
        "http://localhost:5001/api/contact",
        formData
      );

      setFormData({
        fullName: "",
        address: "",
        email: "",
        phone: "",
        serviceType: "Select Service",
        message: "",
      }); // Reset form

      setStatus("success");
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }

    setLoading(false); // Stop loading state
  };

  return (
    <div className="flex flex-col min-h-screen sm:overflow-hidden bg-woodsmoke50">
      <header className="inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-4 sm:p-6 lg:px-8"
          aria-label="Global"
        >
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
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-woodsmoke950"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="h-6 w-6 text-woodsmoke950"
              />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-woodsmoke950 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-woodsmoke950 after:transition-all after:duration-300 hover:after:w-full"
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
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-woodsmoke50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-woodsmoke950">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Francisco's Roofing Inc</span>
                <Image
                  alt="Logo White 160x160"
                  src={LogoBlack}
                  className="h-10 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-woodsmoke950"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon
                  aria-hidden="true"
                  className="h-6 w-6 text-woodsmoke950"
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
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium  text-woodsmoke950 hover:bg-woodsmoke950 hover:text-woodsmoke50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium  text-woodsmoke950 hover:bg-woodsmoke950 hover:text-woodsmoke50"
                  >
                    Free Estimate
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <div className="flex items-center bg-woodsmoke50">
        <div className="sm:max-w-7xl sm:mx-auto w-full grid grid-cols-1 md:grid-cols-2 sm:gap-8 bg-woodsmoke50">
          {/* left side */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="px-8 py-10"
          >
            <h3 className="text-woodsmoke900 uppercase mb-2 text-base sm:text-lg tracking-widest font-light">
              Get in touch
            </h3>
            <h1 className="text-4xl font-semibold mb-4 uppercase text-woodsmoke950">
              contact us
            </h1>
            <p className="text-base mb-8 text-woodsmoke900">
              Have roofing questions or need assistance? Contact us today! We’re
              here to help at every step and offer free, no-obligation estimates
              to ensure your project starts with confidence.
            </p>
            <div className="text-woodsmoke900">
              <a href="tel:+13232535146" className="mb-4 block">
                <p className="flex items-center gap-2">
                  <span className="font-medium">
                    <LuPhone size={20} />
                  </span>
                  +1 (323) 253-5146
                </p>
              </a>
              <a
                href="mailto:support@franciscosroofinginc.co"
                className="mb-8 block"
              >
                <p className="flex items-center gap-2">
                  <span className="font-medium">
                    <LuMail size={20} />
                  </span>
                  support@franciscosroofinginc.co
                </p>
              </a>
              <p className="flex items-center gap-2">
                <span className="font-medium">License No.</span>
                #1086198
              </p>
            </div>
            <div className="mt-8 text-woodsmoke900">
              <h2 className="flex items-center gap-2 font-bold">
                <LuClock size={25} />
                <span className="text-2xl text-woodsmoke950">Open Hours</span>
              </h2>
              <div className="mt-4 space-y-2 max-w-xs">
                <p className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>8 AM - 5 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Saturday - Sunday:</span>
                  <span>Closed</span>
                </p>
              </div>
              <div className="mt-6 flex space-x-4">
                <a
                  href="#"
                  className="text-woodsmoke950 hover:text-woodsmoke700 active:text-woodsmoke600"
                >
                  <FaFacebook size={25} />
                </a>
                <a
                  href="#"
                  className="text-woodsmoke950 hover:text-woodsmoke700 active:text-woodsmoke600"
                >
                  <FaInstagram size={25} />
                </a>
                <a
                  href="https://g.co/kgs/fzhRzAs"
                  className="text-woodsmoke950 hover:text-woodsmoke700 active:text-woodsmoke600"
                >
                  <FaGoogle size={25} />
                </a>
              </div>
            </div>
          </motion.div>
          {/* right side */}
          <div className="w-full max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="px-4 sm:px-8 py-14 w-full">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5">
                <motion.div
                  variants={formRowVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="w-full"
                >
                  <label className="block w-full text-sm font-semibold font-poppins text-woodsmoke950">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-3 px-4 py-2 block w-full border border-woodsmoke300 text-woodsmoke950 rounded-md"
                  />
                </motion.div>
                <motion.div
                  variants={formRowVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="w-full"
                >
                  <label className="block w-full text-sm font-semibold font-poppins text-woodsmoke950">
                    Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-3 px-4 py-2 block w-full border border-woodsmoke300 text-woodsmoke950 rounded-md"
                  />
                </motion.div>
              </div>
              <motion.div
                variants={formRowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-4 w-full"
              >
                <label className="block w-full text-sm font-semibold font-poppins text-woodsmoke950">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-3 px-4 py-2 block w-full border border-woodsmoke300 text-woodsmoke950 rounded-md"
                />
              </motion.div>
              <motion.div
                variants={formRowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-4 w-full"
              >
                <label className="block w-full text-sm font-semibold text-woodsmoke950">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-3 px-4 py-2 block w-full border border-woodsmoke300 text-woodsmoke950 rounded-md"
                />
              </motion.div>
              <motion.div
                variants={formRowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-4 w-full"
              >
                <label className="block w-full text-sm font-semibold text-woodsmoke950">
                  Service Type
                </label>
                <Menu
                  as="div"
                  className="mt-3 relative inline-block text-left w-full"
                >
                  <div>
                    <MenuButton className="inline-flex w-full justify-between rounded-md bg-white px-4 py-3 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                      {formData.serviceType}
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 size-5 text-gray-400"
                      />
                    </MenuButton>
                  </div>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden"
                  >
                    <div className="py-1">
                      {serviceOptions.map((service) => (
                        <MenuItem key={service} as="div">
                          <button
                            type="button"
                            onClick={() => handleServiceSelect(service)}
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          >
                            {service}
                          </button>
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Menu>
              </motion.div>

              <motion.div
                variants={formRowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-4 w-full"
              >
                <label className="block w-full text-sm font-semibold font-poppins text-woodsmoke950">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Leave us a message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-3 px-4 py-2 block w-full border border-woodsmoke300 text-woodsmoke950 rounded-md"
                ></textarea>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }} // Start completely hidden and below
                whileInView={{ opacity: 1, y: 0 }} // Animate into view
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }} // Smooth transition with delay
                viewport={{ once: true, amount: 0.2 }} // Ensures it only animates when at least 20% is visible
                className="mt-8 flex justify-end flex-col text-center"
              >
                <button
                  type="submit"
                  className={`w-full sm:w-auto bg-woodsmoke950 text-woodsmoke50 py-2 px-4 rounded-lg ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {errorMessage && (
                  <p className="mt-3 text-red-600 text-sm font-semibold">
                    {errorMessage}
                  </p>
                )}
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
