import React from 'react'
import { useRouter } from 'next/router'

import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Button from '../../components/button/Button'
import { projects } from '../../components/projects'




const Detail = () => {

const router = useRouter()
const {id} = router.query
const postId = typeof id === 'string' ? parseInt(id, 10) : null
console.log(postId);


const [scrollPosition, setScrollPosition] = React.useState(0);





  return (
    <div className='mt-[0rem]'>
        <Head>
        <title>Details</title>
        <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1" />
        <link rel="shortcut icon" href="/images/ds6.png" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600&display=swap" rel="stylesheet" />       
        </Head>
        <Link className='flex mt-4 ml-4 cursor-pointer ' href='/'>
        
        <div data-aos="fade-right" className='text-[1.4rem] text-[#65C23A] font-semibold mdm:ml-[1rem] '>DEV<span className='text-white'>SNACK</span></div>
        
      
    </Link>
        <div onClick={() =>  window.history.back()}><div  className='flex flex-row gap-1 text-white text-[1.2rem] ml-3  items-center justify-start mt-[1.5rem]'>
                <div  className='p-1 mr-1 hover:bg-[#65C23A] cursor-pointer rotate-180 rounded-[50%] border-[0.2rem] border-[#65C23A]'>
                    <Image  src='/images/arrow.png' alt='arrow' width={26} height={26} priority />
                </div>
                <div className='hover:text-[#65C23A] text-[0.95rem] font-medium cursor-pointer'>back</div>
            </div></div>
        {projects? projects.map((project)=>{
            if( postId === project.id){
                return(
                    <div  className='flex flex-col text-white items-center p-4'>
                        <div className='text-[1.6rem] text-center mt-[-0.5rem] text-white font-semibold'>{project.title}</div>
                        <div className=' w-[80%] mds:w-[50%] max-w-[33rem] mt-[1rem] border-white border-[0.2rem]'>
                            <Image src={project.img} alt='screenshot' width={600} height={500} priority  />
                        </div>
                        <p className='mt-[2rem] w-[90%] text-justify mds:w-[75%] max-w-[44rem]'>{project.details}</p>
                        <div className='flex flex-row mb-[2rem]'>
                            <div className='flex flex-wrap gap-[1rem] w-[100%] mt-[2rem] justify-center items-center '>
                               <Link className='w-[7.2rem]' href={project.livelink? project.livelink: project.codeLink? project.codeLink: ''} target='_blank'><Button text={project.livelink? 'VIEW LIVE': 'VIEW CODE'} /></Link>
                            <div className='w-[6rem]'><Link href={`/details/${id}`}><Button text={'GITHUB'} isOutline /></Link></div>
                           </div>
                        </div>
                        
                    </div>
                    
                 )
            }
          
           

        }): ''}

    </div>
  )
}

export default Detail