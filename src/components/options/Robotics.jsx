import React from 'react'
import rc from '../../Images/rc.png'

function Robotics() {
  return (
    <>
       <div class="card-body" className='mt-7 flex flex-col md:mx-11 mx-5 border-[2px] border-solid border-[#f6bbbb] justify-center items-center'>
            <div className='mt-3'>
                <img src={rc} alt="ed Logo" class="img-fluid mb-3"/> 
            </div>
            <div className='flex flex-col md:px-11 px-5 mb-11 text-center justify-center items-center mx-auto'>
              <div>
              <h2 className='md:text-3xl text-[20px] font-semibold'>Robotics Club</h2>
              <hr className='border-[1px] md:w-[400px] w-[320px] border-[#130808]' />
              </div>

              <div className='mt-5'>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <p className=''><strong>About:</strong>  The Robotics Club at MMMUT offers students
                 the chance to gain hands-on experience in integration engineering, complementing their 
                 academic education with practical skills in robotics. For the past 12 years, we have actively
                  engaged students through workshops, contests, and tutorials to nurture their interest and expertise 
                  in robotics.
                    </p>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Hands-On Experience: </strong> The club provides practical opportunities for students to work on robotics projects and integrate engineering concepts.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Workshops and Contests:  </strong> We organize various workshops and contests to foster learning and innovation in the field of robotics.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Continued Engagement:   </strong>Our focus on active participation helps students develop a deep interest and skill set in robotics over time. </li>
              </div>
              
              </div>

            </div>
        </div>
    </>
  )
}


export default Robotics