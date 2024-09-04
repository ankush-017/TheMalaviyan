import React from 'react'
import ecel from '../../Images/ecell.jpg'

function ECELL() {
  return (
    <>
       <div class="card-body" className='mt-7 flex flex-col md:mx-11 mx-5 border-[2px] border-solid border-[#f6bbbb] justify-center items-center'>
            <div className='mt-3'>
                <img src={ecel} alt="ed Logo" class="img-fluid mb-3"/> 
            </div>
            <div className='flex flex-col md:px-11 px-5 mb-11 text-center justify-center items-center mx-auto'>
              <div>
              <h2 className='md:text-3xl text-[20px] font-semibold'>E-Cell</h2>
              <hr className='border-[1px] md:w-[400px] w-[320px] border-[#130808]' />
              </div>

              <div className='mt-5'>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <p className=''><strong>About:</strong> The Entrepreneurship Cell at MMMUT is a student society dedicated to
                 promoting entrepreneurial skills and abilities among students. We regularly organize guest lectures, 
                 expert talks, workshops, and events to foster an entrepreneurial mindset and provide practical knowledge.
                    </p>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Events and Workshops: </strong> The cell hosts various activities, including guest lectures and workshops, to support and
                 inspire students interested in entrepreneurship.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Networking:  </strong> We create a network of students, alumni, teachers, and entrepreneurs to support and guide students in their startup ventures.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Startup Support:  </strong>The cell assists students with their startup ideas, offering resources and connections to help bring their entrepreneurial dreams to fruition. </li>
              </div>
              
              </div>

            </div>
        </div>
    </>
  )
}


export default ECELL