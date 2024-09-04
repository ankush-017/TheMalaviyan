import React, { useState } from 'react';

import FlipCard from './FlipCard/FlipCard';
import LongIntro from './FlipCard/LongIntro';

function Senior() {

  return (
    <>
      <div className='min-h-screen bg-gray-100 flex mb-11 flex-wrap mt-11 items-center gap-7 justify-center'>
          <FlipCard front={
            <div className='text-3xl mx-11 text-center bg-[#fff] text-black font-semibold px-7 py-3 rounded-2xl'>
              <h1>1. How to Give Your Name When Asked by Any Senior:</h1>
            </div>
          } 
          back={ 
            <div className='md:text-2xl text-[22px] mx-11 text-center bg-[#d1fcff] text-red-700 font-semibold px-7 py-3 rounded-2xl'>
              <h1>- Good Morning/Afternoon/Evening ... Respected Senior Sir/Ma'am</h1>
              <h1>- My name is _______ I am from ________ Branch B.Tech first year</h1>
              <h1>- I am from _______ (Residing City)</h1>
              <h1>- My Hobbies are ..... and ..... (two performable Hobbies) </h1>
            </div>
          }
          />


          <FlipCard front={
            <div className='text-3xl mx-11 text-center bg-[#fff] text-black font-semibold px-7 py-3 rounded-2xl'>
              <h1>2. Format to Ask Name of Your Senior Sir:</h1>
            </div>
          }
          back={ 
            <div className='text-[22px] md:text-2xl mx-11 text-center bg-[#d1fcff] text-red-700 font-semibold px-7 py-3 rounded-2xl'>
              <h1>- Good Morning/Afternoon/Evening ... Respected Senior Sir</h1>
              <h1>- My name is ________ of _________ branch B.Tech 1st year.</h1>
              <h1>- May I have the pleasure to know your good name and divine branch please sir?</h1>
            </div>
          }
          />


          <FlipCard front={
            <div className='text-3xl  mx-11 text-center bg-[#fff] text-black font-semibold px-7 py-3 rounded-2xl'>
              <h1>3. Format to Ask Name of Your Senior Ma'am:</h1>
            </div>
          }
          back={ 
            <div className='md:text-xl text-[22px] mx-11 text-center bg-[#d1fcff] text-red-700 font-semibold px-7 py-3 rounded-2xl'>
              <h1>- Good Morning/Afternoon/Evening ... Respected Senior Ma'am</h1>
              <h1>- My name is ________ of ________ branch B.Tech 1st year.</h1>
              <h1>- May I have single pleasure, double honor, triple delight
              To know your good name and divine branch. Please please please Ma'am.</h1>
              
            </div>
          }
          />
          <FlipCard front={
            <div className='text-3xl mx-11 text-center bg-[#fff] text-black font-semibold px-7 py-3 rounded-2xl'>
              <h1>4. When You Are Asked to Tell About Your Senior:</h1>
            </div>
          }
          back={ 
            <div className='md:text-xl  text-[22px] mx-11 text-center bg-[#d1fcff] text-red-700 font-semibold px-7 py-9 rounded-2xl'>
              <h1>- Respected senior _______ sir/ma'am
                ._______
                Branch,_______(Course)_______year.</h1>
              <h1>- eg. Respected senior ABC sir Computer
                 Science and Engineering Branch, BTech. (__) year.</h1>
              <p className='text-xl'><strong>Never say 4th year , 
                say Final year</strong></p>
            </div>
          }
          />

      </div>
      
      <LongIntro front={
            <div className='text-3xl mx-11 text-center bg-[#fff] text-black font-semibold px-7 py-3 rounded-2xl'>
              <h1>Long Introduction Format:</h1>
            </div>
          }
          back={ 
            <div className='md:text-xl text-[18px] mx-11 text-center bg-[#d1fcff] text-red-700 font-semibold px-7 py-3 rounded-2xl'>
              <h1>
              Good Morning/Afternoon/Evening ... Respected Senior Sir/Ma'am

My name is ______. My father's name is Mr. ___________. I am from _______ (Residing City).

I am pursuing my B.Tech degree from Madan Mohan Malaviya University of Technology Gorakhpur.

I have given the Joint Entrance Examination Main in which my general rank was _____ and through General/OBC/SC/ST/KM/PWD/NRI Counselling I got _________ Branch (branch of Engg. like EE, CSE, etc.).

I have also given the Joint Entrance Examination Advance (optional).

I have completed my Intermediate from ________ (School's Name) which is affiliated to _______ board (board name like ICSE/CBSE) with an aggregate/cumulative grade point average of _________ in year ______.

I have completed my high school from _________ (School's Name) which is affiliated to _______ board (board name like ICSE/CBSE) with an aggregate/cumulative grade point average of ________.

I have been allotted room no. _______ in _________ Bhavan (Hostel name).

My room mothers/fathers are respected senior _______ Ma’am/Sir ______ branch and respected senior ______ Ma’am/Sir ______ branch.

My hobbies are _______ (hobbies should be performable).

Thank you Sir/Ma’am.
              </h1>
            </div>
          }
      />
    </>
  )
}
export default Senior;