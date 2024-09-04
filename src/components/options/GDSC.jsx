import React from 'react'
import gdsc from '../../Images/gdsc.png'

function GDSC() {
  return (
    <>
       <div class="card-body" className='mt-7 flex flex-col md:mx-11 mx-5 border-[2px] border-solid border-[#f6bbbb] justify-center items-center'>
            <div className='mt-3'>
                <img src={gdsc} alt="ed Logo" className="img-fluid mb-3"/> 
            </div>
            <div className='flex flex-col md:px-11 px-5 mb-11 text-center justify-center items-center mx-auto'>
              <div>
              <h2 className='text-2xl font-semibold'>Google Developer Student Club</h2>
              <hr className='border-[1px] md:w-[400px] border-[#130808]' />
              </div>

              <div className='mt-5'>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <p className=''><strong>About:</strong> GDSC MMMUT, which stands for Google Developer Student Club
                 at Madan Mohan Malaviya University of Technology, is a vibrant and student-driven community dedicated 
                 to fostering technological innovation and skill development among its members. Located at MMMUT, a prestigious
                  technical university in India, this student club serves as a hub for aspiring developers, tech enthusiasts, 
                  and innovators.
                    </p>
              </div>
              <h1 className='mb-3 text-[19px] font-bold text-[#bc5050] '>Key Highlights of GDSC MMMUT:</h1>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Tech Enthusiast Community:</strong> GDSC MMMUT is home to a diverse community of students passionate about technology.
                 It provides a supportive environment for individuals who want to explore the latest trends in tech and 
                 collaborate on innovative projects.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Learning and Skill Enhancement: </strong> The club organizes various workshops, seminars, and hands-on
                 coding sessions to help members develop practical skills in areas like web development, mobile app
                  development, machine learning, artificial intelligence, and more.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Industry Connect: </strong> GDSC MMMUT facilitates interactions between its members and industry professionals, fostering valuable
                 networking opportunities and insights into real-world tech challenges and solutions.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <li><strong>Hackathons and Competitions: </strong> The club hosts hackathons and coding competitions to encourage creativity and problem-solving abilities.
                 These events offer a platform for members to showcase their talent and compete on a global scale.</li>
              </div>
              <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                <p><strong>Google Developer Resources: </strong> As an officially recognized Google Developer Student Club, GDSC MMMUT benefits from access to Google's
                 resources, including learning materials, cloud credits, and the opportunity to collaborate on Google-related projects.</p>
              </div>  
                  <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                  <p><strong>Open Source Contributions: </strong> Members are encouraged to contribute to open-source projects, enhancing their coding skills and making a positive impact on the broader developer community.</p>
                  </div>
                  <div className='bg-[#ffd18d] px-2 py-2 rounded-xl mb-3 cursor-pointer' >
                  <p><strong>Community Outreach: </strong> Beyond technical skills, GDSC MMMUT also focuses on community service and outreach programs, emphasizing the importance of using technology for social good.</p>
                  </div>
              </div>

            </div>
        </div>
    </>
  )
}


export default GDSC