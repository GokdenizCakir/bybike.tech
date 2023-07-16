import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <main>
      <div className='relative'>
        <div className='absolute inset-0 z-40'>
          <h1 className='text-5xl font-semibold text-white text-center mt-32'>
            Plans and Pricing
          </h1>
          <h3 className='text-white text-center mt-3'>
            Choose the best plan for your bussiness.
          </h3>
          <div className='flex gap-16 justify-center h-[36rem] mt-24'>
            <div className='bg-white flex flex-col justify-between rounded-3xl shadow-lg'>
              <div>
                <h2 className='text-3xl text-[#8677dc] font-semibold p-6'>
                  Start
                </h2>
                <hr className='mb-6' />
                <div className='px-6'>
                  <h3 className='underline font-medium mb-4'>
                    Core Software Features
                  </h3>
                  <ul className='flex flex-col gap-2'>
                    <li className='flex items-center gap-2'>
                      <svg
                        width='12'
                        height='11'
                        viewBox='0 0 12 11'
                        fill='none'
                      >
                        <path
                          d='M11 1.87598L4 9.60496L1 6.70659'
                          stroke='#007EFF'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>{' '}
                      <h2>Rider App</h2>
                    </li>
                    <li className='flex items-center gap-2'>
                      <svg
                        width='12'
                        height='11'
                        viewBox='0 0 12 11'
                        fill='none'
                      >
                        <path
                          d='M11 1.87598L4 9.60496L1 6.70659'
                          stroke='#007EFF'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>{' '}
                      <h2>CRM Dashboard</h2>
                    </li>
                    <li>
                      <div className='flex items-center gap-2'>
                        <svg
                          width='12'
                          height='11'
                          viewBox='0 0 12 11'
                          fill='none'
                        >
                          <path
                            d='M11 1.87598L4 9.60496L1 6.70659'
                            stroke='#007EFF'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>{' '}
                        <h2>CMS Dashboard</h2>
                      </div>
                      <li className='list-disc ml-10'>Sales Management</li>
                    </li>
                    <li>
                      <div className='flex items-center gap-2'>
                        <svg
                          width='12'
                          height='11'
                          viewBox='0 0 12 11'
                          fill='none'
                        >
                          <path
                            d='M11 1.87598L4 9.60496L1 6.70659'
                            stroke='#007EFF'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>{' '}
                        <h2>Operation Dashboard & Apps</h2>
                      </div>
                      <li className='list-disc ml-10'>
                        Basic Fleet Management
                      </li>
                    </li>
                  </ul>
                </div>
              </div>

              <Link href='/demo' className='bg-bybikeBlack text-center text-white m-10 rounded-lg py-2 text-xl'>
                Contact Us
              </Link>
            </div>
            <div className='bg-white flex flex-col justify-between rounded-3xl shadow-lg'>
              <div>
                <h2 className='text-3xl text-[#8677dc] font-semibold p-6'>
                  Grow
                </h2>
                <hr className='mb-6' />
                <div className='px-6'>
                  <h3 className='underline font-medium mb-4'>
                    Core Software Features
                  </h3>
                  <ul className='flex flex-col gap-2'>
                    <li className='flex items-center gap-2'>
                      <svg
                        width='12'
                        height='11'
                        viewBox='0 0 12 11'
                        fill='none'
                      >
                        <path
                          d='M11 1.87598L4 9.60496L1 6.70659'
                          stroke='#007EFF'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>{' '}
                      <h2>Rider App</h2>
                    </li>
                    <li className='flex items-center gap-2'>
                      <svg
                        width='12'
                        height='11'
                        viewBox='0 0 12 11'
                        fill='none'
                      >
                        <path
                          d='M11 1.87598L4 9.60496L1 6.70659'
                          stroke='#007EFF'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>{' '}
                      <h2>CRM Dashboard</h2>
                    </li>
                    <li>
                      <div className='flex items-center gap-2'>
                        <svg
                          width='12'
                          height='11'
                          viewBox='0 0 12 11'
                          fill='none'
                        >
                          <path
                            d='M11 1.87598L4 9.60496L1 6.70659'
                            stroke='#007EFF'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>{' '}
                        <h2>CMS Dashboard</h2>
                      </div>
                      <li className='list-disc ml-10'>Sales Management</li>
                      <li className='list-disc ml-10'>Marketing Management</li>
                    </li>
                    <li>
                      <div className='flex items-center gap-2'>
                        <svg
                          width='12'
                          height='11'
                          viewBox='0 0 12 11'
                          fill='none'
                        >
                          <path
                            d='M11 1.87598L4 9.60496L1 6.70659'
                            stroke='#007EFF'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>{' '}
                        <h2>Operation Dashboard & Apps</h2>
                      </div>
                      <li className='list-disc ml-10'>
                        Basic Fleet Management
                      </li>
                    </li>
                  </ul>
                </div>
              </div>

              <Link href='/demo' className='bg-bybikeBlack text-center text-white m-10 rounded-lg py-2 text-xl'>
                Contact Us
              </Link>
            </div>

            <div className='bg-white flex flex-col justify-between rounded-3xl shadow-lg'>
              <div>
                <h2 className='text-3xl text-[#8677dc] font-semibold p-6'>
                  Scale
                </h2>
                <hr className='mb-6' />
                <div className='px-6'>
                  <h3 className='underline font-medium mb-4'>
                    Core Software Features
                  </h3>
                  <ul className='flex flex-col gap-2'>
                    <li className='flex items-center gap-2'>
                      <svg
                        width='12'
                        height='11'
                        viewBox='0 0 12 11'
                        fill='none'
                      >
                        <path
                          d='M11 1.87598L4 9.60496L1 6.70659'
                          stroke='#007EFF'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>{' '}
                      <h2>Rider App</h2>
                    </li>
                    <li className='flex items-center gap-2'>
                      <svg
                        width='12'
                        height='11'
                        viewBox='0 0 12 11'
                        fill='none'
                      >
                        <path
                          d='M11 1.87598L4 9.60496L1 6.70659'
                          stroke='#007EFF'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>{' '}
                      <h2>CRM Dashboard</h2>
                    </li>
                    <li>
                      <div className='flex items-center gap-2'>
                        <svg
                          width='12'
                          height='11'
                          viewBox='0 0 12 11'
                          fill='none'
                        >
                          <path
                            d='M11 1.87598L4 9.60496L1 6.70659'
                            stroke='#007EFF'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>{' '}
                        <h2>CMS Dashboard</h2>
                      </div>
                      <li className='list-disc ml-10'>
                        Extended Sales Management
                      </li>
                      <li className='list-disc ml-10'>Marketing Management</li>
                    </li>
                    <li>
                      <div className='flex items-center gap-2'>
                        <svg
                          width='12'
                          height='11'
                          viewBox='0 0 12 11'
                          fill='none'
                        >
                          <path
                            d='M11 1.87598L4 9.60496L1 6.70659'
                            stroke='#007EFF'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>{' '}
                        <h2>Operation Dashboard & Apps</h2>
                      </div>
                      <li className='list-disc ml-10'>
                        Extended Fleet Management
                      </li>
                      <li className='list-disc ml-10'>Workforce Management</li>
                      <li className='list-disc ml-10'>
                        Supply Chain Management
                      </li>
                      <li className='list-disc ml-10'>Warehouse Management</li>
                    </li>
                  </ul>
                </div>
              </div>

              <Link href='/demo' className='bg-bybikeBlack text-center text-white m-10 rounded-lg py-2 text-xl'>
                Contact Us
              </Link>
            </div>
          </div>
          <section className='flex flex-col items-center pt-28'>
            <h2 className='text-4xl font-semibold'>
              <span className='text-[#8677DC]'>Calculate</span> Revenue
            </h2>
            <h4>Predict your company's revenue just by typing numbers</h4>
            <div className='mt-12 bg-bybikeBlack w-5/12 rounded-[2rem] px-24 py-12 text-white'>
              <h2 className='text-4xl text-center font-medium'>COMING SOON</h2>
              <h4 className='text-center text-sm font-light mt-1'>
                Notify Me When It's Ready
              </h4>
              <div className='flex h-12 items-center mt-12 justify-center rounded-md overflow-hidden'>
                <input
                  type='text'
                  placeholder='Enter a valid e-mail address'
                  className='focus:outline-none text-black px-4 w-3/5 h-full text-sm'
                />
                <button className='bg-[#8677DC] h-full px-4 text-white'>
                  NOTIFY ME
                </button>
              </div>
            </div>
          </section>
        </div>

        <div className='bg-bybikeBlack h-[40rem]'></div>
        <div className='relative flex items-end overflow-hidden h-screen bg-white'>
          <div className='bg-[#26C2FA] w-2/3 -mb-48 aspect-square blur-[8rem] rounded-[50%]'></div>
          <div className='bg-[#F33EE7] w-2/3 -mb-56 -mr-56 aspect-square blur-[8rem] rounded-[50%]'></div>
          <div className='bg-[#F33] w-2/3 -mb-48 -mr-32 aspect-square blur-[8rem] rounded-[50%]'></div>
        </div>
      </div>
    </main>
  );
};

export default page;
