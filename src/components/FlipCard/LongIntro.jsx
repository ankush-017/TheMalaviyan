import React, { useState } from 'react';
import {motion} from 'framer-motion'
import './FlipCard.css';
import frontImg from '../../Images/SpaceOrange4.jpeg'
import backImg from '../../Images/SpaceCity9.jpeg'

function LongIntro({front,back}) {

    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimation,setIsAnimation] = useState(false);

    function handleFlip() {
        if(!isAnimation){
          setIsFlipped(!isFlipped);
          setIsAnimation(true);
        }
    }

  return (
    <div className='flex justify-center mb-11 items-center bg-white rounded-2xl text-white cursor-pointer '>
        <div className='flip-card md:w-[1000px] md:h-[600px] h-[1200px] w-[500px] rounded-lg ' onClick={handleFlip}>
            <motion.div
                className='flip-card-inner h-[100%] w-[100%] ' initial={false} 
                animate={{rotateY: isFlipped ? 180 : 360}}
                transition={{duration: 0.6, animationDirection: "normal"}}
                onAnimationComplete={()=> setIsAnimation(false)}
            >
                <div className='flip-card-front rounded-2xl flex items-center justify-center h-[100%] w-[100%] bg-cover py-4`)]' style={{backgroundImage: `url(${frontImg})`}}>
                    <h1>{front}</h1>
                </div>
                <div className='flip-card-back flex rounded-2xl items-center justify-center h-[100%] w-[100%] bg-cover py-4 ' style={{backgroundImage: `url(${backImg})`}}>
                    {back}
                </div>
            </motion.div>
        </div>
    </div>
  )
}
export default LongIntro;