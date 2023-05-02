import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../button/Button'

export interface Props {
    links?: Links[]
}

 interface Links {
    name: string,
    isButton?: boolean,
    isOutlineButton?: boolean
    onClick?: (e?: React.SyntheticEvent<EventTarget>) => void;
}

const Header = ({links}: Props) => {
  return (
    <div className='flex flex-row justify-between z-[100] p-2 pt-6 pl-4 pr-4'>
      <Link className='flex cursor-pointer ' href='/'>
        
          <div data-aos="fade-right" className='text-[1.4rem] text-[#65C23A] font-semibold mdm:ml-[1rem] '>DEV<span className='text-white'>SNACKS</span></div>
          
        
      </Link>

      <div className='mdm:flex mdm:flex-row hidden items-center gap-[1.5rem] '>
                    {links? links.map((link)=>{
                         return  link.isButton? '' : <div className='text-white cursor-pointer hover:text-[#65C32A]' onClick={link.onClick}
                         >{link.name}</div> 
                       }) : ''}
                 </div>
      
      <div className="flex flex-row z-10 items-center">
                <input type='checkbox' id='menushow' className="peer/checker hidden " />
                <label className="mdm:hidden " htmlFor='menushow'><Image  className='hover:cursor-pointer'  src='/images/menu.png' alt='ig'
                         width={33} height={33} priority/></label>
                <div className='mdm:flex mdm:flex-row hidden items-center gap-[1.5rem] mdm:mr-[1rem]'>
                    {links? links.map((link)=>{
                         return  link.isButton? <div  onClick={link.onClick}>
                             <Button text={link.name} isOutline={link.isOutlineButton} />
                              </div> : '' 
                       }) : ''}
                 </div>
                
                <ul key={0} className=" text-slate-800 mdm:hidden   p-6 w-[100%] mds:w-[50%] h-[100vh] flex flex-col gap-6 items-center align-middle fixed top-[0] right-[-100%] z-100 bg-[#212121] peer-checked/checker:right-0 duration-500 ">
                    <label key={2} className="text-6xl text-white absolute top-[1rem] right-[1rem]   hover:cursor-pointer" htmlFor='menushow'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.8} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </label>
                    <div key={1} className="mt-[4.3rem] flex flex-col justify-center items-center gap-6">
                        {links? links.map(link =>{
                        return(
                            link.isButton? <label htmlFor='menushow' onClick={link.onClick}>
                             <Button text={link.name} isOutline={link.isOutlineButton} />
                              </label> :  
                        
                            <label htmlFor='menushow' onClick={link.onClick} className='hover:scale-110 hover:underline cursor-pointer duration-500 text-center text-white' >{link.name}</label>
                        )
                    }): ''}
                    </div>
                </ul>
                
            </div>
    </div>
  )
}

export default Header