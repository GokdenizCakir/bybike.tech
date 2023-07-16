'use client';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import Carousel from '../_components/Carousel';

const page = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const frontRef = useRef();
  const backRef = useRef();

  return (
    <main>
      <section className='flex justify-center bg-gradient-to-b from-[#00A29D] to-white'>
        <div className='relative w-[96%] md:w-11/12 h-[34rem] sm:h-[40rem] pt-12'>
          <div className='text-3xl sm:text-5xl lg:text-6xl text-center md:text-start font-medium'>
            <h2 className='underline decoration-bybikeRed md:no-underline'>
              FROM <br className='hidden md:block' />
              <span className='underline decoration-bybikeRed'>BACKSTAGE</span>
            </h2>
            <h2 className='underline decoration-bybikeBlue md:no-underline'>
              TO <br className='hidden md:block' />
              <span className='underline decoration-bybikeBlue'>
                FRONTSTAGE
              </span>
            </h2>
          </div>
          <h3 className='italic text-center md:text-start lg:text-xl tracking-wider mt-4'>
            <span className='font-semibold'>Turnkey</span> solution for your
            brand.
          </h3>

          <div className='absolute flex justify-center right-1/2 translate-x-1/2 md:translate-x-0 md:right-0 top-52 lg:top-32 bg-[url(/platform_stage.png)] bg-no-repeat bg-contain w-full sm:w-9/12 md:w-[40rem] lg:w-[50rem] h-full'>
            <div className='relative flex justify-between h-min w-[40%]'>
              <div
                onClick={() =>
                  frontRef.current.scrollIntoView({
                    behavior: 'smooth',
                    align: 'top',
                  })
                }
                className='bg-bybikeBlue cursor-pointer ring mt-28 sm:mt-44 ring-white w-8 max-h-8 aspect-square rounded-[50%]'
              ></div>
              <div
                onClick={() =>
                  backRef.current.scrollIntoView({
                    behavior: 'smooth',
                    align: 'top',
                  })
                }
                className='bg-bybikeRed cursor-pointer ring mt-16 sm:mt-28 ring-white w-8 max-h-8 aspect-square rounded-[50%]'
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* FRONT STAGE */}
      <h2
        ref={frontRef}
        className='tracking-wider text-center text-4xl mt-10 pt-6 font-medium'
      >
        FRONT-STAGE
      </h2>
      <hr className='border border-bybikeBlue mt-4' />
      <section className='mt-12 flex justify-center'>
        <div className='flex justify-between w-[96%] items-center'>
          <div className=''>
            <h2 className='text-4xl mb-12 font-semibold mt-24'>
              <span className='text-bybikeBlue '>Rider </span>App
            </h2>
            <div className='flex gap-3 mb-10'>
              <button
                onClick={() => setActiveIndex(0)}
                className={`${
                  activeIndex === 0
                    ? 'border border-black'
                    : 'text-white bg-bybikeBlack'
                } py-1 px-2 rounded-xl `}
              >
                Tailor made
              </button>
              <button
                onClick={() => setActiveIndex(1)}
                className={`${
                  activeIndex === 1
                    ? 'border border-black'
                    : 'text-white bg-bybikeBlack'
                } py-1 px-2 rounded-xl `}
              >
                Online Invoice
              </button>
              <button
                onClick={() => setActiveIndex(2)}
                className={`${
                  activeIndex === 2
                    ? 'border border-black'
                    : 'text-white bg-bybikeBlack'
                } py-1 px-2 rounded-xl `}
              >
                Vehicle
              </button>
              <button
                onClick={() => setActiveIndex(3)}
                className={`${
                  activeIndex === 3
                    ? 'border border-black'
                    : 'text-white bg-bybikeBlack'
                } py-1 px-2 rounded-xl `}
              >
                Payment
              </button>
            </div>

            <Carousel
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>

          <div className='flex gap-8 mt-36 h-[30rem]'>
            <img src='/platform_ss1.png' alt='ss1' />
            <img src='/platform_ss2.png' alt='ss2' />
          </div>
        </div>
      </section>

      {/* BACK STAGE */}
      <h2
        ref={backRef}
        className='tracking-wider text-center text-4xl mt-24 pt-6 font-medium'
      >
        BACK-STAGE
      </h2>
      <hr className='border border-bybikeRed mt-4 mb-24' />
      <section className='px-48'>
        <h2 className='text-4xl mb-2 font-semibold'>
          <span className='text-bybikeRed'>Control Your </span>Fleet
        </h2>
        <p className='w-[34rem] mb-16'>
          Track your fleet{' '}
          <span className='italic text-bybikeRed'>second to second, </span>
          without delay, and{' '}
          <span className='italic text-bybikeRed'>maximize </span>your
          operational efficiency with our fleet management software.
        </p>

        <img src='/platform_ss3.png' alt='ss3' />
      </section>
      <section className='rounded-[2rem] mt-36 mx-40 p-10 grid grid-cols-2 bg-[#F5F5F5]'>
        <div>
          <h2 className='text-4xl font-semibold mb-6'>
            <span className='text-bybikeRed'>Operation</span> Apps
          </h2>

          <h3 className='text-lg font-medium mb-6'>
            Specially <span className='text-bybikeRed italic'>designed </span>
            for your field team.
          </h3>
          <ul className='list-disc flex flex-col ml-4 gap-6'>
            <li>Easy to Use</li>
            <li>Multi Authorization for Each Team</li>
            <li>Designed for Tracktion</li>
          </ul>
        </div>
        <div className='flex justify-end'>
          <img src='/software_ss1.png' className='w-5/12' alt='ss1' />
          <img src='software_ss2.png' className='w-5/12' alt='ss2' />
        </div>
      </section>

      <section className='rounded-[2rem] mt-36 mx-40 p-10 pt-12 bg-[#F5F5F5]'>
        <h2 className='text-4xl font-semibold mb-8'>
          <span className='text-bybikeRed'>CRM</span> Dashboard
        </h2>
        <h3 className='w-1/2 mb-10'>
          Your customer support team will be able to manage all complaints from
          a <span className='text-bybikeRed italic'>single</span> panel. Your
          customer satisfaction will{' '}
          <span className='text-bybikeRed italic'>skyrocket</span>.
        </h3>
        <img src='/software_ss3.png' alt='ss3' />
      </section>

      <section className='flex items-center justify-between mt-24 mb-24 px-48'>
        <div>
          <h2 className='text-4xl font-semibold mb-8'>
            <span className='text-bybikeRed'>CMS</span> Dashboard
          </h2>
          <h3 className='text-lg font-medium mb-6'>
            Manage your campains{' '}
            <span className='text-bybikeRed italic'>easily </span>
            from a <span className='text-bybikeRed italic'>single</span> panel.
          </h3>
          <ul className='list-disc flex flex-col ml-4 gap-4'>
            <li>Sales Management</li>
            <li>Marketing Management</li>
          </ul>
        </div>
        <div className='p-10 py-24 rounded-3xl bg-[#ECECEC]'>
          <h2 className='text-5xl font-medium mb-1'>COMING SOON</h2>
          <h3 className='text-center mb-8'>Notify Me When It's Ready</h3>
          <div className='flex h-12 items-center justify-center rounded-md overflow-hidden'>
            <input
              type='text'
              placeholder='Enter a valid e-mail address'
              className='focus:outline-none px-4 w-2/3 h-full text-sm'
            />
            <button className='bg-black h-full px-4 text-white'>
              NOTIFY ME
            </button>
          </div>
        </div>
      </section>

      <section className='flex flex-col gap-4 mb-24 items-center'>
        <h2 className='text-3xl font-semibold'>
          OUR TEAM IS HERE TO <span className='text-bybikeBlue'>HELP</span>
        </h2>
        <Link
          href='/demo'
          className='bg-bybikeBlue py-2 px-4 rounded-xl text-white'
        >
          Get In Touch
        </Link>
      </section>
    </main>
  );
};

export default page;
