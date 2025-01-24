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
import axios from 'axios';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '#' },
  { name: 'Gallery', href: '#' },
  { name: 'Contact', href: '/contact' },
];

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
        setErrorMessage('All fields are required.');
        setStatus('error');
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        setErrorMessage('Invalid email address.');
        setStatus('error');
        return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await axios.post('http://localhost:5001/api/contact', formData);
        setStatus('success');
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        }); //Reset form

        setTimeout(() => setStatus(null), 100000);
    } catch (error) {
        console.error('Error submitting form:', error);
        setErrorMessage('An unexpected error occurred. Please try again later.');
        setStatus('error');
    }
  };

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
        <div className='sm:max-w-7xl sm:mx-auto w-full grid grid-cols-1 md:grid-cols-2 sm:gap-8 bg-lotionWhite'>
            {/* left side */}
            <div className='px-8 py-20'>
                <h1 className='text-4xl font-bold mb-4 text-winterBlack'>Get in touch</h1>
                <p className='text-base mb-8 text-winterBlack '>Got roofing questions or need a quote? Contact us today! We’re here to assist you every step of the way and offer free, no-obligation estimates to get your project started with confidence.</p>
                <div className='space-y-4 text-winterBlack'>
                    <p className="flex items-center gap-2">
                        <span className="font-medium"><LuPhone size={20}/></span>
                        +1 (323) 253-5146
                    </p>
                    <p className="flex items-center gap-2">
                        <span className="font-medium"><LuMail size={20}/></span>
                        franciscosroofinginc.22@gmail.com
                    </p>
                    <p className="flex items-center gap-2">
                        <span className="font-medium">License No.</span>
                        #1086198
                    </p>
                </div>
                <div className='mt-8 text-winterBlack'>
                    <h2 className='flex items-center gap-2 font-bold'>
                        <LuClock size={25}/>
                        <span className='text-2xl'>Open Hours</span>
                    </h2>
                    <div className='mt-4 space-y-2 hidden sm:block max-w-xs'>
                        <p className='flex justify-between'>
                            <span className='font-medium'>Monday:</span>
                            <span>8 AM - 5 PM</span>
                        </p>
                        <p className='flex justify-between'>
                            <span className='font-medium'>Tuesday:</span>
                            <span>8 AM - 5 PM</span>
                        </p>
                        <p className='flex justify-between'>
                            <span className='font-medium'>Wednesday:</span>
                            <span>8 AM - 5 PM</span>
                        </p>
                        <p className='flex justify-between'>
                            <span className='font-medium'>Thursday:</span>
                            <span>8 AM - 5 PM</span>
                        </p>
                        <p className='flex justify-between'>
                            <span className='font-medium'>Friday:</span>
                            <span>8 AM - 5 PM</span>
                        </p>
                        <p className='flex justify-between'>
                            <span className='font-medium'>Saturday:</span>
                            <span>8 AM - 5 PM</span>
                        </p>
                        <p className='flex justify-between'>
                            <span className='font-medium'>Sunday:</span>
                            <span>Closed</span>
                        </p>
                    </div>
                    <div className='mt-4 space-y-2 sm:hidden max-w-xs'>
                        <p className='flex justify-between'>
                            <span className='font-medium'>Monday - Saturday:</span>
                            <span>8 AM - 5 PM</span>
                        </p>
                        <p className='flex justify-between'>
                            <span className='font-medium'>Sunday:</span>
                            <span>Closed</span>
                        </p>
                    </div>
                    <div className="mt-6 flex space-x-4">
                        <a href="#" className="text-winterBlack hover:text-black">
                            <FaFacebook size={25} />
                        </a>
                        <a href="#" className="text-winterBlack hover:text-black">
                            <FaInstagram size={25} />
                        </a>
                        <a href="https://g.co/kgs/fzhRzAs" className="text-winterBlack hover:text-black">
                            <FaGoogle size={25} />
                        </a>
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className='px-8 py-20'>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <label className="block text-sm font-semibold font-poppins text-winterBlack" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="mt-3 px-4 py-2 block w-full border border-winterBlack rounded-md focus:border-indigo-500 focus:ring-indigo-500 text-winterBlack"
                            /> 
                        </div>
                        <div>
                            <label className="block text-sm font-semibold font-poppins text-winterBlack" htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="mt-3 px-4 py-2 block w-full border border-winterBlack rounded-md focus:border-indigo-500 focus:ring-indigo-500 text-winterBlack"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-semibold font-poppins text-winterBlack" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-3 px-4 py-2 block w-full border border-winterBlack rounded-md focus:border-indigo-500 focus:ring-indigo-500 text-winterBlack"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-semibold font-poppins text-winterBlack" htmlFor="phone">
                            Phone number
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-3 px-4 py-2 block w-full border border-winterBlack rounded-md focus:border-indigo-500 focus:ring-indigo-500 text-winterBlack"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-semibold font-poppins text-winterBlack" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-3 px-4 py-2 block w-full border border-winterBlack rounded-md focus:border-indigo-500 focus:ring-indigo-500 text-winterBlack"
                        ></textarea>
                    </div>
                    <div className="mt-8 flex justify-end flex-col text-center">
                        <button
                            type="submit"
                            className="bg-winterBlack text-lotionWhite py-2 px-4 rounded-lg hover:bg-black transition"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'success' && <p className="text-green-500 mt-4">Message sent successfully!</p>}
                        {status === 'error' && <p className="text-red-500 mt-4">{errorMessage}</p>}
                    </div>
                </form>
            </div>
        </div>
        <footer className="absolute bottom-0 left-0 w-full py-4 flex items-center justify-center bg-lotionWhite">
            <span className="text-sm text-winterBlack text-center">
                © 2022 Francisco's Roofing, Inc. All rights reserved.
            </span>
        </footer>
      </div>     
    </div>
  );
}
