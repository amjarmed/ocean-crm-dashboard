import Image from 'next/image';
import { FC } from 'react';
interface FeatureCardProps {
  imageUrl: string;
  title: string;
  content: string;
}
const FeatureCard: FC<FeatureCardProps> = ({ imageUrl, title, content }) => {
  return (
    <article className='w-full md:max-w-[30rem] lg:max-w-[36rem] border-2 border-transparent rounded-lg py-4 px-8 hover:bg-slate-800 hover:border-sky-600 transition-all cursor-pointer   '>
      <div className='flex flex-col items-center   md:items-start  lg:items-center lg:flex-row  gap-6   '>
        <Image
          src={imageUrl}
          alt={title}
          width={50}
          height={50}
        />
        <div className='car-content flex flex-col text-center md:text-start space-y-1 '>
          <h4 className='text-slate-100 text-base font-bold'>{title}</h4>
          <p className='text-sm leading-6'>{content}</p>
        </div>
      </div>
    </article>
  );
};
export default FeatureCard;
