import React from 'react'
import img from '../Images/tagore.jpg'
import PropCard from './PropCard'
import vs from '../Images/vs.jpg'
import Rj from '../Images/ramanujan.jpg'
import Amb from '../Images/ambedkar.jpg'
import Tl from '../Images/tilak.jpg'
import raman from '../Images/raman.jpg'
import sb from '../Images/subhash.jpg'
import { toggleMenu } from '../store/menuSlice'
import { useDispatch, useSelector } from 'react-redux'

function BoysHostel() {

  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state)=> state.menu.isMenu);

  return (
    <>
      <div onClick={(()=> dispatch(toggleMenu()))}>
        <h1 className='text-center mt-5 text-[40px] font-head font-semibold'>Boy's Hostels</h1>
        <hr className='mb-3 border-[2px] border-[#f66767] border-solid ' />
        {/* <div className='flex max-w-[700px] flex-col bg-[#fcecb4] rounded-3xl px-3 py-5 justify-center items-center'>
            <div className=''>
              <img src={img} alt="" className='rounded-3xl'  />
            </div>
            <div className='text-center mt-3'>
              <h1 className='text-3xl font-semibold'>Tagore Bhawan</h1>
              <p className='mt-2 text-xl'>Two and Four Seater rooms, only given to the First Year Boys.</p>
            </div>
        </div> */}
        <div className='flex flex-wrap font-head justify-center items-center mb-7 mt-11 gap-7'>
        <PropCard img={img} head={"Tagore Bhawan"} para={"Two and Four Seater rooms, only given to the First Year Boys."} warden={"Warden: Dr. Sudhanshu Verma, Dr. Dheerendra Singh"} />
        <PropCard img={vs} head={"Vishveswaraya Bhawan"} para={"Two and Four Seater rooms, only given to the First Year Boys."} warden={"Warden: Dr. Sudhanshu Verma, Dr. Dheerendra Singh"} />
        <PropCard img={Rj} head={"Ramanujam Bhawan"} para={"Only Four Seater Rooms, Given to Second Year Boys."} warden={"Warden: Shri Manish Kumar Srivastava, Dr. Ravi Shanker"} />
        <PropCard img={Amb} head={"Ambedkar Bhawan"} para={"Two and Four Seater rooms, given to PHD Final Year and Second Year Boys."} warden={"Warden: Dr. R. B. Prasad, Dr. Pradeep Muley"} />
        <PropCard img={Tl} head={"Tilak Bhawan"} para={"Only Four Seater Rooms, Given to Second Year Boys."} warden={"Warden: Dr. Gagandeep Bharti, Dr. Prateek Khare"} />
        <PropCard img={raman} head={"Raman Bhawan"} para={"Given to Third Year Boys."} warden={"Warden: Prof. Rajesh Kumar Yadav, Dr. Prashant Saini, Sri. Rohit Kumar"} />
        <PropCard img={sb} head={"Subhash Bhawan"} para={"Given to Final Year Boys."} warden={"Warden: Prof. Sudhir Kumar Srivastava, Dr. Devesh Kumar, Dr. Anupam Sahu"} />
        </div>
      </div>
    </>
  )
}


export default BoysHostel