import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/button/Button'
import { projects } from '../components/projects'


interface Props{
    myRef: React.RefObject<HTMLDivElement>
}

interface ProjectProp{
    id: number,
    img: string,
    title: string,
    subtitle?: string,
    liveLink?: string,
}

const ProjectCard = ({id, img, title, subtitle, liveLink}: ProjectProp) => {
    return(
        <div data-aos="fade-right" data-aos-duration="700"  className='bg-[#212121] flex flex-col p-8 gap-6 items-center justify-center w-[19rem] h-[27rem]'>
            <div className='border-[0.2rem] border-white'>
                <Image src={img} alt='screenshot' width={260} height={160} priority />
            </div>
            <h2 className='text-[1.2rem] font-semibold'>{title}</h2>
            <div className=''>{subtitle}</div>
            <div className='flex flex-wrap gap-[1rem] w-[100%]  justify-center items-center '>
                <Link className='w-[6.9rem]' href={liveLink? liveLink: ''} target="_blank"><Button text={'VIEW LIVE'} /></Link>
                <div className='w-[6rem]'><Link href={`/details/${id}`}><Button text={'DETAILS'} isOutline /></Link></div>
            </div>

        </div>
    )
}



const Portfolio = ({myRef}: Props) => {
  return (
    <div data-aos="fade-down" ref={myRef} className='flex flex-col mt-[6rem] p-[1rem] text-white' >
        <div>
            <h2 className='text-[2rem] mdm:text-[2.8rem] mds:ml-[2rem] font-semibold tracking-tighter text-center mds:text-left text-[#65C23A]'>Featured <span className='text-white'>works and projects</span></h2>
            <Link href='https://github.com/pappitito?tab=repositories' target='_blank' className='flex flex-row items-center gap-2 mt-8 justify-end mr-[1.5rem]'>
                <div data-aos="fade-left" data-aos-duration="700"  className='text-[1.3rem] font-bold'>GITHUB</div>
                <Image src='/images/linkMe.png' alt='logo' width={30} height={30} priority />
            </Link>
            <div className='flex flex-wrap items-center justify-center gap-6 mt-[2rem]'>
                {projects.map((project)=>{
                    if(project.id < 4){
                        return(
                            <ProjectCard id={project.id} img={project.img} title={project.title} subtitle={project.subtitle} liveLink={project.livelink} />
                        )
                    }
                    else{
                        return ''
                    }
                })}
            
            </div>
            <Link href='/allProjects' className='flex flex-row gap-5 text-[1.2rem]  items-center justify-end mt-[3rem]'>
                <div className='hover:text-[#65C23A] cursor-pointer'>see all projects</div>
                <div className='p-3 mr-4 hover:bg-[#65C23A] rounded-[50%] border-[0.2rem] border-white'>
                    <Image  src='/images/arrow.png' alt='arrow' width={35} height={35} priority />
                </div>
            </Link>
            
        </div>

    </div>
  )
}

export default Portfolio