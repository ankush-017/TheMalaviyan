import React from 'react'
import sae from '../../Images/sae.png'

function SAE() {
  return (
    <>
       <div class="card-body" className='mt-7 flex flex-col md:mx-11 mx-5 border-[2px] border-solid border-[#f6bbbb] justify-center items-center'>
            <div className='mt-3'>
                <img src={sae} alt="ed Logo" class="img-fluid mb-3"/> 
            </div>
            <div className='flex flex-col md:px-11 px-5 mb-11 text-center justify-center items-center mx-auto'>
              <div>
              <h2 className='text-2xl font-semibold'>SAE Collegiate Club</h2>
              <hr className='border-[1px] w-[300px] border-[#130808]' />
              </div>

              <div className='mt-5'>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <p className=' font-semibold'> At SAE Collegiate Club MMMUT Chapter, we have four thriving subdivisions, each specializing in unique aspects of engineering excellence:
                    </p>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>BAJA: </strong> Our BAJA team is known for designing and building off-road vehicles to compete in national and international SAE BAJA events. We thrive on challenges and innovation, pushing the boundaries of engineering.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>SUPRA: </strong> The SUPRA division focuses on designing, building, and racing formula-style vehicles in the renowned SAE SUPRA competitions. We're dedicated to fostering engineering excellence and a passion for motorsports.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Aeromodelling: </strong> Aeromodelling enthusiasts within our club design and build aircraft models. We participate in competitions like SAE Aerothon, pushing the envelope in aerospace engineering and aviation.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Disco: </strong> Our Disco (Digital Sub Council) team is all about innovation and problem-solving. We embrace diverse engineering challenges and provide a platform for members to discover new skills and conquer technical obstacles.
                </li>
              </div>
              <div className='bg-[#ffd18d] font-semibold px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <p>One of our flagship events is our annual technical fest, "TECHSRIJAN," which stands as the largest in Eastern Uttar Pradesh, attracting students from across the region. It's a celebration of innovation, technology, and creativity, where we
                     showcase our engineering prowess.</p>
              </div>  
                  
              </div>

            </div>
        </div>
    </>
  )
}


export default SAE