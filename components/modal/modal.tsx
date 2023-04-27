import React from 'react'
import Button from '../button/Button'
import { motion, AnimatePresence } from 'framer-motion'

interface Props{
    title?: string,
    children: JSX.Element | string,
    isOpen: boolean,
    handleClose: ()=> void,
    exit?: ()=> void,
    handleDone: ()=> void,
    closeText?: string | JSX.Element,
    doneText?: string | JSX.Element,
    passRef?: any
    hasExit?: boolean

}

const CustomModal = ({title, children, passRef, isOpen, handleClose, exit, handleDone, hasExit, closeText, doneText}: Props) => {
    const [isAnimating, setIsAnimating] = React.useState(false);

    const handleAnimationComplete = () => {
      if (!isOpen) {
        setIsAnimating(false);
      }
    };
    
  return (
   <AnimatePresence > {isOpen? 
    <motion.div
     initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationStart={() => setIsAnimating(true)}
      onAnimationComplete={handleAnimationComplete}
     className=' h-[100vh] w-[100vw] z-[130] bg-black bg-opacity-50 fixed inset-0 min-h-screen flex overflow-y-auto justify-center items-center '>
        
    <motion.div
                  initial={{ y: "-100vh" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100vh" }}
                  transition={{ duration: 0.2 }}
      className='p-5 bg-[#65C23A] w-[86%] min-w-[14rem] max-w-[30rem] z-[140] rounded-[0.2rem]  flex-col '>
        <div className='flex flex-row justify-between items-center'>
            <div className='text-xl text-black font-semibold'>{title}</div>
            {hasExit?  <svg xmlns="http://www.w3.org/2000/svg" onClick={handleClose} fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-8 h-8 text-black cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                :''}

        </div>
        <div className='flex justify-center items-center p-4 mt-1 mb-4'>{children}</div>
        <div id='footer'>
            <div ref={passRef} className='flex flex-row justify-center md:justify-end items-center gap-4'>
                <Button isOutline text={closeText? closeText: 'Close'} onClick={handleClose} />
                <Button  text={doneText? doneText: 'done'} onClick={handleDone} />
            </div>
        </div>
    </motion.div>

</motion.div> 
    : ''} </AnimatePresence>
  )
}

export default CustomModal