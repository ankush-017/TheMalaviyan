import React from 'react'
import nss from '../../Images/nss.png'

function NSS() {
  return (
    <>
       <div class="card-body" className='mt-7 flex flex-col md:mx-11 mx-5 border-[2px] border-solid border-[#f6bbbb] justify-center items-center'>
            <div className='mt-3'>
                <img src={nss} alt="ed Logo" class="img-fluid mb-3"/> 
            </div>
            <div className='flex flex-col md:px-11 px-5 mb-11 text-center justify-center items-center mx-auto'>
              <div>
              <h2 className='text-2xl font-semibold'>NSS</h2>
              <hr className='border-[1px] w-[300px] border-[#130808]' />
              </div>

              <div className='mt-5'>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <p className=''><strong>About:</strong> The National Service Scheme (NSS) at MMMUT is dedicated to promoting 
                community service and social responsibility among students. Established to encourage students to 
                engage in meaningful social work, NSS provides opportunities to contribute to various community development 
                projects and activities.
                    </p>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Community Service: </strong> NSS organizes various initiatives such as cleanliness drives, health camps, and educational programs to address social issues and support local communities.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Skill Development: </strong> The scheme helps students develop essential life skills through hands-on experiences and volunteer work in diverse fields.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Leadership Opportunities: </strong> NSS encourages students to take on leadership roles and work collaboratively on projects, enhancing their organizational and management skills.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Awareness Programs: </strong> The program conducts workshops and seminars to raise awareness about important social issues and promote active citizenship.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <p><strong>Annual Events: </strong> NSS organizes special events and campaigns throughout the year to engage students and foster a spirit of service and dedication to the community.</p>
              </div>  
              </div>

            </div>
        </div>
    </>
  )
}


export default NSS