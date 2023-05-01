import Image from 'next/image'
import React from 'react'
import  AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS file


interface Props{
    myRef: React.RefObject<HTMLDivElement>
}

const FirstPage = ({myRef}: Props) => {

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 100,
      delay: 100,
      once: false,
    
    });
  }, []);
  
  return (
    <div  ref={myRef} className='flex relative mt-[1rem] mb-[38rem]   mds:mb-[50rem] lgm:mb-[46rem]  flex-col  gap-0 w-[100%] h-[00%] p-4   '>

       <div className='flex mt-[-4rem]  flex-row items-baseline'>
            <div data-aos="fade-right" data-aos-duration="1200" className='z-[2] absolute top-[400%] mdm:top-[200%] pt-[10rem] ml-[-0.6rem] mdm:pl-[3rem]' >
                <div className='mdm:text-[9rem] mds:text-[5rem] text-[3.7rem] text-[#f3f1f1] font-semibold tracking-tighter  '>Tito</div>
                <div className='mdm:text-[9rem] mt-[-1.5rem] mds:text-[5rem] text-[3.7rem] text-[#f3f1f1] mdm:mt-[-5rem] font-semibold tracking-tighter'>Onwudinjo</div>
                <div className='mdm:text-[2rem] ml-[0.4rem] mt-[-0.3rem] mds:text-[1.4rem] text-[1.2rem] text-[#65C23A] mdm:mt-[-2rem] font-semibold tracking-tighter'>Budding full stack developer</div>
            </div>
            <div data-aos="fade-left" data-aos-duration="1200" className='absolute flex justify-end top-[100%]  mds:top-[0%] right-[1rem] md:right-[10rem] lg:right-[12rem] md:w-[49%]  mdm:pr-[6rem] max-w-[48rem]'>
                <Image className='z-[-2]' src='/images/titoImg2.jpg' alt='tito' width={862} height={890} priority />
            </div>
            <div data-aos="fade-down" data-aos-duration="1200" className='absolute top-[8rem] right-[4rem] mdm:top-[7rem] mdm:right-[8rem] '>
            <Image className='z-[-1] mdm:w-[110%] w-[70%]' src='/images/blocks.png' alt='blocks' width={60} height={60} priority />
            </div>
       </div>
    </div>
  )
}

export default FirstPage