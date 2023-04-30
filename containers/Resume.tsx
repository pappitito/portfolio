import React from 'react'
import Button from '../components/button/Button'
import Image from 'next/image'


interface Props{
    myRef: React.RefObject<HTMLDivElement>
}
interface Point{
    point: string
}

const BulletPoint = ({point}: Point)=>{
    return(
        <div className='flex flex-row gap-3 items-start'>
            <div className='min-w-[0.6rem] min-h-[0.6rem]  bg-white rounded-[50%] mt-[0.5rem]'> </div>
            <div className='text-[0.96rem] mds:text-[1rem] leading-6'>{point}</div>
        </div>
    )
}

const achievments = [
    'Gained valuable skills in web development and real-world project experience. ',
    `Assisted in developing the front-end interface using NextJS, Tailwind, and Typescript. `,
     `Worked using front-end design libraries such as Ant design, and framer motion. `,
     `Implemented data visualization for the dashboard of one of the products, enabling users to have broader
     insights into their transactions`,
     `Created landing pages describing the features of our products.`,
     `Wrote back-end code using Node.js and Express.js.`,
     `Implemented RESTful API using Node.js and Express.js with MongoDB as the database.`,
     `Created customized QR code generator API for payment of transactions using QR.`,
     `Assisted in the deployment of API on AWS.`
]

const Resume = ({myRef}: Props) => {
  return (
    <div data-aos='zoom-in' ref={myRef} className='mt-[4rem] mb-[4rem] text-white' >
        <div  className='mdm:text-[2.8rem] text-center mds:text-left p-4 mds:ml-[2rem]  text-white text-[2rem] font-semibold tracking-tighter'>
            Resume
            <div className='text-[#65C23A] mt-[-0.5rem] tracking-normal text-[1.1rem]'>EXPERIENCE AND EDUCATION</div>
        </div>
        <div className='mt-[4rem] mds:ml-[1rem] p-2 mds:p-[1.5rem] mdm:p-[2rem]'>
            <div data-aos='fade-right' className='flex justify-start font-semibold mds:text-[1.15rem] text-[0.96rem] tracking-tight'>Education</div>
            <div data-aos='slide-up' className='flex flex-row mt-[1.5rem] mds:ml-[0.9rem] mdm:ml-[1.5rem] lgm:ml-[3.3rem] lgm:mr-[2.3rem] items-start justify-between'>
                
                <div className='flex flex-row items-center mds:gap-4 gap-2'>
                    <div className='mds:w-[0.9rem] mds:h-[0.9rem] w-[0.85rem] h-[0.85rem] mt-3  rounded-[50%] bg-[#65C23A]'> </div>
                    <div>
                        <h2 className='mds:text-[1.3rem] w-[11.5rem] mds:w-[14rem] text-[1.12rem] font-semibold tracking-tight'>Covenant University</h2>
                        <div className='text-[0.8rem]'>Ota, Ogun State, Nigeria</div>
                    </div>
                </div>
                <h2 className='mds:text-[1.3rem] text-[0.8rem] text-right leading-6  font-semibold tracking-tight'>Sep 2017 - Jul 2022</h2>
            </div>
            <div data-aos='fade-down'  className='flex flex-col border-l-[0.1rem] border-white p-5 pb-0 ml-[0.39rem] lgm:ml-[3.6rem] lgm:mr-[2rem] mds:ml-[1.28rem]  mdm:ml-[1.8rem] '>
                <div className='text-[#65C23A] text-[0.9rem] mds:text-[1rem]'>{'Electrical and Electronics Engineering (First class honors)'}</div>
                <div className='mt-[1.5rem] text-[0.95rem]'>
                <span className='font-semibold text-[0.96rem] mds:text-[1rem] leading-6'>Related Courses:</span> Project management,  Data analytics,  Probability and Statistics,  Artificial 
                    Neural Networks,  Research methodology,  Circuit Analysis, power Generation, Introduction
                    to C/C++ programming, Physical Electronics, Industrial Electronics, 
                    Digital Communication Systems, Control Systems.
                </div>
            </div>
        </div>

        <div className='mt-[1.5rem] mds:ml-[1rem] p-2 mds:p-[1.5rem] mdm:p-[2rem]'>
            <div data-aos='fade-right' className='flex justify-start font-semibold mds:text-[1.15rem] text-[0.96rem] text-[#65C23A] tracking-tight'>Experience</div>
            <div data-aos='slide-up' className='flex flex-row mt-[1.5rem] mds:ml-[0.9rem] mdm:ml-[1.5rem] lgm:ml-[3.3rem] lgm:mr-[2.3rem] items-start justify-between'>
                
                <div className='flex flex-row items-center mds:gap-4 gap-2'>
                    <div className='mds:w-[0.9rem] mds:h-[0.9rem] w-[0.85rem] h-[0.85rem] mt-3  rounded-[50%] bg-[#65C23A]'> </div>
                    <div>
                        <h2 className='mds:text-[1.3rem] w-[6rem] mds:w-[8rem] text-[1.12rem] font-semibold tracking-tight'>Blinqpay</h2>
                        <div className='text-[0.8rem] w-[10rem]'>Lekki, Lagos State, Nigeria</div>
                    </div>
                </div>
                <h2 className='mds:text-[1.3rem] text-[0.8rem] text-right leading-6  font-semibold tracking-tight'>Jan 2023 - Present</h2>
            </div>
            <div data-aos='fade-down' className='flex flex-col border-l-[0.1rem] border-white p-5 pb-0 ml-[0.39rem] lgm:ml-[3.6rem] lgm:mr-[2rem] mds:ml-[1.28rem]  mdm:ml-[1.8rem] '>
                <div className='text-[#65C23A] text-[0.9rem] mds:text-[1rem]'>{'Software Engineering Intern'}</div>
                <div className='mt-[1.5rem] flex flex-col gap-2 text-[0.95rem]'>{achievments.map((item)=>{
                        return(
                            <BulletPoint point={item} />
                        )
                    })}</div>
            </div>
        </div>
        <div className='flex justify-end mr-[1.5rem] mds:mr-[2.5rem] lgm:mr-[3.2rem]'>
            <div className='mdm:w-[8rem] w-[8rem] mt-8'>
               <Button text={'VIEW CV'} isOutline onClick={() => window.open("/files/TitoCV.pdf", "_blank")} />
            </div>
        </div>
        <div className='mds:ml-[7rem] ml-[3.6rem] mt-[2rem] mdm:mt-[3.7rem]'>
          <Image className='' src='/images/blocks.png' alt='blocks' width={40} height={40} priority /> 
        </div>
    </div>
  )
}

export default Resume