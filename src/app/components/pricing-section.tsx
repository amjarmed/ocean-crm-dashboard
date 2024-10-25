'use client';
import { pricing } from '@/constants/pricing';
import { PricingMode } from '@/types/interfaces';
import { useState } from 'react';
import Heading from './heading';
import PricingCard from './pricing-card';

function PricingSection() {
  // tab style
  const tabStyle =
    'basis-6/12 text-center py-2 to-white capitalize cursor-pointer  font-semibold tracking-wide rounded-lg   text-white px-2';
  // handle plan mode state
  const [mode, setMode] = useState<PricingMode>('monthly');
  const handelPrice = (e: PricingMode) => {
    setMode(e);
  };
  return (
    <section
      id='pricing'
      className='custom-section  flex flex-col gap-8'
    >
      <Heading
        title='find a plan to Power your Project'
        isCentred
      />
      {/* tabs */}
      <div className='max-w-[12rem] w-full mx-auto p-1 flex text-base bg-slate-800 rounded-lg '>
        <p
          className={`${tabStyle} ${mode === 'monthly' && 'bg-sky-500'}`}
          onClick={() => handelPrice('monthly')}
        >
          Monthly
        </p>
        <p
          className={`${tabStyle}  ${mode === 'yearly' && 'bg-sky-500'}`}
          onClick={() => handelPrice('yearly')}
        >
          Yearly
        </p>
      </div>
      <div className='grid md:grid-cols-3 gap-8'>
        {pricing.map((plan, index) => (
          <PricingCard
            key={index}
            planMode={mode}
            {...plan}
          />
        ))}
      </div>
    </section>
  );
}

export default PricingSection;
