import Image from 'next/image'
import React from 'react'

const Myfooter = () => {
  return (
    <div className='flex flex-col text-white p-4 gap-0 items-center mb-2 justify-center mt-[4rem]'>
      <div className='text-[0.9rem] tracking-tight'>A portfolio by</div>
       <div className='text-[1.2rem] text-[#65C23A] font-semibold  '>DEV<span className='text-white'>SNACK</span></div> 
       <div className='text-[0.9rem] tracking-tight'>Developed by Tito Onwudinjo</div>
       <div className='flex flex-row items-center mt-[3rem] justify-center gap-1'>
            <Image className='' src='/images/copyright.png' width={20} height={20} alt='copyright' />
            <div className='text-white text-center p-0 text-[0.8rem]'>DevSnack by Tito All rights reserved  2023.</div>

       </div>
    </div>
  )
}

export default Myfooter