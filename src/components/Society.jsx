import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedOption } from '../store/optionSlice';
import TheEditorialBoard from './options/TheEditorialBoard';
import CES from './options/CES';
import CDC from './options/CDC';
import IEEE from './options/IEEE';
import GDSC from './options/GDSC';
import UIC from './options/UIC';
import SAE from './options/SAE';
import ECELL from './options/ECELL';
import Robotics from './options/Robotics';
import CS from './options/CULTURAL';
import DS from './options/DS';
import NSS from './options/NSS';
import { toggleMenu } from '../store/menuSlice';
import NCC from './options/NCC';
import { useEffect } from 'react';

const Society = () => {
    const dispatch = useDispatch();
    const selectedOption = useSelector((state) => state.option.selectedOption);

    const handleChange = (event) => {
        dispatch(setSelectedOption(event.target.value));
    };
    
    const isMenuOpen = useSelector((state)=> state.menu.isMenu);

    const renderOptionComponent = () => {
        switch (selectedOption) {
            case 'option1':
                return <TheEditorialBoard />;
            case 'option2':
                return <CES />;
            case 'option3':
                return <CDC />;
            case 'option4':
                return <IEEE />;
            case 'option5':
                return <GDSC />;
            case 'option6':
                return <UIC />;
            case 'option7':
                return <SAE />;
            case 'option8':
                return <ECELL />;
            case 'option9':
                return <Robotics />;
            case 'option10':
                return <CS />;
            case 'option11':
                return <DS />;
            case 'option12':
                return <NSS />;
            case 'option13':
                return <NCC />;
            default:
                return <div>Please select an option.</div>;
        }
    };



    return (
        <div className={`mt-7 mb-7 min-h-[320px] ${isMenuOpen? "pointer-events-auto" : "pointer-events-none"} flex items-center flex-col`} onClick={()=> dispatch(toggleMenu())}>
            <div className=''>
                <select id="options" value={selectedOption} className=' bg-[#e65050] rounded-2xl text-white py-3 px-4 ' onChange={handleChange}>
                    <option className='bg-white font-bold text-black' value="">Select a Board/Club/Society</option>
                    <option className='bg-white text-red-600' value="option1">The Editorial Board</option>
                    <option className='bg-white text-red-600' value="option2">CES</option>
                    <option className='bg-white text-red-600' value="option3">CDC</option>
                    <option className='bg-white text-red-600' value="option4">IEEE</option>
                    <option className='bg-white text-red-600' value="option5">GDSC</option>
                    <option className='bg-white text-red-600' value="option6">UIC</option>
                    <option className='bg-white text-red-600' value="option7">SAE</option>
                    <option className='bg-white text-red-600' value="option8">E-cell</option>
                    <option className='bg-white text-red-600' value="option9">Robotics Club</option>
                    <option className='bg-white text-red-600' value="option10">Cultural Synod</option>
                    <option className='bg-white text-red-600' value="option11">Day Scholar's Club</option>
                    <option className='bg-white text-red-600' value="option12">NSS</option>
                    <option className='bg-white text-red-600' value="option13">NCC</option>
                </select>
            </div>
            <div>
                {renderOptionComponent()}
            </div>
        </div>
    );
};


export default Society;