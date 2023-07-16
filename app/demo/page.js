'use client';
import React, { useState } from 'react';

const page = () => {
  const [selected, setSelected] = useState([]);

  const handleClick = (vehicle) => {
    let copy = [...selected];
    if (copy.includes(vehicle)) {
      copy = copy.filter((item) => item !== vehicle);
      setSelected(copy);
    } else {
      copy.push(vehicle);
      setSelected(copy);
    }
  };

  return (
    <main className='bg-[url(/demo_background.png)] tracking-widest bg-cover flex justify-center p-24'>
      <div className='bg-bybikeBlack shadow-2xl rounded-xl text-white px-12 py-16'>
        <h2 className='text-4xl mb-10'>
          Let's Get <span className='text-bybikeBlue'>Going.</span>
        </h2>
        <div className='flex gap-6 mb-10'>
          <div>
            <h2>
              First Name<span className='text-red-500'>*</span>
            </h2>
            <input
              type='text'
              className='bg-[#EAEAEA]/20 w-56 focus:outline-none rounded-md p-1 px-2'
            />
          </div>
          <div>
            <h2>
              Last Name<span className='text-red-500'>*</span>
            </h2>
            <input
              type='text'
              className='bg-[#EAEAEA]/20 w-56 focus:outline-none rounded-md p-1 px-2'
            />
          </div>
        </div>
        <div className='flex gap-6 mb-10'>
          <div>
            <h2>
              City<span className='text-red-500'>*</span>
            </h2>
            <input
              type='text'
              className='bg-[#EAEAEA]/20 w-56 focus:outline-none rounded-md p-1 px-2'
            />
          </div>
          <div>
            <h2>
              Country<span className='text-red-500'>*</span>
            </h2>
            <input
              type='text'
              className='bg-[#EAEAEA]/20 w-56 focus:outline-none rounded-md p-1 px-2'
            />
          </div>
        </div>
        <div className='mb-10'>
          <h2>
            How many vehicles will you start with?
            <span className='text-red-500'>*</span>
          </h2>
          <input
            type='text'
            className='bg-[#EAEAEA]/20 w-full focus:outline-none rounded-md p-1 px-2'
          />
        </div>
        <div className='flex gap-6 mb-10'>
          <div>
            <h2>
              Email<span className='text-red-500'>*</span>
            </h2>
            <input
              type='text'
              className='bg-[#EAEAEA]/20 w-56 focus:outline-none rounded-md p-1 px-2'
            />
          </div>
          <div>
            <h2>
              Phone Number<span className='text-red-500'>*</span>
            </h2>
            <input
              type='text'
              className='bg-[#EAEAEA]/20 w-56 focus:outline-none rounded-md p-1 px-2'
            />
          </div>
        </div>
        <div className='mb-10'>
          <h2>
            Describe the stage you are currently in
            <span className='text-red-500'>*</span>
          </h2>
          <input
            type='text'
            className='bg-[#EAEAEA]/20 w-full focus:outline-none rounded-md p-1 px-2'
          />
        </div>
        <div className='mb-10'>
          <h2 className='mb-2'>
            Which types of vehicle are you interested in?
            <span className='text-red-500'>*</span>
          </h2>
          <button
            onClick={() => handleClick('E-Scooter')}
            className={`${
              selected.includes('E-Scooter')
                ? 'bg-bybikeBlue'
                : 'bg-[#EAEAEA]/20'
            } w-56 flex justify-start pl-2 py-1 mb-1 rounded-md`}
          >
            E-Scooter
          </button>
          <button
            onClick={() => handleClick('E-Bike')}
            className={`${
              selected.includes('E-Bike') ? 'bg-bybikeBlue' : 'bg-[#EAEAEA]/20'
            } w-56 flex justify-start pl-2 py-1 mb-1 rounded-md`}
          >
            E-Bike
          </button>
          <button
            onClick={() => handleClick('Mix')}
            className={`${
              selected.includes('Mix') ? 'bg-bybikeBlue' : 'bg-[#EAEAEA]/20'
            } w-56 flex justify-start pl-2 py-1 mb-1 rounded-md`}
          >
            Mix
          </button>
        </div>
        <div className='mb-10'>
          <h2>Tell us more about your business</h2>
          <textarea
            rows={3}
            className='bg-[#EAEAEA]/20 w-full resize-none focus:outline-none rounded-md p-1 px-2'
          ></textarea>
        </div>
        <img src='/recaptcha.png' className='w-56 mb-10' alt='recaptcha' />
        <button className='bg-bybikeRed text-sm px-6 py-3 rounded-md'>SUBMIT</button>
      </div>
    </main>
  );
};

export default page;
