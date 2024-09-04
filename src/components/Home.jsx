import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import Pt from '../Images/Pt.png'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../store/menuSlice';
import { useEffect } from 'react';


function Home() {

    const dispatch = useDispatch();
    const isMenuOpen = useSelector((state)=> state.menu.isMenu);


    

  return (
   <>
        <div className={`mt-5 ${isMenuOpen? "pointer-events-none" : "pointer-events-auto"} ${isMenuOpen? "" : "blur-[11px]" }`} onClick={()=> dispatch(toggleMenu())}>

            <div className='flex flex-col items-center bg-[#eee0e0] rounded-br-[300px] rounded-bl-[300px] w-full h-[530px]'>
            
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Baskervville+SC&family=Bodoni+Moda+SC:ital,opsz,wght@0,6..96,900;1,6..96,900&family=Bungee+Tint&display=swap');
            </style>
                <h1 className='md:text-[50px] font-head mt-3 text-[30px] font-semibold text-center'>
                Madan Mohan Malaviya University of Technology
                </h1>

                <Card/>
            </div>


            <div class="container" className='flex flex-col'>
                    <div className='flex flex-col items-center'>
                    <h1 className='py-5 text-center font-semibold md:text-[35px] text-2xl md:mt-11 mt-8
                            text-[#e63939]'>Pt. Madan Mohan Malaviya</h1>
                        <hr className='border-[#e63939] border-[2px] md:w-[500px] w-[330px]' />
                    </div>
                <div className='flex md:flex-row flex-col mt-5'>

                    <div class="image-side" className='md:w-[35%] flex flex-col items-center justify-center '>
                    <img src={Pt} alt="Person Image" className='h-[400px] rounded-full' />
                    <p className='text-center text-[18px] bg-[#ff9100] md:px-3 mt-3 py-2 rounded-lg'><strong>Born:</strong> 25 December 1861 || <strong>Died:</strong> 12 November 1946</p>
                    </div>

                    <div class="experience-side" className='md:w-[55%] text-[17px] flex mt-3 flex-col text-center justify-center md:mr-[40px]
                     md:px-1 px-5 items-center mb-[50px]'>
                        <p className='mb-5 text-center'>Madan Mohan Malaviya was an eminent Indian scholar, educational reformer, and politician who played a pivotal role in the Indian independence movement. He was honored with the title of <strong>Pandit</strong> , reflecting his esteemed status.</p>
                        <p className='mb-5 text-center'>Malaviya's significant contributions include co-founding the <strong>Banaras Hindu University (BHU)</strong> in 1916, under the 1915 BHU Act. BHU is one of the largest residential universities in Asia and globally, with a diverse student body across numerous disciplines. He served as the Vice Chancellor from 1919 to 1938.</p>
                        <p className='mb-5 text-center'>Additionally, Malaviya was instrumental in establishing <strong>The Bharat Scouts and Guides</strong> and founded the influential English newspaper <strong>The Leader</strong> in 1919, published from Allahabad. He also chaired Hindustan Times from 1924 to 1946 and was pivotal in launching its Hindi edition, <strong>Hindustan Dainik</strong>, in 1936.</p>
                        <p className='mb-5 text-center'>Malaviya was a strong advocate for education, particularly in the fields of science and technology. He believed in the <strong>power of education</strong> to uplift society and worked tirelessly to make education accessible to all.</p>
                        <p className='mb-5 text-center'>In recognition of his exceptional contributions, Malaviya was posthumously awarded the <strong>Bharat Ratna</strong>, India's highest civilian honor, on 24 December 2014, a day before what would have been his 153rd birthday.</p>
                    </div>
                </div>

            </div>
        </div>

   </>
  )
}

export default Home;