import React from 'react'
import editorial from '../../Images/ed.png'

function TheEditorialBoard() {
  return (
    <>
       <div class="card-body" className='mt-7 flex flex-col md:mx-11 mx-5 border-[2px] border-solid border-[#f6bbbb] justify-center items-center'>
            <div className='mt-3'>
                <img src={editorial} alt="ed Logo" class="img-fluid mb-3"/> 
            </div>
            <div className='flex flex-col md:px-11 px-5 mb-11 text-center justify-center items-center mx-auto'>
              <div>
              <h2 className='text-2xl font-semibold'>The Editorial Board</h2>
              <hr className='border-[1px] w-[300px] border-[#130808]' />
              </div>

              <div className='mt-5'>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <p className=''><strong>About:</strong> The Editorial Board at MMMUT is the official board of the college,
                    dedicated to enriching campus life through a variety of activities. The board not only publishes
                    their magazine, Tiresia, but also plays a key role in organizing events and fostering a culture of
                    creativity and engagement within the college.
                    </p>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Magazine - Tiresia:</strong> The board publishes Tiresia, featuring articles, stories,
                and interviews that highlight the achievements and interests of the MMMUT community.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Event Organization:</strong> The board organizes various events on campus, including
                engaging talks and discussions.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Notable Interviews:</strong> The board conducts interviews with prominent personalities,
                such as Anna Hazare, providing unique insights and perspectives.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Community Engagement:</strong> Through their activities, the Editorial Board contributes
                to a vibrant and interactive campus environment.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <p><strong>Induction Process:</strong> Students can join the Tech Club by participating in our annual orientation and completing a simple task to showcase their interest.</p>
              </div>  
                  <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                  <p><strong>Events:</strong> We organize hackathons, coding competitions, tech talks, and collaborative projects throughout the year.</p>
                  </div>
              </div>

            </div>
        </div>
    </>
  )
}


export default TheEditorialBoard