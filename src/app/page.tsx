import { ArrowRightCircle, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './components/button';
import Heading from './components/heading';

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
          className='absolute -z-50 -top-20 left-0 w-full h-full opacity-10'
        />
        {/* hero  section*/}
        <section
          id='home'
          className='relative'
        >
          {/* bubbles effect */}
          <figure className='bubble-effect w-96 lg:w-[520px] h-96 bg-indigo-600 top-16  -left-40' />
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
      </div>
    </main>
  );
}
