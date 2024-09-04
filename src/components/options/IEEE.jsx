import React from 'react'
import ieee from '../../Images/ieee.png'

function IEEE() {
  return (
    <>
       <div class="card-body" className='mt-7 flex flex-col md:mx-11 mx-5 border-[2px] border-solid border-[#f6bbbb] justify-center items-center'>
            <div className='mt-3'>
                <img src={ieee} alt="ed Logo" class="img-fluid mb-3"/> 
            </div>
            <div className='flex flex-col md:px-11 px-5 mb-11 text-center justify-center items-center mx-auto'>
              <div>
              <h2 className='text-3xl font-semibold'>IEEE-SB</h2>
              <hr className='border-[1px] w-[300px] border-[#130808]' />
              </div>

              <div className='mt-5'>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <p className=''><strong>About:</strong>  IEEE-SB MMMUT is the student chapter of the Institute of Electrical and Electronics
                 Engineers (IEEE) at MMMUT. As a student-run organization, we are dedicated to helping our members discover
                  their passions, learn new skills, and connect with others while fostering technological innovation and
                   excellence for the benefit of humanity.
                    </p>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Community and Growth: </strong> We provide a supportive environment where students can meet new people, gain diverse experiences, and enhance their industrial skills.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Innovation and Impact: </strong>   Our chapter is recognized for contributing to global technological advancements and improving conditions worldwide.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Skill Development: </strong> IEEE-SB MMMUT offers numerous opportunities for members to develop and showcase their skills and research on prominent platforms.</li>
              </div>
             
              </div>

            </div>
        </div>
    </>
  )
}


export default IEEE