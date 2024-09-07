"use client";
import React, { useState } from 'react'
import logo from '../img/logo.png'
import Link from 'next/link'
import { IoPersonOutline } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { AiOutlineProduct } from "react-icons/ai";
import { MdArticle } from "react-icons/md";
import { MdContactEmergency } from "react-icons/md";


const Navbar = () => {

    const [sepet, setSepet] = useState(false)

    const sepetOpen = () => {
        setSepet(true)
    }

    const sepetClose = () => {
        setSepet(false)
    }

    const logoClick = () => {
        window.location.href = "/"
    }

    const [search, setSearch] = useState(false)

    const searchOpen = () => {
        setSearch(true)
    }

    const searchClose = () => {
        setSearch(false)
    }

    const favorites = () => {
        window.location.href = "/favoriler"
    }


    return (
        <nav className='fixed z-50 sm:absolute sm:flex sm:flex-row sm:animate-slide-in-from-left'>

            <div className='sm:flex sm:flex-row'>

                <p onClick={logoClick} className=' absolute text-[24px] w-[220px] mt-3 ml-5 font-bold text-[16px] sm:left-[55px] sm:top-[20px] sm:text-[24px] sm:mr-[20px] sm:w-[200px] sm:w-[180px] cursor-pointer'>
                    <p> AtaRam & Market</p>
                </p>

                <div className='sm:flex sm:flex-row sm:ml-[830px]'>

                    <div>
                        <IoSearchOutline onClick={searchOpen} className='ml-[280px] text-[25px] mt-4 sm:text-[40px] sm:ml-[400px] sm:mt-5 absolute sm:transition-transform sm:duration-200 sm:transform sm:hover:scale-125 sm:hover:text-blue-500 sm:cursor-pointer' />
                    </div>

                    {search ? (
                        <div id='search' className='sm:absolute sm:z-10 sm:bg-black sm:rounded-b-[100px] sm:w-[1519px] sm:h-[145px] sm:ml-[-830px]'>

                            <input
                                className='sm:w-[1000px] sm:ml-[260px] sm:mt-[45px] sm:h-[50px] sm:border-2 sm:border-gray-800 sm:bg-black sm:rounded-[200px] sm:placeholder:text-[25px] sm:pl-5'
                                type="text" placeholder='Ürün Aratınız..' />

                            <IoSearchOutline className='ml-5 sm:text-[35px] sm:ml-[1205px] sm:mt-[-42px] absolute cursor-pointer sm:hover:text-blue-800 sm:transition-transform sm:duration-200 sm:transform sm:hover:scale-125' />

                            <IoIosClose onClick={searchClose} className='sm:text-[50px] sm:ml-[1270px] sm:mt-[-50px] sm:transition-transform sm:duration-200 sm:transform sm:hover:scale-125 sm:cursor-pointer sm:hover:text-red-600' />
                        </div>
                    ) : null}

                    <IoIosHeartEmpty onClick={favorites} className='mt-[300px] sm:text-[40px] absolute sm:cursor-pointer sm:ml-[450px] sm:mt-5 sm:transition-transform sm:duration-200 sm:transform sm:hover:scale-125 sm:hover:text-red-500' />

                    <div className='top-[300px] sm:top-[0px] sm:cursor-pointer sm:ml-[520px] relative sm:w-[130px] sm:transition-transform sm:duration-200 sm:transform sm:hover:scale-125 sm:hover:text-blue-500 sm:max-w-[130px]'>

                        <IoPersonOutline className='sm:text-[32px] sm:sm:text-[35px] sm:ml-[40px] sm:mt-[20px]' />

                        <p className='sm:text-[14px] sm:sm:mt-[-29px] sm:font-bold sm:ml-[78px] sm:mt-[-17px]'>Giriş Yap</p>

                    </div>

                    <CiShoppingBasket onClick={sepetOpen} className='ml-[315px] text-[26px] absolute mt-[-25px] sm:text-[45px] sm:hover:text-blue-500 sm:cursor-pointer sm:ml-[-150px] sm:mt-4 sm:relative sm:transition-transform sm:duration-200 sm:transform sm:hover:scale-125' />
                </div>

                {sepet ? (
                    <div id='sepet' className='sm:bg-black sm:w-[400px] sm:h-[780px] sm:ml-[1120px] sm:z-10 sm:fixed sm:rounded-l-[130px]'>
                        <IoIosClose onClick={sepetClose} className='sm:cursor-pointer sm:text-[50px] sm:ml-[345px] sm:hover:text-red-600 sm:transition-transform sm:duration-200 sm:transform sm:hover:scale-125' />
                    </div>
                ) : null}

                <hr className='w-[483px] mt-5 sm:bg-white sm:border-[0,5px] absolute sm:top-[55px] sm:w-[1450px] sm:ml-[45px]' />
            </div>



            <div className='fixed mt-[200px] left-0 w-[350px] bg-black py-2 z-50'>
                <div className='flex justify-around items-center'>
                    <Link className='text-white text-xs sm:text-base hover:text-blue-400 flex items-center' href="/">
                        <CiHome className='text-2xl sm:hidden' />
                        <span className='ml-2 sm:ml-0'>Ana Sayfa</span>
                    </Link>
                    <Link className='text-white text-xs sm:text-base hover:text-blue-400 flex items-center' href="/tüm-ürünler">
                        <AiOutlineProduct className='text-2xl sm:hidden' />
                        <span className='ml-2 sm:ml-0'>Tüm Ürünler</span>
                    </Link>
                    <Link className='text-white text-xs sm:text-base hover:text-blue-400 flex items-center' href="/hakkimizda">
                        <MdArticle className='text-2xl sm:hidden' />
                        <span className='ml-2 sm:ml-0'>Hakkımızda</span>
                    </Link>
                    <Link className='text-white text-xs sm:text-base hover:text-blue-400 flex items-center' href="/iletisim">
                        <MdContactEmergency className='text-2xl sm:hidden' />
                        <span className='ml-2 sm:ml-0'>İletişim</span>
                    </Link>
                </div>
            </div>

        </nav>

    )
}

export default Navbar