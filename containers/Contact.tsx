import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/button/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Oval} from 'react-loader-spinner'

const showToastMessage = (message: string, type: string) => {
    switch (type) {
      case 'success':
        toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
        theme: 'dark',
        autoClose: 2000,
        hideProgressBar: false,
    });
      break;
        
      case 'error':
        toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
        theme: 'dark',
        autoClose: 3000,
        hideProgressBar: false,
    });
      break;

    case 'info':
        toast.info(message, {
        position: toast.POSITION.TOP_CENTER,
        theme: 'dark',
        autoClose: 2000,
        hideProgressBar: false,
    });
      break;
    case 'warning':
        toast.warning(message, {
        position: toast.POSITION.TOP_CENTER,
        theme: 'dark',
        autoClose: 2000,
        hideProgressBar: true,
    });
      break;
    
      default:
        break;
    }
};

interface Props{
    myRef: React.RefObject<HTMLDivElement>
}

const Contact = ({myRef}: Props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

   const handleSendMessage = async ()=>{
    setLoading(true)
    var msg2 = ''
        if(!name || !email || !message){
            setLoading(false)
            showToastMessage('complete all feilds', 'error')
        }
        else{
            try {
                const data = await fetch(`api/hello`,{
                    method: 'POST',
                    headers: {"Content-type": "application/json"},
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        message: message})
                }). then(data => data.json()).then(data => msg2 = data.msg)
                if(msg2 === 'OK'){
                    setLoading(false)
                    showToastMessage('Message sent', 'success')
    
                    
                    
                    
                }
                else if(msg2 === 'invalid email'){
                    showToastMessage('invalid email', 'error')
                    setLoading(false)
                }
                else{
                    showToastMessage('unable to send', 'error')
                    setLoading(false)
                }
            } catch (error) {
                setLoading(false)
            }
        }
   } 


  return (
    <div ref={myRef} className='text-white mt-2 mb-[3rem] '>
        <div className='max-w-[10rem]'>
            <ToastContainer />
        </div>
        <div data-aos="zoom-out" className='mdm:text-[2.8rem] text-center  p-4 mds:ml-[2rem] mt-[4rem]  text-white text-[2rem] font-semibold tracking-tighter'>
            Contact
            <div className='text-[#65C23A] mt-[-0.5rem] tracking-normal text-[1.1rem]'>get in touch with me</div>
        </div>
        <div className='flex flex-col items-center mdm:flex-row mt-[2rem] gap-[2rem] p-4 mdm:items-start justify-center'>
            <div className='mdm:flex grid grid-cols-2 mdm:flex-col gap-4'>
                <div data-aos="flip-right" className='pl-[1rem] pr-[1rem] mds:pl-[2rem] max-w-[17rem] mds:pr-[2rem] h-[9.5rem]  flex flex-col gap-4 items-center justify-center bg-[#212121]'>
                    <div><Image src='/images/location.png' alt='address' width={40} height={40}/></div>
                    <div className='text-center text-[0.96rem] '>Remote</div>
                </div>
                <div data-aos="flip-right" className='pl-[1rem] pr-[1rem] mds:pl-[2rem] break-words max-w-[17rem] mds:pr-[2rem] h-[9.5rem]  flex flex-col gap-4 items-center justify-center bg-[#212121]'>
                    <div><Image src='/images/email.png' alt='address' width={40} height={40}/></div>
                    <div className='text-center text-[0.96rem] max-w-[7rem]  mds:max-w-[100%]  '>titonwudinjo@gmail.com</div>
                </div>
                <div data-aos="flip-right" className='pl-[1rem] pr-[1rem] mds:pl-[2rem] max-w-[17rem] mds:pr-[2rem] h-[9.5rem]  flex flex-col gap-4 items-center justify-center bg-[#212121]'>
                    <div><Image src='/images/telephone.png' alt='address' width={40} height={40}/></div>
                    <div className='text-center text-[0.96rem]  '>+234 814 074 8658</div>
                </div>
                <div data-aos="flip-right" className='pl-[1rem] pr-[1rem] mds:pl-[2rem] max-w-[17rem] mds:pr-[2rem] h-[9.5rem]  flex flex-col gap-4 items-center justify-center bg-[#212121]'>
                    <div><Image src='/images/verified.png' alt='address' width={40} height={40}/></div>
                    <div className='text-center text-[0.96rem] '>Freelance available</div>
                </div>
                

            </div>
            <div data-aos="slide-up" className='flex flex-col items-center gap-4 mdm:gap-[3rem] mdm:pt-[3rem] h-[100%] w-[100%] mdm:w-[70%] max-w-[35rem] bg-[#212121] p-[1.1rem] mds:p-[2rem] '>
                <div className='flex flex-col w-[100%] gap-[1rem] mds:flex-row'>
                    <input className='text-[1rem] p-[0.8rem] w-[100%] mds:w-[50%] bg-black outline-none focus:outline-none' type="text" placeholder='Enter your name'
                        value={name}
                        onChange={(e)=>{
                            setName(e.target.value)
                        }}
                    />
                    <input className='text-[1rem] p-[0.8rem] w-[100%] mds:w-[50%] bg-black outline-none focus:outline-none' type="text" placeholder='Enter your email'
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div className='h-[20rem] mdm:h-[24.52rem] w-[100%]  break-words'>
                    <textarea className='text-[1rem] p-[0.8rem] w-[100%] h-[100%] bg-black outline-none focus:outline-none' placeholder='Enter your message'
                        value={message}
                        onChange={(e)=>{
                            setMessage(e.target.value)
                        }}
                    ></textarea>
                </div>
                <Button text={loading?
                        <div className='flex flex-row items-center '>
                        <Oval
                             height={18}
                             width={18}
                             color="#ffffff"
                             wrapperStyle={{}}
                             wrapperClass=""
                             visible={true}
                             ariaLabel='oval-loading'
                             secondaryColor="lightgray"
                             strokeWidth={6}
                             strokeWidthSecondary={6}
              
                             />
                             <div>SENDING</div>
                      </div>
                        : 'SEND MESSAGE'} onClick={handleSendMessage} />
            </div>

        </div>

        <div className='mt-[5rem] flex flex-col gap-5 items-center justify-center'>
            <div className='text-[#65C23A] font-semibold text-[0.9rem]'>Connect with me on social media</div>
            <div className='flex flex-row gap-4'>
                <Link className='cursor-pointer sc hover:scale-125 duration-500' href='https://www.linkedin.com/in/tito-onwudinjo-8847087a' target='_blank'><Image src='/images/linkedin.png' alt='social' width={36} height={36}/></Link>
                <Link className='cursor-pointer sc hover:scale-125 duration-500' href='https://twitter.com/titodili' target='_blank'><Image src='/images/twitter.png' alt='social' width={36} height={36}/></Link>
                <Link className='cursor-pointer sc hover:scale-125 duration-500' href='https://instagram.com/otit.o?igshid=YmMyMTA2M2Y=' target='_blank'><Image src='/images/instagram.png' alt='social' width={36} height={36}/></Link>
                <Link className='cursor-pointer sc hover:scale-125 duration-500' href='https://wa.me/message/GI5R7R7DUJCVB1' target='_blank'><Image src='/images/whatsapp.png' alt='social' width={36} height={36}/></Link>
            </div>
        </div>
    </div>
  )
}

export default Contact