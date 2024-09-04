import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import { toggleMenu } from '../store/menuSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isHostelDropdownOpen, setHostelDropdownOpen] = useState(false);
    const isMenuOpen = useSelector((state)=> state.menu.isMenu);

    const dispatch = useDispatch();

    const navItems = [
        {
            name: "Home",
            url: '/',
        },
        {
            name: "Explore",
            url: '/explore',
            dropdown: true, 
            subItems: [
                { name: "Post", url: '/explore/post' },
                { name: "Chat", url: '/explore/chat' },
                { 
                    name: "Hostel",
                    url: '/explore/hostel',
                    dropdown: true,
                    subItems: [
                        { name: "Boy's Hostel", url: '/explore/hostel/boyshostel' },
                        { name: "Girl's Hostel", url: '/explore/hostel/girlshostel' }
                    ]
                },
            ]
        },
        {
            name: "Society",
            url: '/society'
        },
        {
            name: "Senior",
            url: '/senior'
        },
        {
            name: "Contact",
            url: '/contact'
        },
    ];

    return (
        <>
            <header className={`z-[1]`}>
                <nav className='text-black flex justify-between'>
                    <div className='ml-4 mt-4 font-Bungee Tint'>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Bungee+Tint&display=swap');
                        </style>
                        <Link to='/'>
                            <h1 className={`text-[30px] font-semibold text-[#e63939] font-bungee`}>The Malaviyan</h1>
                            <hr className='border-[#e63939] border-[2px]' />
                        </Link>
                    </div>
                    <ul className={`md:ml-auto md:mr-11 md:mt-4 md:flex md:flex-wrap md:p-0 p-16 mt-20 ${isMenuOpen? "hidden" : "block"} md:static md:bg-white absolute z-[100] md:text-[16px] text-[20px] font-semibold md:z-auto bg-[#92bec9]  rounded-r-[200px]`}>
                        {navItems.map((item) => (
                            <li key={item.name} className='mr-[10px] relative'>
                                {item.dropdown ? (
                                    <>
                                        <button 
                                            onClick={() => (setDropdownOpen(!isDropdownOpen)) } 
                                            className='px-6 py-2 flex gap-2 duration-200 hover:bg-[#bc2e2e] hover:text-white rounded-full'
                                        >
                                            {item.name}
                                            <div>
                                                <FontAwesomeIcon icon={faAngleDown} />
                                            </div>
                                        </button>
                                        {isDropdownOpen && (
                                            <ul className='absolute left-0 mt-2 py-2 w-[200px] z-50 bg-white border rounded shadow-lg'>
                                                {item.subItems.map((subItem) => (
                                                    <li key={subItem.name} className="relative">
                                                        {subItem.dropdown ? (
                                                            <>
                                                                <button 
                                                                    onClick={() => setHostelDropdownOpen(!isHostelDropdownOpen)} 
                                                                    className=' px-4 py-2 text-black hover:bg-gray-100 flex justify-between items-center w-full'
                                                                >
                                                                    {subItem.name}
                                                                    <FontAwesomeIcon icon={faAngleDown} />
                                                                </button>
                                                                {isHostelDropdownOpen && (
                                                                    <ul className='absolute left-full top-0 mt-2 py-2 w-[200px] z-50 bg-white border rounded shadow-lg' onClick={(()=> dispatch(toggleMenu()))}>
                                                                        {subItem.subItems.map((nestedItem) => (
                                                                            <li key={nestedItem.name}>
                                                                                <NavLink 
                                                                                    to={nestedItem.url} 
                                                                                    className={({ isActive }) => 
                                                                                        isActive ? 'block px-4 py-2 text-black bg-gray-200' : 
                                                                                        'block px-4 py-2 text-black hover:bg-gray-100'
                                                                                    }
                                                                                    onClick={() => {
                                                                                        setDropdownOpen(false);
                                                                                        setHostelDropdownOpen(false);
                                                                                        
                                                                                    }}
                                                                                >
                                                                                    {nestedItem.name}
                                                                                </NavLink>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </>
                                                        ) : (
                                                            <NavLink 
                                                                to={subItem.url} 
                                                                className={({ isActive }) => 
                                                                    isActive ? 'block px-4 py-2 text-black bg-gray-200' : 
                                                                    'block px-4 py-2 text-black hover:bg-gray-100'
                                                                }
                                                                onClick={() => (setDropdownOpen(false), dispatch(toggleMenu()))}
                                                            >
                                                                {subItem.name}
                                                            </NavLink>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <NavLink 
                                    onClick={() => (setDropdownOpen(false),setHostelDropdownOpen(false),dispatch(toggleMenu()))}
                                        to={item.url} 
                                        className={({ isActive }) => 
                                            isActive ? 'inline-block px-6 py-2 duration-200 bg-[#bc2e2e] font-semibold text-white rounded-full' : 
                                            'inline-block px-6 py-2 duration-200 hover:bg-[#bc2e2e] hover:text-white rounded-full'
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div  className='md:hidden mt-4 text-[32px] mx-auto' onClick={()=> dispatch(toggleMenu())}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>

                </nav>
            </header>
        </>

    );
}


export default Nav;