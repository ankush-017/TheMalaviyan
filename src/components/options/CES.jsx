import React from 'react'
import ces from '../../Images/ces.png'

function CES() {
  return (
    <>
       <div class="card-body" className='mt-7 flex flex-col md:mx-11 mx-5 border-[2px] border-solid border-[#f6bbbb] justify-center items-center'>
            <div className='mt-3'>
                <img src={ces} alt="ed Logo" class="img-fluid mb-3"/> 
            </div>
            <div className='flex flex-col md:px-11 px-5 mb-11 text-center justify-center items-center mx-auto'>
              <div>
              <h2 className='md:text-2xl text-[20px] font-semibold'>Computer Engineering Society</h2>
              <hr className='border-[1px] md:w-[400px] w-[320px] border-[#130808]' />
              </div>

              <div className='mt-5'>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <p className=''><strong>About:</strong> The Computer Engineering Society (CES) at MMMUT, established
                 in 1993, has become a dynamic platform for students to enhance their technical skills and overall 
                 development.
                    </p>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Skill Enhancement: </strong>  CES offers C and C++ classes, as well as Data Structures and Competitive Programming sessions.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Coding Events: </strong> The society hosts events like Introduction to Programming Test Series and Game of Codes to boost coding skills. </li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Annual Tech Event - Ennexus:</strong> A platform for innovation featuring competitions like The Mystery Machine, Chakravyuh, and Capture the Flag. </li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Commitment to Excellence: </strong> CES is dedicated to fostering innovation and excellence in computer engineering.</li>
              </div>
              
              </div>

            </div>
        </div>
    </>
  )
}


export default CES