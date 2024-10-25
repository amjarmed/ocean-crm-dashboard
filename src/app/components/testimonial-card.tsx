// testimonials card

import { Testimonial } from '@/types/interfaces';
import { Quote } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';
interface TestimonialCardProps extends Testimonial {}
const TestimonialCard: FC<TestimonialCardProps> = ({
  name,
  imageUrl,
  content,
  company,
  icon,
  ...props
}) => {
  return (
    <article className='flex flex-col  items-center md:items-start gap-4 py-6 px-4 hover:bg-slate-700 transition-all  capitalize'>
      <Quote className='w-12 h-12' />

      <p className='text-lg text-center md:text-start'>{content}</p>
      <div className='flex items-start gap-2'>
        <Image
          src={imageUrl}
          alt={name}
          width={50}
          height={50}
          className='w-[3rem] rounded-full object-contain  p-1 bg-slate-50  shadow-sm'
        />
        <div className='flex flex-col'>
          <h4 className='text-slate-100 font-semibold tracking-wide'>{name}</h4>
          <small className='text-xs text-sky-600 font-semibold '>
            {company}
          </small>
        </div>
      </div>
    </article>
  );
};
export default TestimonialCard;
