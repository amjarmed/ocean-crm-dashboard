'use client';
import { Pricing, PricingMode } from '@/types/interfaces';
import { Check } from 'lucide-react';
import { FC } from 'react';
import Button from './button';
interface PricingCardProps extends Pricing {
  planMode: PricingMode;
}
const PricingCard: FC<PricingCardProps> = ({
  title,
  description,
  monthlyPrice,
  yearlyPrice,
  features,
  isMostPopular,
  glowPosition,
  planMode,
}) => {
  const price = ['monthly', 'yearly'];

  return (
    <div
      className={`relative w-full py-6 px-4 flex flex-col space-y-4 lg:space-y-6 ${isMostPopular && 'border-2 border-sky-700 bg-slate-800'}  border border-slate-700 overflow-hidden rounded-lg shadow-lg `}
    >
      {/* card glow effect */}
      <figure
        className={`bubble-effect w-72 h-60 bg-sky-600 -top-12 ${
          glowPosition === 'left' ? '-left-8' : '-right-8'
        }`}
      />
      {/* card poplar  hint */}
      {isMostPopular && (
        <p className='absolute  top-5 right-6  bg-sky-600 text-white text-xs capitalize py-2 px-3  rounded-3xl '>
          {' '}
          Most Popular
        </p>
      )}
      {/*  card header  */}
      <header className=' space-y-2'>
        <h2 className='text-3xl font-bold'>{title}</h2>
        <p>{description}</p>
      </header>
      {/* card price */}
      <p className='  space-y-5 py-5'>
        <h4 className='text-5xl font-extrabold text-slate-100'>
          ${planMode === 'yearly' ? yearlyPrice : monthlyPrice}
          <small className='text-base text-slate-300 font-semibold ps-1'>
            {planMode === 'yearly' ? ' /year' : ' /month'}
          </small>
        </h4>
      </p>
      {/* card  action button  */}
      <Button
        variant={isMostPopular ? 'primary' : 'secondary'}
        isFullSize
      >
        Order Now
      </Button>

      {/* plan features */}
      <ul className='space-y-4'>
        {features.map((feature, index) => (
          <li
            key={index}
            className='flex items-center gap-4'
          >
            <Check className='text-sky-600' />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PricingCard;
