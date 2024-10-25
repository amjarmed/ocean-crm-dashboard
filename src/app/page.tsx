import clients from '@/constants/clinets';
import { features, features2 } from '@/constants/features';
import { testimonials } from '@/constants/testimonials';
import { ArrowRightCircle, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './components/button';
import FeatureCard from './components/feature-card';
import FeaturesBlock from './components/features-block';
import Heading from './components/heading';
import PricingSection from './components/pricing-section';
import TestimonialCard from './components/testimonial-card';

export default function Home() {
  return (
    <main className='overflow-x-hidden pt-32 lg:pt-28 antialiased'>
      <div className='relative container'>
        {/* bg image */}
        <Image
          src='/bg.png'
          alt='hero image'
          width={1920}
          height={1080}
          className='absolute -z-50 -top-20 left-0 w-full  min-h-screen md:max-h[678px] lg:min-h-screen opacity-10'
        />
        {/* hero  section*/}
        <section id='home'>
          {/* bubbles effect */}
          <figure className='custom-section bubble-effect w-96 lg:w-[520px] h-96 bg-indigo-600 top-16  -left-40' />
          <figure className='bubble-effect w-96 lg:w-[430px] h-96 bg-sky-600 bottom-16 md:bottom-44 -right-40' />
          <div className='flex flex-col text-center space-y-12'>
            <div className='flex flex-col items-center space-y-6 '>
              <p className='capitalize border border-slate-700 py-1 px-3 rounded-3xl cursor-pointer hover:border-sky-500 hover:bg-slate-800 shadow-md transition-all'>
                new features is now available.
                <ArrowRightCircle className='inline ml-1 w-4 h-4' />
              </p>
              <Heading
                title='best modern CRM  dashboard for your business'
                isCentred={true}
              />
              <p className='max-w{36rem} leading-normal sm:text-lg sm:leading-8 '>
                boost engineering team's productivity with OCEAN CRM dashboard
                that streamlines project managements, collaboration, and
                data-drive decision-making.
              </p>
              <div className='flex items-center gap-4'>
                <Button variant='primary'>
                  get started
                  <MoveRight className='inline ml-2 w-4 h-4' />
                </Button>
                <Link
                  href='#pricing'
                  className='capitalize '
                >
                  <Button variant='outline'>View Pricing</Button>
                </Link>
              </div>
            </div>
            {/* hero image */}
            <Image
              src='/Hero-image.svg'
              alt='hero image'
              width={670}
              height={370}
              className='mx-auto shadow-xl'
            />
          </div>
        </section>
        {/* clients section */}
        <section
          id='clients'
          className='custom-section max-w-[62rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-4     '
        >
          {clients.map((client, index) => (
            <Image
              key={index}
              src={client.imageUrl}
              alt={client.alt}
              width={128}
              height={80}
              className='mx-auto '
            />
          ))}
        </section>

        {/*------------ feature section ------------ */}
        <section
          id='features'
          className='custom-section flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-28'
        >
          {/* part 1 */}
          <div
            id='part-1'
            className='relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12  '
          >
            {/* bg image */}
            <Image
              src='/bg2.png'
              alt='second banner'
              width={1920}
              height={1080}
              className='absolute -z-50 top-0 left-0  opacity-5 w-[1400px] h-[670]'
            />
            <div className='flex flex-col gap-4 items-center text-center lg:items-start  lg:text-start'>
              <Heading title='Powerful features to help you manage all your leads.' />
              <p className='max-w{34rem} leading-normal sm:text-lg sm:leading-8 '>
                boost engineering team's productivity with OCEAN CRM dashboard
                that streamlines project managements, collaboration, and
                data-drive decision-making.
              </p>
              <Button variant='primary'>get started</Button>
            </div>
            {/* */}
            <div className='grid md:grid-cols-2 lg:grid-cols-1 gap-4 '>
              {features.slice(0, 3).map((feature, index) => (
                <FeatureCard
                  key={index}
                  {...feature}
                />
              ))}
            </div>
          </div>
          {/* part 2 */}
          {features2.map((feature, index) => (
            <FeaturesBlock
              key={index}
              {...feature}
              isReversed={index % 2 !== 0}
            />
          ))}
        </section>

        {/* Pricing section */}

        <PricingSection />

        {/* testimonials section  */}
        <section
          id='testimonials'
          className='custom-section  flex flex-col gap-8 '
        >
          <Heading
            title='Meet Our Happy Customers'
            isCentred
          />
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {testimonials.map((test, index) => (
              <TestimonialCard
                key={index}
                {...test}
              />
            ))}
          </div>
        </section>
        {/* contact section */}
        <section
          id='contact'
          className='custom-section  flex flex-col lg:flex-row justify-between items-center  gap-6  text-center capitalize space-y-5  px-8 lg:px-24 py-8 lg:py-12 bg-slate-800  rounded-lg  '
        >
          <div className='flex flex-col gap-4 text-center lg:text-start'>
            <Heading title="let's try our services now" />
            <p className='text-slate-100'>
              Ready to experience the benefits of our services for yourself?
              Click the link below to get started and discover how our solutions
              can help you achieve your goals. Our team is dedicated to
              providing top-notch support and ensuring a seamless experience
              from start to finish. Don't wait - take the first step towards
              achieving success with our services today!
            </p>
          </div>
          <Button variant='primary'>
            get started
            <MoveRight className='inline ml-2 w-4 h-4' />
          </Button>
        </section>
      </div>
    </main>
  );
}
