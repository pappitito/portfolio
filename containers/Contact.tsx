import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/button/Button'


interface Props{
    myRef: React.RefObject<HTMLDivElement>
}

const Contact = ({myRef}: Props) => {
  return (
    <div ref={myRef} className='text-white mt-2 mb-[3rem] '>
        
        <div data-aos="zoom-out" className='mdm:text-[2.8rem] text-center  p-4 mds:ml-[2rem] mt-[4rem]  text-white text-[2rem] font-semibold tracking-tighter'>
            Contact
            <div className='text-[#65C23A] mt-[-0.5rem] tracking-normal text-[1.1rem]'>get in touch with me</div>
        </div>
        <div className='flex flex-col items-center mdm:flex-row mt-[2rem] gap-[2rem] p-4 mdm:items-start justify-center'>
            <div className='mdm:flex grid grid-cols-2 mdm:flex-col gap-4'>
                <div data-aos="flip-right" className='pl-[1rem] pr-[1rem] mds:pl-[2rem] max-w-[17rem] mds:pr-[2rem] h-[13rem]  flex flex-col gap-4 items-center justify-center bg-[#212121]'>
                    <div><Image src='/images/location.png' alt='address' width={40} height={40}/></div>
                    <div className='text-center text-[0.96rem] '>6b serene court, Adebayo doherty, Lekki phase 1</div>
                </div>
                <div data-aos="flip-right" className='pl-[1rem] pr-[1rem] mds:pl-[2rem] break-words max-w-[17rem] mds:pr-[2rem] h-[13rem]  flex flex-col gap-4 items-center justify-center bg-[#212121]'>
                    <div><Image src='/images/email.png' alt='address' width={40} height={40}/></div>
                    <div className='text-center text-[0.96rem] max-w-[7rem]  mds:max-w-[100%]  '>titonwudinjo@gmail.com</div>
                </div>
                <div data-aos="flip-right" className='pl-[1rem] pr-[1rem] mds:pl-[2rem] max-w-[17rem] mds:pr-[2rem] h-[13rem]  flex flex-col gap-4 items-center justify-center bg-[#212121]'>
                    <div><Image src='/images/telephone.png' alt='address' width={40} height={40}/></div>
                    <div className='text-center text-[0.96rem]  '>+234 814 074 8658</div>
                </div>
                <div data-aos="flip-right" className='pl-[1rem] pr-[1rem] mds:pl-[2rem] max-w-[17rem] mds:pr-[2rem] h-[13rem]  flex flex-col gap-4 items-center justify-center bg-[#212121]'>
                    <div><Image src='/images/verified.png' alt='address' width={40} height={40}/></div>
                    <div className='text-center text-[0.96rem] '>Freelance available</div>
                </div>
                

            </div>
            <div data-aos="slide-up" className='flex flex-col items-center gap-4 mdm:gap-[3rem] mdm:pt-[3rem] h-[100%] w-[100%] mdm:w-[70%] max-w-[35rem] bg-[#212121] p-[1.1rem] mds:p-[2rem] '>
                <div className='flex flex-col w-[100%] gap-[1rem] mds:flex-row'>
                    <input className='text-[1rem] p-[0.8rem] w-[100%] mds:w-[50%] bg-black outline-none focus:outline-none' type="text" placeholder='Enter your name' />
                    <input className='text-[1rem] p-[0.8rem] w-[100%] mds:w-[50%] bg-black outline-none focus:outline-none' type="text" placeholder='Enter your email' />
                </div>
                <div className='h-[20rem] mdm:h-[38.52rem] w-[100%]  break-words'>
                    <textarea className='text-[1rem] p-[0.8rem] w-[100%] h-[100%] bg-black outline-none focus:outline-none' placeholder='Enter your message'></textarea>
                </div>
                <Button text={'SEND'} />
            </div>

        </div>

        <div className='mt-[5rem] flex flex-col gap-5 items-center justify-center'>
            <div className='text-[#65C23A] font-semibold text-[0.9rem]'>Connect with me on social media</div>
            <div className='flex flex-row gap-4'>
                <Link href=''><Image src='/images/linkedin.png' alt='social' width={36} height={36}/></Link>
                <Link href=''><Image src='/images/twitter.png' alt='social' width={36} height={36}/></Link>
                <Link href=''><Image src='/images/instagram.png' alt='social' width={36} height={36}/></Link>
                <Link href=''><Image src='/images/whatsapp.png' alt='social' width={36} height={36}/></Link>
            </div>
        </div>
    </div>
  )
}

export default Contact