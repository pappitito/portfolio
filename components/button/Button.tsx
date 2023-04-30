import React from 'react'

interface Props{
    text: string | JSX.Element,
    isOutline?: boolean,
    onClick?: (e?: React.SyntheticEvent<EventTarget>) => void;

}

const Button = ({text, isOutline, onClick}:Props) => {
  return (
    <div>
        {isOutline? <div onClick={onClick}  className='text-[0.9rem] hover:scale-110 duration-500 p-[0.5rem] cursor-pointer pr-3 pl-3 flex w-[100%] flex-row min-w-[3rem]  items-center justify-center rounded-[0.1rem] border-[0.1rem]  text-white border-white'>{text}</div> : 
        <div onClick={onClick} className='text-[0.9rem] p-[0.5rem] w-[100%] hover:scale-110 duration-500   cursor-pointer pr-3 pl-3 flex flex-row min-w-[3rem] items-center justify-center text-black rounded-[0.1rem] bg-[#65C23A] font-semibold'>{text}</div>
        }
    </div>
  )
}

export default Button