import React from 'react';

const page = () => {
  return (
    <main>
      {/* TITLE */}
      <section className='bg-bybikeBlack text-white flex flex-col gap-2 justify-center items-center h-80'>
        <h1 className='text-6xl font-medium'>
          <span className='text-bybikeBlue'>OUR</span> TEAM
        </h1>
        <h3 className='italic text-xl tracking-widest'>
          Young and determined, with one goal in mind.
        </h3>
      </section>

      <section>
        <h2 className='tracking-wider text-center mt-14 text-4xl font-medium'>
          LEADS
        </h2>
        <hr className='border border-bybikeBlue mt-4 mb-14' />
        <div className='bg-[#F5F5F5] justify-center gap-32 flex py-10'>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square bg-[#585858] mb-4'></div>
            <h2>Burak Karataş</h2>
            <h3>Chief Executive Officer</h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square bg-[#585858] mb-4'></div>
            <h2>Emre Arslan</h2>
            <h3>Chief Technical Officer</h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square bg-[#585858] mb-4'></div>
            <h2>Emir Murad Seymen</h2>
            <h3>Chief Design Officer</h3>
          </div>
        </div>
        <div className='bg-[#F5F5F5] flex justify-center gap-32 py-10 mt-32'>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square bg-[#585858] mb-4'></div>
            <h2>Eren Dağsuyu</h2>
            <h3>Chief Operation Officer</h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square bg-[#585858] mb-4'></div>
            <h2>Emre Harbutoğlu</h2>
            <h3>Software Team Lead</h3>
          </div>
        </div>
      </section>
      <section>
        <h2 className='tracking-wider text-center mt-14 text-4xl font-medium'>
          TEAM
        </h2>
        <hr className='border border-bybikeRed' />
        <div className='bg-[#F5F5F5] flex justify-center gap-32 py-10 mt-32'>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square bg-[#585858] mb-4'></div>
            <h2>Selin Lochner</h2>
            <h3>Industrial Designer</h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square bg-[#585858] mb-4'></div>
            <h2>Emir Cantay</h2>
            <h3>Industrial Designer</h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square bg-[#585858] mb-4'></div>
            <h2>Hilal Bayrakdar</h2>
            <h3>Industrial Designer intern</h3>
          </div>
        </div>
        <div className='bg-[#F5F5F5] flex justify-center gap-32 py-10 mt-32'>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square bg-[#585858] mb-4'></div>
            <h2>Berkay Şengüz</h2>
            <h3>Content Management Specialist</h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square bg-[#585858] mb-4'></div>
            <h2>Ata Çorumluoğlu</h2>
            <h3>Mechanical Engineer</h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square bg-[#585858] mb-4'></div>
            <h2>Çağan Bayrakdar</h2>
            <h3>Industrial Designer intern</h3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
