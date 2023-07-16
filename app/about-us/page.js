import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <main>
      {/* TITLE */}
      <section className='bg-bybikeBlack text-white flex flex-col gap-2 justify-center items-center h-80'>
        <h1 className='text-6xl font-medium'>
          <span className='text-bybikeBlue'>ABOUT</span> US
        </h1>
        <h3 className='italic text-xl tracking-widest'>
          On a mission to empower{' '}
          <span className='not-italic'>Smart Cities.</span>
        </h3>
      </section>

      {/* BANNER */}
      <img src='/about_us_banner.png' alt='about us' />

      {/* OUR MISSION */}
      <section className='p-20 flex flex-col items-center'>
        <h2 className='text-4xl font-medium'>
          Our <span className='text-bybikeBlue'>Mission</span>
        </h2>
        <p className='w-2/3 my-6 leading-10 text-center text-2xl font-thin tracking-widest'>
          Transforming shared bicycle networks with cutting-edge products to
          maximize efficiency, user-friendliness, and profitability for
          micro-mobility operators and local governments
        </p>
        <Link href='/team' className='text center py-2 px-10 bg-bybikeBlack text-white rounded-md'>
          MEET OUR TEAM
        </Link>
      </section>

      {/* WHAT'S DIFFERENT */}
      <section className='bg-[#F5F5F5] py-12 flex flex-col items-center mb-24'>
        <h2 className='text-3xl font-light'>
          What's different when you work with us?
        </h2>
        <div className='grid grid-cols-2 gap-16 font-light text-justify leading-7 w-1/2 mt-8'>
          <p>
            We are developing software and hardware products{' '}
            <span className='text-bybikeBlue'>
              to make shared bicycle networks
            </span>{' '}
            more efficient and user-friendly for micro-mobility operators and
            local governments.
          </p>
          <p>
            By using our developed products, operators can{' '}
            <span className='text-bybikeBlue'>
              significantly reduce their expenses and provide a more efficient
              experience
            </span>{' '}
            to their customers, thereby increasing their earnings.
          </p>
        </div>
      </section>

      {/* BANNER 2 */}
      <img src='/about_us_banner2.png' alt='about us' />

      {/* OUR VISION */}
      <section className='p-16 flex flex-col items-center'>
        <h2 className='text-4xl font-medium'>
          Our <span className='text-bybikeBlue'>Vision</span>
        </h2>
        <p className='w-2/3 my-6 leading-10 text-center text-2xl font-thin tracking-widest'>
          Empowering a cleaner and more sustainable world through electric
          micro-mobility solutions, revolutionizing transportation by offering
          efficient and accessible services to operator companies, anytime,
          anywhere.
        </p>
      </section>

      {/* MOBILITY SOLUTIONS */}
      <section className='bg-[#F5F5F5] py-12 flex flex-col items-center mb-32'>
        <h2 className='text-3xl font-light'>
          Clean and Accessible Mobility Solutions
        </h2>
        <div className='grid grid-cols-2 gap-16 font-light text-justify leading-7 w-1/2 mt-8'>
          <p>
            We believe that in order to make the world cleaner and more livable,
            energy consumption needs to be done in a clean manner. In this
            context, we have determined that{' '}
            <span className='text-bybikeBlue'>
              50% of transportation, which has a significant impact on carbon
              emissions,
            </span>{' '}
            can be achieved through electric micro-mobility vehicles.
          </p>
          <p>
            In order to support environmentally friendly transportation, we have
            started developing products to provide more efficient and
            user-friendly services to operator companies that aim to offer
            micro-mobility vehicles to people anytime, anywhere.
          </p>
        </div>
      </section>

      {/* SOLUTION PARTNERS */}
      <section className='flex flex-col items-center mb-28'>
        <h2 className='text-5xl font-medium mb-6'>
          Our <span className='text-bybikeBlue'>Solution Partners</span>
        </h2>
        <div className='flex justify-between gap-2 w-7/12'>
          <div>
            <img className='grayscale h-24' src='/nazali.png' alt='nazali' />
            <h2 className='leading-4 font-medium tracking-widest'>Legal</h2>
            <h2 className='leading-4 font-medium tracking-widest'>
              Consultancy
            </h2>
          </div>
          <div>
            <img className='grayscale h-24' src='/parasut.png' alt='parasut' />
            <h2 className='leading-4 font-medium tracking-widest'>
              Online Invoice
            </h2>
            <h2 className='leading-4 font-medium tracking-widest'>Provider</h2>
          </div>
        </div>
        <div className='flex justify-between gap-2 w-8/12 mt-8'>
          <div>
            <div className='h-24'>
              <img className='grayscale w-80' src='/param.png' alt='param' />
            </div>
            <h2 className='leading-4 font-medium tracking-widest'>Payement</h2>
            <h2 className='leading-4 font-medium tracking-widest'>Provider</h2>
          </div>
          <div>
            <img className='grayscale h-24' src='/aws.png' alt='aws' />
            <h2 className='leading-4 font-medium tracking-widest'>Cloud</h2>
            <h2 className='leading-4 font-medium tracking-widest'>Server</h2>
          </div>
          <div>
            <img className='grayscale h-24' src='/twilio.png' alt='twilio' />
            <h2 className='leading-4 font-medium tracking-widest'>SMS</h2>
            <h2 className='leading-4 font-medium tracking-widest'>Provider</h2>
          </div>
        </div>
      </section>

      <section className='mb-10'>
        <div className='flex justify-center items-center gap-6 text-bybikeBlue font-medium text-5xl mb-6'>
          <div className='text-center'>
            <h2>Incubation</h2>
            <h2>Centers</h2>
          </div>
          <h2 className='text-black'>&</h2>
          <div className='text-center'>
            <h2>Accelerator</h2>
            <h2>Programs</h2>
          </div>
        </div>

        <img src="/accelerators.png" className='w-2/3 grayscale mx-auto' alt="accelerators" />
      </section>
    </main>
  );
};

export default page;
