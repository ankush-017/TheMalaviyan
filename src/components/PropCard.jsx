import React from 'react'

function PropCard({img,head,para,warden}) {
  return (
    <>
        <div className='flex md:max-w-[700px] flex-col bg-[#f3b2a7] rounded-3xl pb-5 justify-center items-center'>
            <div className=''>
              <img src={img} alt="" className='rounded-3xl'  />
            </div>
            <div className='text-center mt-3'>
              <h1 className='text-2xl font-semibold text-[#9e202f] '>{head}</h1>
              <p className='mt-2 text-[18px]'>{para}</p>
              <div className='bg-[#ddb533] mb-0 rounded-xl h-[40px] max-w-[800px] font-semibold flex items-center justify-center text-center'>
                <h1>{warden}</h1>
              </div>
            </div>
        </div>
    </>
  )
}


export default PropCard