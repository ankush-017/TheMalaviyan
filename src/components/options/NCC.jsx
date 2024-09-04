import React from 'react'
import ncc from '../../Images/ncc.png'

function NCC() {
  return (
    <>
       <div class="card-body" className='mt-7 flex flex-col md:mx-11 mx-5 border-[2px] border-solid border-[#f6bbbb] justify-center items-center'>
            <div className='mt-3'>
                <img src={ncc} alt="ed Logo" class="img-fluid mb-3"/> 
            </div>
            <div className='flex flex-col md:px-11 px-5 mb-11 text-center justify-center items-center mx-auto'>
              <div>
              <h2 className='md:text-2xl text-[20px] font-semibold'>National Cadet Corps (NCC)</h2>
              <hr className='border-[1px] md:w-[400px] w-[320px] border-[#130808]' />
              </div>

              <div className='mt-5'>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <p className=''><strong>About:</strong> The National Cadet Corps (NCC) at MMMUT focuses on cultivating discipline, 
                leadership, and patriotism among students. Our program is designed to help students develop into responsible and strong individuals through a variety of engaging activities.
                    </p>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Activities: </strong>  We offer drill practice, adventure camps, shooting, and trekking to build teamwork, physical fitness, and a sense of duty.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Leadership and Citizenship: </strong> Our goal is to nurture students into better leaders and good citizens, preparing them to contribute positively to society and the country.</li>
              </div>
              
              </div>

            </div>
        </div>
    </>
  )
}


export default NCC