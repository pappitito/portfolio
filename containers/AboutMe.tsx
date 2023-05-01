import React from 'react'
import Button from '../components/button/Button'
import Image from 'next/image'
import  AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS file

interface Props{
    myRef: React.RefObject<HTMLDivElement>
}



const AboutMe = ({myRef}: Props) => {

   

  return (
    <div  ref={myRef} className='text-white  w-[100%]  p-6 mdm:pl-[4rem] mdm:pr-[4rem] '>
        <div data-aos="zoom-out" data-aos-duration="800" className=' w-[100%] flex flex-col border-t-[0.2rem] border-t-[#65C23A]'>
            <div>
                <div className='flex flex-row gap-[2rem] w-[100%] mt-[5rem] justify-end'>
                    <div className='hidden mdm:flex-col mdm:flex  h-[100%] items-center '>
                        <Image className='mt-[8rem]' src='/images/profiler.png' alt='pin' width={260} height={140}  />
                    </div>
                    <div className='flex flex-col w-[100%] mdm:ml-[5rem] mdm:w-[50%]'>
                         <h2 className='text-center mdm:text-[2.8rem] text-[2rem] font-semibold tracking-tighter'>About me</h2>
                          <div className='mt-[2rem] mds:text-justify tracking-tight text-[1rem] mds:text-[1.15rem]  leading-[2rem]'>
                          As a goal-oriented, detail-oriented, and creative thinker, I understand the importance of setting clear objectives
                           and working hard to achieve them. I continuously establish 
                           achievable targets for myself, striving to maintain a consistent
                            level of motivation and self-discipline. With my keen eye for detail, 
                            I'm able to deliver high-quality work and identify potential problems or
                             issues that may arise, taking proactive measures to prevent them from occurring. <br></br>
                            <p className='mt-[1rem]'>Furthermore, I possess a strong creative thinking ability,
                             allowing me to approach problems in innovative ways and 
                             explore new ideas and strategies. This skill is particularly essential in today's rapidly
                              changing world, where identifying opportunities and practical solutions requires a different
                               approach. By combining my creative thinking with my goal-oriented and detail-oriented mindset, 
                               I'm able to produce practical and effective solutions that deliver results, making me a valuable 
                               asset to any team or organization. I'm always eager to learn and grow, committed to making a 
                               positive impact wherever I find myself.</p></div>
                         <div className='flex flex-row mt-4 gap-8'>
                             <div className='flex flex-col items-center'>
                                 <div data-aos="flip-down" className='text-[3rem] font-bold'>6+</div>
                                 <div data-aos="flip-left" className='text-[0.8rem] text-center text-[#65C23A]'>MONTHS OF EXPERIENCE</div>
                             </div>
                             <div className='flex flex-col items-center'>
                                 <div data-aos="flip-down" className='text-[3rem] font-bold'>10+</div>
                                 <div data-aos="flip-left" className='text-[0.8rem] text-center text-[#65C23A]'>PROJECTS EXECUTED</div>
                             </div>

                         </div>
                     </div>
                </div>
                <div className='flex flex-col mdm:w-[40%] mt-[3rem]'>
                    <div className='w-[12%] '>
                        <Image className='flex rotate-[270deg] mb-2' src='/images/pin.png' alt='pin' width={50} height={50}  />
                    </div>
                    <div data-aos="fade-right" className='mdm:text-[2rem] text-[1.3rem] font-semibold'>Trustworthy, Creative and Dedicated to 
                        <span data-aos="fade-left" className='text-[#65C23A]'> delivering on time</span></div>
                        <div className='mdm:w-[8rem] w-[8rem] mt-8'>
                        <Button text={'VIEW CV'} isOutline onClick={() => window.open("/files/TitoCV.pdf")}/>
                        </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe