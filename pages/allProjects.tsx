import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Button from '../components/button/Button'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../components/projects'


interface ProjectLineProps{
    id: number,
    title: string,
    codeLink?: string,
    subtitle?: string,
    liveLink?: string
}

const ProjectLine = ({id, title, subtitle, codeLink, liveLink}: ProjectLineProps)=>{
    const [expand, setExpand] = React.useState(false)
            return(
                <div className={`w-[100%] mds:hover:bg-[#212121] ${expand? 'bg-[#212121]': ''} flex flex-col gap-3 mds:gap-5 p-4 mds:pl-6 mds:pr-6  justify-between  `}>
                    <div onClick={()=> setExpand(prev => !prev)} className=' cursor-pointer flex flex-row justify-between items-center'>
                        <div className='text-[1.2rem] font-medium'>{title}</div>
                        <div  className='w-[2.4rem] cursor-pointer justify-end border-[0.16rem] border-[#65C23A]  rounded-[50%]'>
                                <Image src={`/images/${expand? 'arrowUp':'arrowDown'}.png`} alt='arrow' width={128} height={128} priority/>
                        </div>
                    </div>
                    {expand?  
                                    
                                    <motion.div
                                    initial={{ opacity: 0 , y: '-5vh'}}
                                    animate={{ opacity: 1, y: 0}}
                                    exit={{ opacity: 0, y: '-5vh' }}
                                    transition={{ duration: 0.8 }}
                                    className='flex flex-col gap-5 mt-[0.6rem] mds:mt-[-0.2rem]'
                                    >
                                        <div className='text-[#65C32A]'>{subtitle}</div>
                                        <div className='flex flex-row justify-start items-center gap-3'>
                                        <Link className='' href={liveLink? liveLink: codeLink? codeLink: ''} target="_blank"><Button text={liveLink? 'LIVE': 'CODE'} /></Link>
                                        <Link className='' href={`/details/${id}`}><Button text={'DETAILS'} isOutline /></Link>
                                        </div>
                                 </motion.div>: ''}
                    
                    
                    

                </div>
            )
}




const AllProjects = () => {
  return (
    <div className='text-white '>
      <Head>  
        <title>Projects</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600&display=swap" rel="stylesheet" />       
        <link rel="shortcut icon" href="/images/ds6.png" />
        <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1" />
       </Head>
        <div className='flex flex-row mt-4 ml-4 mr-4 justify-between items-center'>
            
            <h1 className='text-center font-semibold text-[1.7rem] '>Projects</h1>
            <Link href='https://github.com/pappitito?tab=repositories' target='_blank' className='flex flex-row items-center gap-2  '>
                <div data-aos="fade-left" data-aos-duration="700"  className='text-[1.3rem] font-bold'>GITHUB</div>
                <Image src='/images/linkMe.png' alt='logo' width={30} height={30} priority />
            </Link>

        </div>
        <div className='flex flex-col mt-[0.5rem] p-4'>
          <Link href='/'><div  className='flex flex-row gap-1 text-white text-[1.2rem] ml-[0rem]  items-center justify-start mt-[-0.5rem] mds:mt-[0.4rem]'>
                <div  className='p-1 mr-1 hover:bg-[#65C23A] cursor-pointer rotate-180 rounded-[50%] border-[0.2rem] border-[#65C23A]'>
                    <Image  src='/images/arrow.png' alt='arrow' width={26} height={26} priority />
                </div>
                <div className='hover:text-[#65C23A] text-[0.95rem] font-medium cursor-pointer'>back</div>
            </div></Link>
            
        </div>
        <div className='flex flex-col justify-center items-center w-[100%] '>
        <div className='flex flex-col justify-center items-center gap-3 w-[90%] max-w-[50rem] mb-[5rem] '>
            {projects? 
                projects.map((project)=>{
                    return(
                        <ProjectLine title={project.title} id={project.id} liveLink={project.livelink} codeLink={project.codeLink} subtitle={project.subtitle}  />
                    )
                })
            :''}

        </div>
        </div>
    </div>
  )
}

export default AllProjects