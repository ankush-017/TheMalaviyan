import React from 'react'
import cdc from '../../Images/cdc.png'

function CDC() {
  return (
    <>
       <div class="card-body" className='mt-7 flex flex-col md:mx-11 mx-5 border-[2px] border-solid border-[#f6bbbb] justify-center items-center'>
            <div className='mt-3'>
                <img src={cdc} alt="ed Logo" class="img-fluid mb-3"/> 
            </div>
            <div className='flex flex-col md:px-11 px-5 mb-11 text-center justify-center items-center mx-auto'>
              <div>
              <h2 className='text-2xl font-semibold'>Coders & Developers Club</h2>
              <hr className='border-[1px] w-[300px] border-[#130808]' />
              </div>

              <div className='mt-5'>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <p className=''><strong>About:</strong> The Coders and Developers Club MMMUT is dedicated to fostering a
                 culture of excellence in coding and technology. Our primary goal is to ensure continuous learning and 
                 improvement among our students, helping them enhance their technological skills and stay ahead in the tech 
                 world.
                    </p>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Awareness and Learning: </strong> We organize sessions to highlight the importance of coding and tech domains, especially for new students, and encourage active participation in contests and coding practice.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Collaboration:</strong>  By working with faculty advisors and alumni, we introduce new, industry-demanded skills to keep our community at the forefront of technological innovation.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Active Engagement: </strong> We consistently engage our members in various activities and initiatives, maintaining a vibrant and dynamic coding culture within the college.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Vision: </strong> Our commitment is to inspire, educate, and build a collaborative community, ensuring every member reaches their technical goals.</li>
              </div>
            
              </div>

            </div>
        </div>
    </>
  )
}


export default CDC