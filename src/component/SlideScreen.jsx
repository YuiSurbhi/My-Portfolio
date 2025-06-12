import { motion } from 'framer-motion'
import React from 'react'

const SlideScreen = ({children, bg = ''}) => {
  return (
    <motion.section
      className={`h-screen flex snap-start items-center justify-center ${bg}`}
      initial={{opacity:0, y:100}}
      whileInView={{opacity:1, y:0}}
      transition={{ duration: 0.6}}
      viewport={{ once:true, amount:0.5 }}
    >
        {children}
    </motion.section>
  )
}

export default SlideScreen
