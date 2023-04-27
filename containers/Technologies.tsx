import React from 'react'
import Image from 'next/image'

interface Props{
    myRef: React.RefObject<HTMLDivElement>
}

interface CardProp{
    img: string, 
    first: string,
     second?: string
}

interface AllCards{
    myCards: CardProp[]
}
const Card = ({img,first, second}: CardProp)=>{
    return (
        <div data-aos="fade-right" data-aos-duration="700"  className='flex flex-col items-center overflow-x-hidden justify-center w-[8rem] mdm:w-[9rem] h-[9rem] mdm:h-[10.5rem] bg-[#212121]'>
            <div className='mt-[-0.4rem]'>
                <Image src={img} alt='logo' width={60} height={60} priority />
            </div>
            <div className='text-white mt-[1rem] font-medium'>{first}<span className='text-[#65C23A]'>{second}</span></div>
        </div>
    )
}


const techs = [
    {
        first: 'JAVASCRIPT',
        img: '/images/technologies/javascript.png'
    },
    {
        first: 'TYPESCRIPT',
        img: '/images/technologies/typescript.png'
    },
    {
        first: 'REACT',
        img: '/images/technologies/react.png'
    },
    {
        first: 'NEXT',
        second: 'JS',
        img: '/images/technologies/nextjs.png'
    },
    {
        first: 'NODE',
        second: 'JS',
        img: '/images/technologies/nodejs.png'
    },
    {
        first: 'EXPRESS',
        second: 'JS',
        img: '/images/technologies/expressjs.png'
    },
    {
        first: 'MONGODB',
        img: '/images/technologies/mongodb.png'
    },
    {
        first: 'HTML',
        second: ' 5',
        img: '/images/technologies/html5.png'
    },
    {
        first: 'CSS',
        second: ' 6',
        img: '/images/technologies/css.png'
    },
    {
        first: 'PYTHON',
        img: '/images/technologies/python.png'
    },
    {
        first: 'TENSORFLOW',
        img: '/images/technologies/tensorflow.png'
    },
    {
        first: 'FIGMA',
        img: '/images/technologies/figma.png'
    },
    
]

const Technologies = ({myRef}: Props) => {
  return (
    <div data-aos="zoom-out"  ref={myRef}  className='mds:mt-[6rem] mt-[4rem] overflow-x-hidden  flex flex-col items-center'>
        <div className='p-4 flex flex-col items-center'>
        <div className='text-white'>
            <h2 className='text-center mdm:text-[2.8rem] text-[2rem] font-semibold tracking-tighter'>Technologies</h2> 
        </div>
        <div className='flex flex-wrap overflow-x-hidden items-center justify-center mdm:w-[60%] mds:w-[80%] gap-[2rem] mt-[3rem]'>{techs? techs.map((tech)=>{
            return(
                <Card img={tech.img} first={tech.first} second={tech.second} />
            )
        }) : ''}</div>
        </div>
        <div data-aos="flip-up" className='w-[100%] mt-[4rem] pt-[1rem] pb-[1rem] text-[0.85rem] text-black font-semibold mdm:text-[1.3rem] text-center bg-[#65C23A]'>{'MORE LIKE CONTINOUS STACK DEVELOPER'}</div>
    </div>
  )
}

export default Technologies