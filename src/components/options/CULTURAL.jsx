import React from 'react'
import cd from '../../Images/cs.png'

function CS() {
  return (
    <>
       <div class="card-body" className='mt-7 flex flex-col md:mx-11 mx-5 border-[2px] border-solid border-[#f6bbbb] justify-center items-center'>
            <div className='mt-3'>
                <img src={cd} alt="ed Logo" class="img-fluid mb-3"/> 
            </div>
            <div className='flex flex-col md:px-11 px-5 mb-11 text-center justify-center items-center mx-auto'>
              <div>
              <h2 className='md:text-3xl text-[20px] font-semibold'>Cultural Synod</h2>
              <hr className='border-[1px] md:w-[400px] w-[320px] border-[#130808]' />
              </div>

              <div className='mt-5'>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <p className=''><strong>About:</strong>   The Cultural Synod at MMMUT operates under the Cultural Subcouncil
                 and is dedicated to celebrating and promoting the arts and culture within the college. This synod 
                 encompasses several clubs and is responsible for organizing major cultural events.
                    </p>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Clubs: </strong>  The synod includes the Fine Arts Club, Dance Club, Music Club, Drama Club, 
                and Technical Club, each contributing to the vibrant cultural life at MMMUT.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Major Events:  </strong> The synod organizes Abhyudaya, our annual cultural fest, and Heats, which showcase the diverse talents of our students and foster a rich cultural environment.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Responsibilities:  </strong>The Cultural Synod is key in planning and executing events that highlight artistic and technical skills, ensuring a dynamic and engaging cultural experience for the college community. </li>
              </div>
              
              </div>

            </div>
        </div>
    </>
  )
}


export default CS