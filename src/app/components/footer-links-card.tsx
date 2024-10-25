import { FooterLinks } from '@/types/interfaces';
import Link from 'next/link';
import { FC } from 'react';
interface FooterLinksCardProps extends FooterLinks {}
const FooterLinksCard: FC<FooterLinksCardProps> = ({ title, links }) => {
  return (
    <div className='basis-1/3  flex flex-col gap-4'>
      <h2 className='text-slate-100 font-bold text-lg'>{title}</h2>
      <ul className='flex flex-col gap-1 space-y-4'>
        {links.map((link, index) => (
          <li
            key={index}
            className='tracking-wide  hover:text-slate-100'
          >
            <Link href={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FooterLinksCard;
