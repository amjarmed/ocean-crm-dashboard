'use client';
import { navLinks } from '@/constants/nav-links';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

function MobileNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNav = () => setIsOpen(!isOpen);
  return (
    <>
      <div
        className='flex md:hidden cursor-pointer md:cursor-none'
        onClick={toggleNav}
      >
        {isOpen ? <X /> : <Menu />}
      </div>
      <figure
        className={`absolute rounded-md right-2 origin-top  w-auto bg-slate-800 p-2 transition-all z-50 ${
          isOpen
            ? 'top-20 scale-y-100 opacity-100 visible'
            : 'top-0 scale-y-50 hidden'
        }`}
      >
        <nav className='w-full h-full flex flex-col space-y-2 capitalize font-normal tracking-wide'>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={`#${link}`}
              className='py-1 px-2 transition-all rounded-md hover:bg-slate-700 hover:text-sky-500'
              onClick={toggleNav}
            >
              {link}
            </Link>
          ))}
        </nav>
      </figure>
    </>
  );
}

export default MobileNav;
