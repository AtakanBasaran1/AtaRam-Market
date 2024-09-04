"use client";
import React, { useState } from 'react'
import logo from '../img/logo.png'
import Link from 'next/link'
import { IoPersonOutline } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";


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
        <div className=' absolute flex  flex-row animate-slide-in-from-left'>

            <div className='flex flex-row'>


                <p onClick={logoClick} className='relative left-[48px] top-[-34px] font-bold text-[16px] sm:left-[55px] sm:top-[20px] sm:text-[24px] sm:mr-[20px] w-[135px] sm:w-[180px] cursor-pointer'>
                    AtaRam & Market
                </p>



                <div className='flex flex-row ml-[630px]'>


                    <div>
                        <IoSearchOutline onClick={searchOpen} className='text-[40px] ml-[400px] mt-5 absolute transition-transform duration-200  transform hover:scale-125 hover:text-blue-500 cursor-pointer' />
                    </div>


                    {search ? (
                        <div id='search' className='absolute z-10 bg-black rounded-b-[100px] w-[1519px] h-[145px] ml-[-830px]'>

                            <input

                                className='w-[1000px] ml-[260px] mt-[45px] h-[50px] border-2 border-gray-800 bg-black rounded-[200px] placeholder:text-[25px] pl-5'
                                type="text" placeholder='Ürün Aratınız..' />

                            <IoSearchOutline className='text-[35px] ml-[1205px] mt-[-42px] absolute cursor-pointer hover:text-blue-800 transition-transform duration-200  transform hover:scale-125 ' />

                            <IoIosClose onClick={searchClose} className='text-[50px] ml-[1270px] mt-[-50px] transition-transform duration-200  transform hover:scale-125 cursor-pointer hover:text-red-600' />
                        </div>
                    ) : null}

                    <IoIosHeartEmpty onClick={favorites} className='text-[40px] absolute cursor-pointer ml-[450px] mt-5 transition-transform duration-200 transform hover:scale-125 hover:text-red-500 ' />

                    <div className=' cursor-pointer ml-[520px] relative w-[130px] transition-transform duration-200  transform hover:scale-125 hover:text-blue-500 max-w-[130px]  '>



                        <IoPersonOutline className='text-[32px] sm:text-[35px] ml-[40px] mt-[20px]  ' />

                        <p className='text-[14px] sm:mt-[-29px] font-bold ml-[78px] mt-[-17px] '>Giriş Yap</p>

                    </div>

                    <CiShoppingBasket onClick={sepetOpen} className='text-[45px]  hover:text-blue-500 cursor-pointer ml-[-150px]  mt-4  relative transition-transform duration-200  transform hover:scale-125' />






                </div>

                {sepet ? (
                    <div id='sepet' className='bg-black w-[400px] h-[780px] ml-[1120px] z-10 fixed rounded-l-[130px]'>
                        <IoIosClose onClick={sepetClose} className='cursor-pointer text-[50px] ml-[345px] hover:text-red-600 transition-transform duration-200  transform hover:scale-125' />
                    </div>
                ) : null}

                <hr className='bg-white border-[0,5px] absolute top-[70px] w-[1450px] ml-[45px]' />
            </div>

            <div className='w-[500px] h-[50px] absolute mt-[8px] ml-[550px]'>
                <Link className='relative top-[15px] left-[20px] text-white font-semibold mr-5 hover:text-blue-400 ' href="/">Ana Sayfa</Link>
                <Link className='relative top-[15px] left-[20px] text-white font-semibold mr-5 hover:text-blue-400 ' href="/tüm-ürünler">Tüm Ürünler</Link>
                <Link className='relative top-[15px] left-[20px] text-white font-semibold mr-5 hover:text-blue-400' href="/hakkimizda">Hakkımızda</Link>
                <Link className='relative top-[15px] left-[20px] text-white font-semibold hover:text-blue-400' href="/iletisim">İletişim</Link>

            </div>



        </div>
    )
}

export default Navbar