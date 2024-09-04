import React from 'react'
import ds from '../../Images/dsc.png'

function DS() {
  return (
    <>
       <div class="card-body" className='mt-7 flex flex-col md:mx-11 mx-5 border-[2px] border-solid border-[#f6bbbb] justify-center items-center'>
            <div className='mt-3'>
                <img src={ds} alt="ed Logo" class="img-fluid mb-3"/> 
            </div>
            <div className='flex flex-col md:px-11 px-5 mb-11 text-center justify-center items-center mx-auto'>
              <div>
              <h2 className='md:text-3xl text-[20px] font-semibold'>Day Scholars' Club</h2>
              <hr className='border-[1px] md:w-[400px] w-[320px] border-[#130808]' />
              </div>

              <div className='mt-5'>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <p className=''><strong>About:</strong>   Established in 1984, the Day Scholars Club is a 
                vibrant community where day scholars at MMMUT can truly feel at home. The club is known for its 
                fun, laughter, and engaging events, offering valuable guidance and support from senior members.
                    </p>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Community and Support: </strong>  The club provides a welcoming environment where day scholars can connect,
                 share experiences, and receive support from their peers and seniors.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Events and Activities:  </strong> With a range of events and activities, the club ensures a lively and enjoyable experience for its members throughout the academic year.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Magazine - Divyakriti:  </strong>The club publishes its own magazine, Divyakriti, showcasing the creativity and achievements of its members and keeping the community informed and engaged. </li>
              </div>
              
              </div>

            </div>
        </div>
    </>
  )
}


export default DS