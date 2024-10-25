import { footerLinksData } from '@/constants/footer-links';
import { socialMedia } from '@/constants/social-media';
import { toPascalCase } from '@/lib/utils';
import Link from 'next/link';
import FooterLinksCard from './footer-links-card';
import MyIcon from './icon';
import Logo from './logo';

const Footer = () => {
  return (
    <footer className='custom-section'>
      <div className='container '>
        {/* part 1 5-7*/}
        <div className='flex flex-col md:flex-row items-start justify-between gap-6 py-8 px-4'>
          {/* logo and social media*/}
          <div className='social-media  w-full md:basis-2/5  flex flex-col  items-start  pag-8 space-y-4 '>
            <Logo />
            <p>
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <ul className='flex justify-center items-center space-x-4 px-4 py-6 gap-4'>
              {socialMedia.map((media, index) => (
                <li key={index}>
                  <Link
                    href={media.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <MyIcon
                      iconName={toPascalCase(media.icon)}
                      size={24}
                      color='currentColor'
                      className='hover:text-sky-800'
                    />
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
