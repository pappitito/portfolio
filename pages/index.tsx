import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header/Header'
import FirstPage from '../containers/FirstPage'
import React from 'react'
import AboutMe from '../containers/AboutMe'
import Technologies from '../containers/Technologies'
import Portfolio from '../containers/Portfolio'
import Resume from '../containers/Resume'
import Contact from '../containers/Contact'
import Myfooter from '../containers/Footer'


const Home: NextPage = () => {

const firstPageRef = React.useRef(null)
const aboutPageRef = React.useRef(null)
const technologiesPageRef = React.useRef(null)
const portfolioPageRef = React.useRef(null)
const ResumePageRef = React.useRef(null)
const contactPageRef = React.useRef(null)

function smoothScrollTo(element: any, duration: number) {
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  var startTime: any = null;

  function animation(currentTime: any) {
    if (startTime === null) startTime = currentTime;
    const elapsedTime = currentTime - startTime;
    const scrollPosition = easeInOut(elapsedTime, startPosition, distance, duration);
    window.scrollTo(0, scrollPosition);
    if (elapsedTime < duration) requestAnimationFrame(animation);
  }

  function easeInOut(t: any, b: any, c: any, d: any) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

const handleClick = (ref:any) => {
  smoothScrollTo(ref.current, 800);
};

 const linkOptions = [
  {
    name: 'About Me',
    onClick: ()=>handleClick(aboutPageRef)
    
    
  },
  {
    name: 'Technologies',
    onClick: ()=>handleClick(technologiesPageRef)
  
  },
  {
    name: 'Portfolio',
    onClick: ()=>handleClick(portfolioPageRef)
  
  },
  {
    name: 'Resume',
    onClick: ()=>handleClick(ResumePageRef)
    
  
  },
  {
    name: 'Contact',
    onClick: ()=>handleClick(contactPageRef)
    
    
  },
  {
    name: 'VIEW CV',
    
    isButton: true,
    isOutlineButton: true,
    onClick: () => window.open("/files/TitoCV.pdf", "_blank")
   

  },

 

]

  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1" />
        <link rel="shortcut icon" href="/images/ds6.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
       <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600&display=swap" rel="stylesheet" />       


      </Head>
      <div className='flex flex-col overflow-hidden'>
      <Header links={linkOptions} />
      <FirstPage myRef={firstPageRef}    />
      <AboutMe myRef={aboutPageRef} />
      <Technologies myRef={technologiesPageRef} /> 
      <Portfolio myRef={portfolioPageRef} />
      <Resume myRef={ResumePageRef} />
      <Contact myRef={contactPageRef} />
      <Myfooter />
      </div>
      
      
      
     
      
     
      
    </div>
  )
}

export default Home
