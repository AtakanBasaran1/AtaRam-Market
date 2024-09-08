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
        <nav id='nav' className=' fixed z-[1000] sm:absolute sm:flex sm:flex-row sm:animate-slide-in-from-left'>

            <div className=' sm:flex sm:flex-row'>

                <span onClick={logoClick} className=' fixed text-[24px] w-[220px] mt-3 ml-5 font-bold text-[16px] sm:left-[55px] sm:top-[20px] sm:text-[24px] sm:mr-[20px] sm:w-[200px] sm:w-[180px] cursor-pointer'>
                    <p> AtaRam & Market</p>
                </span>


                <div className='sm:flex sm:flex-row mt-2 sm:ml-[810px]'>

                    <div>
                        <IoSearchOutline onClick={searchOpen} className='ml-[220px] text-[25px] mt-[18px] sm:text-[40px] sm:ml-[400px] sm:mt-5 absolute sm:transition-transform sm:duration-200 sm:transform sm:hover:scale-125 sm:hover:text-blue-500 sm:cursor-pointer' />
                    </div>

                    {search ? (
                        <div id='search' className='w-[400px] border-2 border-gray-700 mt-[-10px] h-[55px] ml-[-20px] absolute z-50 bg-black sm:rounded-b-[100px] sm:w-[1550px] sm:h-[145px] sm:ml-[-825px] sm:mt-[-10px]'>

                            <input
                                className='w-[250px] ml-[70px] mt-3 sm:w-[1000px] sm:ml-[260px] sm:mt-[45px] sm:h-[50px] border-2 border-gray-800 bg-black rounded-[200px] placeholder:text-[14px] sm:placeholder:text-[25px] pl-5'
                                type="text" placeholder='Ürün Aratınız..' />

                            <IoSearchOutline className='ml-[290px] mt-[-22px] sm:text-[35px] sm:ml-[1205px] sm:mt-[-42px] absolute cursor-pointer sm:hover:text-blue-800 sm:transition-transform sm:duration-200 sm:transform sm:hover:scale-125' />

                            <IoIosClose onClick={searchClose} className='ml-[320px] text-[23px] mt-[-25px] sm:text-[50px] sm:ml-[1270px] sm:mt-[-50px] sm:transition-transform sm:duration-200 sm:transform sm:hover:scale-125 sm:cursor-pointer sm:hover:text-red-600' />
                        </div>
                    ) : null}

                    <IoIosHeartEmpty onClick={favorites} className='mt-[18px] text-[24px] ml-[285px] sm:text-[40px] absolute sm:cursor-pointer sm:ml-[450px] sm:mt-5 sm:transition-transform sm:duration-200 sm:transform sm:hover:scale-125 sm:hover:text-red-500' />

                    <div className='top-[300px] sm:top-[0px] sm:cursor-pointer sm:ml-[520px] relative sm:w-[130px] sm:transition-transform sm:duration-200 sm:transform sm:hover:scale-125 sm:hover:text-blue-500 sm:max-w-[130px]'>


                        <IoPersonOutline className='text-[23px]  relative ml-[320px] top-[-282px]   ' />
                        <IoPersonOutline className='sm:block hidden absolute text-[36px] mt-[-2px] ml-8 ' />

                        <p className='hidden sm:block sm:text-[14px] sm:mt-[5px] sm:font-bold sm:ml-[75px] sm:mt-[-17px]'>Giriş Yap</p>

                    </div>

                    <CiShoppingBasket onClick={sepetOpen} className='ml-[250px] text-[28px] absolute mt-[-7px] sm:text-[45px] sm:hover:text-blue-500 sm:cursor-pointer sm:ml-[-150px] sm:mt-4 sm:relative sm:transition-transform sm:duration-200 sm:transform sm:hover:scale-125' />
                </div>

                {sepet ? (
                    <div id='sepet' className='w-[400px] absolute sm:relative border-2 mt-[-35px]  border-gray-700 h-[660px] ml-[-20px] z-50 bg-black sm:rounded-b-[80px] sm:w-[1540px] sm:h-[750px] sm:ml-[-1365px] sm:mt-[-10px]'>
                        <div className='fixed'>
                            <IoIosClose
                                onClick={sepetClose}
                                className='cursor-pointer text-[35px] ml-[330px] mt-3 sm:text-[50px] sm:ml-[1470px] hover:text-red-600 transition-transform duration-200 transform hover:scale-125'
                            />
                        </div>
                    </div>
                ) : null}

                <hr className='w-[450px] mt-10 k border-gray-700 sm:border-[0,5px] absolute sm:top-[55px] sm:w-[1450px] sm:ml-[35px]' />
            </div>



            <div className='fixed sm:block hidden mt-[30px] left-[580px] w-[350px] py-2'>
                <div className='flex justify-around items-center'>
                    <Link className='text-white text-xs sm:text-base hover:text-blue-400 flex items-center' href="/">

                        <span className='ml-2 sm:ml-0'>Ana Sayfa</span>
                    </Link>
                    <Link className='text-white text-xs sm:text-base hover:text-blue-400 flex items-center' href="/tüm-ürünler">

                        <span className='ml-2 sm:ml-0'>Tüm Ürünler</span>
                    </Link>
                    <Link className='text-white text-xs sm:text-base hover:text-blue-400 flex items-center' href="/hakkimizda">

                        <span className='ml-2 sm:ml-0'>Hakkımızda</span>
                    </Link>
                    <Link className='text-white text-xs sm:text-base hover:text-blue-400 flex items-center' href="/iletisim">

                        <span className='ml-2 sm:ml-0'>İletişim</span>
                    </Link>
                </div>
            </div>

        </nav>

    )
}

export default Navbar