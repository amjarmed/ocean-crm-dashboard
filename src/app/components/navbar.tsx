import { navLinks } from '@/constants/nav-links';
import Link from 'next/link';
import Logo from './logo';
import MobileNav from './mobile-nav';
function Navbar() {
  return (
    <header className='fixed top-0 left-0 w-full bg-slate-900/50 backdrop-blur-md z-30 p-5'>
      <div className='container relative flex  justify-between transition-all py-6'>
        {/* logo */}
        <Logo />
        {/* desktop navigation  */}
        <nav className='hidden md:flex  gap-8 capitalize'>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={`#${link}`}
              className='hover:text-sky-500'
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* mobile nav */}
        <MobileNav />
      </div>
    </header>
  );
}

export default Navbar;
