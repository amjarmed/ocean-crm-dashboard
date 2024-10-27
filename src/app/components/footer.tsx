import { footerLinksData } from '@/constants/footer-links';
import { Facebook, Github, Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';
import FooterLinksCard from './footer-links-card';
import Logo from './logo';

const Footer = () => {
  const socialIcons: ReactNode[] = [
    <Facebook
      className='social-links'
      key='f'
    />,
    <Instagram
      className='social-links'
      key='i'
    />,
    <Twitter
      className='social-links'
      key='t'
    />,
    <Github
      className='social-links'
      key='t'
    />,
    <Youtube
      className='social-links'
      key='t'
    />,
  ];
  return (
    <footer className='custom-section'>
      <div className='container '>
        {/* part 1 5-7*/}
        <div className='flex flex-col md:flex-row items-start justify-between gap-6 py-8 px-4'>
          {/* logo and social media*/}
          <div className='social-media  w-full md:basis-2/5  flex flex-col  items-start  pag-8 space-y-4 '>
            <Logo />
            <p className='text-lg'>
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <ul className='flex justify-center items-center space-x-4 px-4 py-6 gap-4'>
              {socialIcons.map((icon, index) => (
                <li key={index}>
                  <Link
                    href='#'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/*  lists of links */}

          <div className='w-full   md:basis-3/5 flex  items-start justify-between gap-4  '>
            {footerLinksData.map((links, index) => (
              <FooterLinksCard
                key={index}
                title={links.title}
                links={links.links}
              />
            ))}
          </div>
        </div>
        {/* part 2   */}
        <div className='border-t border-slate-700 py-6 px-4 space-y-4'>
          <p className='text-slate-600 tracking-wide text-sm'>
            &copy; {new Date().getFullYear()} OCEAN, Inc. All rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
