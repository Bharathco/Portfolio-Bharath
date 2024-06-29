import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { DiRedis } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import {RiHtml5Line} from 'react-icons/ri'

import { RiJavascriptFill } from "react-icons/ri";
import {RiTailwindCssLine} from 'react-icons/ri'
import {RiJavaLine} from 'react-icons/ri'
import { IoLogoPython } from "react-icons/io5";
import { SiTableau } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

import { animate, motion } from "framer-motion"

const iconVariants = (duration) =>({
  initial: {y: -10},
  animate: {
    y:[10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 
      whileInView={{opacity: 1, y:0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
       className='my-20 text-center text-4xl'>Technologies</motion.h1 >

      <motion.div 
       whileInView={{opacity:1, x:0}}
       initial= {{opacity:0, x: -100}}
       transition={{duration:1.5}}
        className="flex flex-wrap items-cente justify-center gap-4">
    
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className='text-7xl text-cyan-400'/>
            {/* <p className="text-center text-lg mt-2">React.js</p> */}
        </motion.div>

        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiHtml5Line className='text-7xl text-[#ff611e]'/>
        </motion.div>

        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaCss3Alt className='text-7xl text-[#2965f1]'/>
        </motion.div>

        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiJavascriptFill className='text-7xl text-[#F0DB4F]'/>
        </motion.div>

        

        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiJavaLine className='text-7xl text-[#ffffff]'/>
        </motion.div>

        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssLine className='text-7xl text-[#38B2AC]'/>
        </motion.div>

        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoPython  className='text-7xl text-[#3572A5]'/>
        </motion.div>

        


        <motion.div 
         variants={iconVariants(5)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className='text-7xl text-[#34a853]'/>
        </motion.div>


       
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className='text-7xl text-green-500'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTableau className='text-7xl text-[#E97627]'/>
        </motion.div>
       
      </motion.div>
   
    </div>
  )
}

export default Technologies
