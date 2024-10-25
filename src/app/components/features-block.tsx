import { FeatureBlock } from '@/types/interfaces';
import Image from 'next/image';
import { FC } from 'react';
import Heading from './heading';
interface FeaturesBlockProps extends FeatureBlock {}
const FeaturesBlock: FC<FeaturesBlockProps> = ({
  imageUrl,
  title,
  content,
  isReversed,
}) => {
  return (
    <article
      className={`flex flex-col lg:flex-row items-center justify-between gap-8 ${
        isReversed && 'lg:flex-row-reverse'
      }`}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={370}
        height={370}
        className='w-full md:basis-5/12 shadow-lg'
      />
      <div className='basis-6/12 flex flex-col md:text-center lg:text-start gap-4 md:gap-6'>
        <Heading title={title} />
        <p className='lg:max-w-[40rem]'>{content}</p>
      </div>
    </article>
  );
};
export default FeaturesBlock;
