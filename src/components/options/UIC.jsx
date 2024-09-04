import React from 'react'
import uic from '../../Images/uic.png'

function UIC() {
  return (
    <>
       <div class="card-body" className='mt-7 flex flex-col md:mx-11 mx-5 border-[2px] border-solid border-[#f6bbbb] justify-center items-center'>
            <div className='mt-3'>
                <img src={uic} alt="ed Logo" class="img-fluid mb-3"/> 
            </div>
            <div className='flex flex-col md:px-11 px-5 mb-11 text-center justify-center items-center mx-auto'>
              <div>
              <h2 className='md:text-4xl text-3xl font-semibold'>University Innovation Cell</h2>
              <hr className='border-[1px] md:w-[500px] border-[#130808]' />
              </div>

              <div className='mt-5'>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <p className=''><strong>Our Vision: </strong> To make MMMUT a name to reckon with in the academic fraternity by giving a strong
                 impetus to create an environment of knowledge application and becoming stakeholders in an innovative India.
                    </p>
              </div>
              
            
              </div>

            </div>
        </div>
    </>
  )
}


export default UIC