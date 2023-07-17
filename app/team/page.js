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
            <div className='w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-4'>
              <img src='/picture_burak.png' alt='BURAK' />
            </div>
            <h2 className='font-medium'>Burak Karataş</h2>
            <h3>Chief Executive Officer</h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-4'>
              <img src='/picture_emre.png' alt='EMRE' />
            </div>
            <h2 className='font-medium'>Emre Aslan</h2>
            <h3>Chief Technical Officer</h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-4'>
              <img src='/picture_emir.png' alt='EMIR' />
            </div>
            <h2 className='font-medium'>Emir Murad Seymen</h2>
            <h3>Chief Design Officer</h3>
          </div>
        </div>
        <div className='bg-[#F5F5F5] flex justify-center gap-32 py-10 mt-24'>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-4'>
              <img src='/picture_eren.png' alt='EREN' />
            </div>
            <h2 className='font-medium'>Eren Dağsuyu</h2>
            <h3>Chief Operation Officer</h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-4'>
              <img src='/picture_emre_h.png' alt='EMRE HARBUT' />
            </div>
            <h2 className='font-medium'>Emre Harbutoğlu</h2>
            <h3>Software Team Lead</h3>
          </div>
        </div>
      </section>
      <section>
        <h2 className='tracking-wider text-center mt-14 text-4xl font-medium'>
          TEAM
        </h2>
        <hr className='border border-bybikeRed' />
        <div className='bg-[#F5F5F5] flex justify-center gap-32 py-10 mt-24'>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-4'>
              <img src='/picture_selin.png' alt='SELIN' />
            </div>
            <h2 className='font-medium'>Selin Lochner</h2>
            <h3>Industrial Designer</h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-4'>
              <img src='/picture_emir_c.png' alt='EMIR CANTAY' />
            </div>
            <h2 className='font-medium'>Emir Canatay</h2>
            <h3>Industrial Designer</h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-4'>
              <img src='/picture_hilal.png' alt='HILAL' />
            </div>
            <h2 className='font-medium'>Hilal Bayrakdar</h2>
            <h3>Industrial Designer intern</h3>
          </div>
        </div>
        <div className='bg-[#F5F5F5] flex justify-center gap-32 py-10 mt-24'>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-4'>
              <img src='/picture_berkay.png' alt='BERKAY' />
            </div>
            <h2 className='font-medium'>Berkay Şenyüz</h2>
            <h3>Content Management Specialist</h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-4'>
              <img src='/picture_ata.png' alt='ATA' />
            </div>
            <h2 className='font-medium'>Ata Çorumluoğlu</h2>
            <h3>Mechanical Engineer</h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-4'>
              <img src='/picture_cagan.png' alt='CAGAN' />
            </div>
            <h2 className='font-medium'>Çağan Kutlay</h2>
            <h3>Jr. Mechanical Engineer</h3>
          </div>
        </div>
        <div className='bg-[#F5F5F5] flex justify-center gap-32 py-10 mt-24'>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-4'>
              <img src='/picture_egehan.png' alt='EGEHAN' />
            </div>
            <h2 className='font-medium'>Egehan Ceylan</h2>
            <h3>Electronic Design Intern</h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-4'>
              <img src='/picture_tolga.png' alt='TOLGA' />
            </div>
            <h2 className='font-medium'>Tolga Selimoğlu</h2>
            <h3>Jr. Mechatronics Engineer</h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-4'>
              <img src='/picture_abdullah.png' alt='ABDULLAH' />
            </div>
            <h2 className='font-medium'>Abdullah Belikırık</h2>
            <h3>Embedded Developer</h3>
          </div>
        </div>
        <div className='bg-[#F5F5F5] flex justify-center gap-32 py-10 mt-24'>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-4'>
              <img src='/picture_javad.png' alt='JAVAD' />
            </div>
            <h2 className='font-medium'>Javad Khalilov</h2>
            <h3>Mobile Developer</h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-4'>
              <img src='/picture_vusal.png' alt='VUSAL' />
            </div>
            <h2 className='font-medium'>Vusal İsmayilov</h2>
            <h3>Backend Developer</h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-4'>
              <img src='/picture_gokdeniz.png' alt='GOKDENIZ' />
            </div>
            <h2 className='font-medium'>Gökdeniz Çakır</h2>
            <h3>Frontend Developer</h3>
          </div>
        </div>
        <div className='bg-[#F5F5F5] flex justify-center gap-32 py-10 my-24'>
          <div className='flex flex-col items-center'>
            <div className='w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-4'>
              <img src='/picture_atakan.png' alt='ATAKAN' />
            </div>
            <h2 className='font-medium'>Atakan Arslan</h2>
            <h3>Mobile Developer</h3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
