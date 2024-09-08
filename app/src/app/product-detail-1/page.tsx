"use client";
import React, { useState } from 'react'
import pc2 from '../img/pc2.png'
import payments from '../img/payments.png'
import kullanicifoto1 from '../img/kullanicifotopc1.png'
import kullanicifoto2 from '../img/kullanicifotopc2.png'
import world from '../img/world.png'
import garanti from '../img/garanti.png'
import maximum from '../img/maximum.png'

import { LuBox } from "react-icons/lu";
import { TbPoint } from "react-icons/tb";
import { IoStarOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GoInbox } from "react-icons/go";
import { RiArticleLine } from "react-icons/ri";
import { TbArticle } from "react-icons/tb";
import { CiInboxIn } from "react-icons/ci";
import { FcCheckmark } from "react-icons/fc";


const page = () => {

    const [miktar, setMiktar] = useState(0)

    const arttir = () => {
        if (miktar > 9) {
            alert("Bu üründen en fazla 10 adet satın alabilirsiniz.")
        } else {
            const yeniMiktar = miktar + 1
            setMiktar(yeniMiktar)
        }

    }

    const azalt = () => {
        if (miktar > 0) {
            setMiktar(miktar - 1)
        }
    }

    const [ürünAciklamasi, setÜrünAciklamasi] = useState(true)

    const [degerlendirmeler, setDegerlendirmeler] = useState(false)

    const [taksit, setTaksit] = useState(false)

    const [iade, setİade] = useState(false)

    const ürünAciklamasiOpen = () => {
        setÜrünAciklamasi(true)
        setİade(false)
        setTaksit(false)
        setDegerlendirmeler(false)
    }

    const degerlendirmelerOpen = () => {
        setDegerlendirmeler(true)
        setİade(false)
        setTaksit(false)
        setÜrünAciklamasi(false)
    }

    const taksitOpen = () => {
        setTaksit(true)
        setİade(false)
        setDegerlendirmeler(false)
        setÜrünAciklamasi(false)
    }

    const iadeOpen = () => {
        setİade(true)
        setTaksit(false)
        setDegerlendirmeler(false)
        setÜrünAciklamasi(false)
    }






    return (
        <div>
            <div className='sm:transition-transform sm:duration-500 sm:hover:scale-105'><img id='pc2' className='w-[250px] ml-[70px] mt-[100px] sm:w-[600px] sm:mt-[200px] absolute sm:ml-[140px]  cursor-pointer' src={pc2.src} alt="" /></div>


            <div id='pcbaslik'>

                <h1 className='text-[15px] mt-[320px] ml-[70px] sm:text-[24px] sm:ml-[900px] sm:mt-[200px] absolute font-bold text-center'>Acer Nitro 5 <br /> <span>AN515-58-70VR NH.QM0EY.00B</span> <br /> <span>i7-12650H 8GB 1TB SSD</span> RTX 4060 15,6'' <br /> <span>IPS Gaming (Oyuncu) Notebook</span></h1>
                <p className='text-[20px] mt-[420px] ml-[160px] sm:text-[28px] absolute sm:ml-[1055px] border-b-[1px] sm:border-b-2 sm:mt-[350px]  font-bold text-yellow-500'>28.999₺</p>



                <div className='sm:mt-8 mt-[100px] absolute'>

                    <p className='text-[12px] ml-[95px] mt-[360px] sm:text-[16px] w-[200px] font-semibold sm:ml-[970px] sm:mt-[380px] sm:w-[300px] absolute'> <span className='text-green-500'>RF29DW239</span> Kodu ile ekstra 10% İndirim!</p>
                    <input
                        className='w-[100px] h-[25px] mt-[400px] ml-[80px] placeholder:text-[11px] placeholder:text-blue-300 border-green-500 outline-none pl-1 sm:placeholder:text-[18px] sm:pl-3 absolute sm:ml-[930px] sm:mt-[420px] bg-black border-2 rounded-[5px] sm:h-[35px] sm:w-[200px]'
                        type="text" placeholder='İndirim Kodunu Yaz' />
                    <button

                        className='w-[100px] text-[12px] h-[25px] mt-[400px] ml-[200px] absolute sm:ml-[1155px] sm:mt-[420px] sm:text-[18px] border-2 border-green-500 sm:h-[35px] hover:bg-blue-800 hover:border-green-500 bg-black sm:w-[120px] rounded-[5px]'
                        type='submit'>Kodu Kullan</button>
                </div>
                <hr className='mt-[540px] ml-[65px] w-[250px] sm:w-[400px] absolute sm:ml-[903px] sm:mt-[510px]' />

                <div className='mt-[550px] ml-10 sm:text-[32px] sm:ml-[920px] sm:mt-[530px] absolute'>
                    <h1 className='ml-[70px] sm:text-[25px] text-[19px] sm:ml-[7px]'>Miktar</h1>

                    <div className='flex ml-[-4px] flex-row absolute sm:ml-7 sm:mt-[-15px]'>
                        <button className='text-[30px] ml-[70px] mt-[-10px] sm:text-[47px] sm:ml-[-30px] absolute hover:text-blue-500' onClick={arttir}><p>+</p></button>
                        <p className='ml-[93px] text-[17px] mt-[2px] sm:mt-[10px] sm:ml-[0px] sm:text-[27px] text-yellow-500'> {miktar} </p>
                        <button className='text-[28px] ml-[7px] mt-[-8px] sm:text-[47px] sm:ml-[10px] hover:text-blue-500' onClick={azalt}><p>-</p></button>
                    </div>

                    <div className='flex flex-col sm:flex-row mt-[-31px] ml-[140px] sm:ml-[120px] sm:mt-[-38px]'>

                        <LuBox className='text-[14px] mt-[9px] text-blue-600 absolute sm:mt-[13px]' /> <p className='sm:text-[16px] mt-2 text-[12px] ml-5'>Ücretsiz Kargo!</p>
                        <TbPoint className='text-[26px] ml-[-5px] mt-[33px] text-green-600 absolute sm:mt-[7px] sm:ml-[130px]' /> <p className='sm:text-[15px] sm:mt-[9px] mt-[12px] text-[12px] ml-5 sm:ml-[38px]'>Ürün Stokta!</p>


                    </div>

                </div>
                <button className='w-[180px] mt-[620px] ml-[100px] bg-blue-800 h-[30px] sm:w-[400px] sm:h-[42px] rounded-[20px] absolute sm:ml-[903px] sm:mt-[635px] font-bold hover:bg-blue-600'>Sepete Ekle</button>

                <img className='w-[160px] mt-[660px] ml-[108px] sm:w-[350px] absolute sm:ml-[925px] sm:mt-[690px]' src={payments.src} alt="" />



            </div>
            <hr className='w-[450px] ml-[0px] top-[720px] sm:w-[1000px] sm:ml-[250px] relative sm:top-[850px] border-gray-500' />

            <div className='absolute mt-[750px] sm:mt-[900px]'>

                <aside className='sm:ml-[320px] sm:w-[2000px] sm:mt-10'>
                    <button id='sol' onClick={ürünAciklamasiOpen} className='text-[14px] h-[25px] ml-[40px] w-[120px] sm:text-[18px] hover:text-yellow-500 bg-orange-600 hover:bg-orange-400 sm:h-[35px] rounded-[15px] sm:w-[180px] mr-[50px] font-semibold '><p className='text-white'>Ürün Açıklaması</p></button>
                    <button id='sol' onClick={degerlendirmelerOpen} className='text-[14px] h-[25px] ml-[200px] mt-[-100px] w-[120px]  sm:text-[18px]  bg-orange-600 hover:bg-orange-400 sm:h-[35px] relative top-[-26px] rounded-[15px] sm:w-[180px] sm:ml-0 mr-[50px] sm:top-0 font-semibold'>Değerlendirmeler</button>
                    <button id='sağ' onClick={taksitOpen} className='text-[14px] h-[25px] ml-[40px] w-[120px]  sm:text-[18px]  bg-orange-600 hover:bg-orange-400 sm:h-[35px] relative rounded-[15px] sm:w-[180px] sm:ml-0 mr-[50px] sm:top-0 font-semibold'>Taksit Seçenekleri</button>
                    <button id='sağ' onClick={iadeOpen} className='text-[14px] h-[25px] ml-[195px] mt-[-100px] w-[130px]  sm:text-[18px] top-[-24px] bg-orange-600 hover:bg-orange-400 sm:h-[35px] relative rounded-[15px] sm:w-[180px] sm:ml-0 mr-[50px] sm:top-0 font-semibold'>İptal ve İade Koşulları</button>

                </aside>

            </div>

            {ürünAciklamasi ? (
                <div id='sol' className='mt-[870px] w-[300px] ml-8 sm:mt-[1050px] sm:w-[1230px] sm:ml-[150px] border-2 h-[1330px] sm:h-[800px] sm:text-[18px] font-bold flex flex-col sm:flex-row border-gray-500 rounded-[10px]'>

                    <h1 className='text-[25px] mt-3 ml-[65px] sm:text-[28px] absolute sm:ml-10 sm:mt-10'>Ürün Özellikleri</h1>

                    <aside className='mt-[140px]'>
                        <div className='ml-6  mt-5 w-[250px] flex flex-row border-2 border-gray-700 sm:w-[400px] pl-4  p-2 rounded-[10px]'>
                            <p className=' mr-[70px] sm:mr-[200px]  '>
                                Cihaz Ağırlığı
                            </p>
                            <p>
                                2 - 4 kg
                            </p>
                        </div>
                        <div className='ml-6  mt-5 w-[250px] flex flex-row border-2 border-gray-700 sm:w-[400px] pl-4  p-2 rounded-[10px]'>
                            <p className=' mr-[110px] sm:mr-[245px] '>
                                İşlemci
                            </p>
                            <p>
                                12650H
                            </p>
                        </div>
                        <div className='ml-6  mt-5 w-[250px] flex flex-row border-2 border-gray-700 sm:w-[400px] pl-4  p-2 rounded-[10px]'>
                            <p className=' mr-[50px] sm:mr-[200px]' >
                                Bluetooth Özelliği
                            </p>
                            <p>
                                Var
                            </p>
                        </div>
                        <div className='ml-6  mt-5 w-[250px] flex flex-row border-2 border-gray-700 sm:w-[400px] max-h-[45px] pl-4  p-2 rounded-[10px]'>
                            <p className=' absolute'>
                                Ekran Kartı Hafızası

                            </p>
                            <p className='ml-[170px] sm:ml-[330px]'>
                                8 GB
                            </p>
                        </div>
                        <div className='ml-6  mt-5 w-[250px] flex flex-row border-2 border-gray-700 sm:w-[400px] pl-4  p-2 rounded-[10px]'>
                            <p className=' mr-[50px] sm:mr-[200px]' >
                                SSD Kapasitesi
                            </p>
                            <p>
                                512 GB
                            </p>
                        </div>
                        <div className='ml-6  mt-5 w-[250px] flex flex-row border-2 border-gray-700 sm:w-[400px] pl-4  p-2 rounded-[10px]'>
                            <p className=' mr-[50px]   absolute'>
                                İşlemci Cache

                            </p>
                            <p className='ml-[120px] sm:ml-[260px]'>
                                24 MB Cache

                            </p>
                        </div>
                        <div className='ml-6  mt-5 w-[250px] flex flex-row border-2 border-gray-700 sm:w-[400px] pl-4  p-2 rounded-[10px]'>
                            <p className=' mr-[50px]   absolute'>
                                İşletim Sistemi
                            </p>
                            <p className='ml-[120px] sm:ml-[260px]'>
                                Yok (Free Dos)
                            </p>
                        </div>
                        <div className='ml-6  mt-5 w-[250px] flex flex-row border-2 border-gray-700 sm:w-[400px] pl-4  p-2 rounded-[10px]'>
                            <p className=' mr-[80px] sm:mr-[250px]' >
                                Ram Tipi
                            </p>
                            <p>
                                DDR5
                            </p>
                        </div>
                        <div className='ml-6  mt-5 w-[250px] flex flex-row border-2 border-gray-700 sm:w-[400px] pl-4  p-2 rounded-[10px]'>
                            <p className=' mr-[50px] sm:mr-[200px]  absolute'>
                                Harddisk Kapasitesi
                            </p>
                            <p className='ml-[170px] sm:ml-[330px]'>
                                Yok
                            </p>
                        </div>

                    </aside>
                    <aside className='mt-[0px] sm:mt-[140px] sm:ml-[360px]'>
                        <div className='ml-6  mt-5 w-[250px] flex flex-row border-2 border-gray-700 sm:w-[400px] pl-4  p-2 rounded-[10px]'>
                            <p className=' mr-[70px] sm:mr-[200px]  '>
                                Cihaz Ağırlığı
                            </p>
                            <p>
                                2 - 4 kg
                            </p>
                        </div>
                        <div className='ml-6  mt-5 w-[250px] flex flex-row border-2 border-gray-700 sm:w-[400px] pl-4  p-2 rounded-[10px]'>
                            <p className=' mr-[110px] sm:mr-[245px] '>
                                İşlemci
                            </p>
                            <p>
                                12650H
                            </p>
                        </div>
                        <div className='ml-6  mt-5 w-[250px] flex flex-row border-2 border-gray-700 sm:w-[400px] pl-4  p-2 rounded-[10px]'>
                            <p className=' mr-[50px] sm:mr-[200px]' >
                                Bluetooth Özelliği
                            </p>
                            <p>
                                Var
                            </p>
                        </div>
                        <div className='ml-6  mt-5 w-[250px] flex flex-row border-2 border-gray-700 sm:w-[400px] max-h-[45px] pl-4  p-2 rounded-[10px]'>
                            <p className=' absolute'>
                                Ekran Kartı Hafızası

                            </p>
                            <p className='ml-[170px] sm:ml-[330px]'>
                                8 GB
                            </p>
                        </div>
                        <div className='ml-6  mt-5 w-[250px] flex flex-row border-2 border-gray-700 sm:w-[400px] pl-4  p-2 rounded-[10px]'>
                            <p className=' mr-[50px] sm:mr-[200px]' >
                                SSD Kapasitesi
                            </p>
                            <p>
                                512 GB
                            </p>
                        </div>
                        <div className='ml-6  mt-5 w-[250px] flex flex-row border-2 border-gray-700 sm:w-[400px] pl-4  p-2 rounded-[10px]'>
                            <p className=' mr-[50px]   absolute'>
                                İşlemci Cache

                            </p>
                            <p className='ml-[120px] sm:ml-[260px]'>
                                24 MB Cache

                            </p>
                        </div>
                        <div className='ml-6  mt-5 w-[250px] flex flex-row border-2 border-gray-700 sm:w-[400px] pl-4  p-2 rounded-[10px]'>
                            <p className=' mr-[50px]   absolute'>
                                İşletim Sistemi
                            </p>
                            <p className='ml-[120px] sm:ml-[260px]'>
                                Yok (Free Dos)
                            </p>
                        </div>
                        <div className='ml-6  mt-5 w-[250px] flex flex-row border-2 border-gray-700 sm:w-[400px] pl-4  p-2 rounded-[10px]'>
                            <p className=' mr-[80px] sm:mr-[250px]' >
                                Ram Tipi
                            </p>
                            <p>
                                DDR5
                            </p>
                        </div>
                        <div className='ml-6  mt-5 w-[250px] flex flex-row border-2 border-gray-700 sm:w-[400px] pl-4  p-2 rounded-[10px]'>
                            <p className=' mr-[50px] sm:mr-[200px]  absolute'>
                                Harddisk Kapasitesi
                            </p>
                            <p className='ml-[170px] sm:ml-[330px]'>
                                Yok
                            </p>
                        </div>

                    </aside>




                </div>
            ) : null}

            {degerlendirmeler ? (
                <div id='sağ' className='mt-[1050px] w-[1230px] ml-[150px] border-2 border-gray-700 h-[1000px] border-gray-500 text-[18px] font-bold flex flex-row rounded-[10px] ]'>

                    <aside>

                        <h1 className='ml-8 mt-5'>Acer Nitro 5 AN515 Intel Core I7 12650H 16 GB 512 GB SSD Rtx 4060 8 GB Freedos 15,6" 165 Hz Fhd IPS <br /> <span>Taşınabilir Bilgisayar NH.QM0EY.009 Değerlendirmeleri</span></h1>

                        <img className='w-[250px] mt-10 ml-10 transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer' src={pc2.src} alt="" />

                        <h1 className='text-[70px] text-yellow-300 font-bold ml-[350px] mt-[-190px]'>4.7</h1>
                        <div className='ml-[305px] flex flex-row'>
                            <IoStarOutline className='size-8 text-yellow-500 mr-1 ' />
                            <IoStarOutline className='size-8 text-yellow-500 mr-1' />
                            <IoStarOutline className='size-8 text-yellow-500 mr-1' />
                            <IoStarOutline className='size-8 text-yellow-500 mr-1' />
                            <IoStarOutline className='size-8 text-yellow-500' />
                        </div>

                        <button className='mt-[100px] ml-[60px] w-[200px] hover:bg-blue-300 bg-blue-500 rounded-[15px] h-[40px]'><p className='text-[17px] font-bold'>Değerlendir</p></button>
                        <h1 className='text-orange-300 text-[16px] ml-[70px] mt-6'>Yorum Yayınlama Kriterleri</h1>
                        <IoIosInformationCircleOutline className='ml-[70px] mt-3' /> <p className='text-[14px] ml-[95px] mt-[-20px] font-normal'>Değerlendirme yapabilmek için bu ürünü satın almış olmalısınız.</p>

                        <hr className='border-gray-800 w-[1100px] ml-[60px] mt-4' />

                        <h1 className='font-semibold text-[17px] ml-[70px] mt-4'>Kullanıcı Fotoğraf Ve Videoları</h1>

                        <div className='flex flex-row'>
                            <img className='w-[230px] h-[230px] rounded-[15px] border-2 border-gray-700 border-gray-700 ml-[70px] mt-8 transition-transform duration-500 hover:scale-105 transform ease-in-out cursor-pointer' src={kullanicifoto1.src} alt="" />
                            <img className='w-[230px] h-[230px] rounded-[15px] border-2 border-gray-700 ml-[70px] mt-8 transition-transform duration-500 transform ease-in-out hover:scale-105 cursor-pointer' src={kullanicifoto2.src} alt="" />
                        </div>

                        <hr className='w-[1100px] ml-[60px] mt-10 border-gray-800' />

                        <h1 className='font-semibold ml-[60px] mt-5'>Kullanıcı Değerlendirmeleri</h1>

                    </aside>


                </div>
            ) : null}


            {taksit ? (
                <div id='sol' className='mt-[1050px] border-gray-500 w-[1230px] ml-[150px] border-2 h-[670px] text-[18px] font-bold flex flex-row rounded-[10px]'>

                    <aside className='flex flex-row gap-[65px]'>
                        <div className='border-2  ml-10 mt-10 h-[590px] rounded-[5px]'>

                            <div className='border-b-2  w-[310px] flex justify-center'>
                                <img className='w-[70px]' src={world.src} alt="" />
                            </div>

                            <div className='flex flex-row text-[15px] gap-7 top-5 relative ml-5'>
                                <span className='border-r-2 pl-2 mt-[-20px] h-[550px]'>
                                    <h1 className='relative top-5 left-[-13px]'>Taksit</h1>
                                </span>

                                <span className='border-r-2 mt-[-20px] h-[550px]'>
                                    <h1 className='relative pl-2 top-5 left-[-18px]'>Taksit Tutarı</h1>
                                </span>

                                <h1 className='ml-[180px] absolute'>Toplam Tutar</h1>

                            </div>
                            <hr className='mt-[-470px]' />
                            <div>



                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>2</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>3</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>4</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>5</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>6</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>7</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>8</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>9</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>10</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>11</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>12</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>13</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                            </div>
                        </div>

                        <div className='border-2 ml-10 mt-10 h-[590px] rounded-[5px]'>

                            <div className='border-b-2  w-[310px] flex justify-center'>
                                <img className='w-[70px] mt-[-6px]' src={garanti.src} alt="" />
                            </div>

                            <div className='flex flex-row text-[15px] gap-7 top-5 relative ml-5'>
                                <span className='border-r-2 pl-2 mt-[-20px] h-[550px]'>
                                    <h1 className='relative top-5 left-[-13px]'>Taksit</h1>
                                </span>

                                <span className='border-r-2 mt-[-20px] h-[550px]'>
                                    <h1 className='relative pl-2 top-5 left-[-18px]'>Taksit Tutarı</h1>
                                </span>

                                <h1 className='ml-[180px] absolute'>Toplam Tutar</h1>

                            </div>
                            <hr className='mt-[-470px]' />
                            <div>



                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>2</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>3</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>4</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>5</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>6</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>7</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>8</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>9</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>10</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>11</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>12</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>13</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                            </div>
                        </div>




                        <div className='border-2 ml-10 mt-10 h-[590px] rounded-[5px]'>

                            <div className='border-b-2  w-[310px] flex justify-center'>
                                <img className='w-[75px] mt-[18px] relative top-[-8px]' src={maximum.src} alt="" />
                            </div>

                            <div className='flex flex-row text-[15px] gap-7 top-5 relative ml-5'>
                                <span className='border-r-2 pl-2 mt-[-20px] h-[548px]'>
                                    <h1 className='relative top-5 left-[-13px]'>Taksit</h1>
                                </span>

                                <span className='border-r-2 mt-[-20px] h-[548px]'>
                                    <h1 className='relative pl-2 top-5 left-[-18px]'>Taksit Tutarı</h1>
                                </span>

                                <h1 className='ml-[180px] absolute'>Toplam Tutar</h1>

                            </div>
                            <hr className='mt-[-470px]' />
                            <div>



                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>2</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>3</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>4</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>5</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>6</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>7</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>8</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>9</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>10</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>11</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>12</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                                <hr className='mt-[5px]' />
                                <div className='flex flex-row mt-2'>
                                    <p className='ml-7 absolute'>13</p> <p className='ml-[90px] absolute'>18.923₺</p> <p className='ml-[210px]'>28.999₺</p>
                                </div>
                            </div>
                        </div>
                    </aside>


                </div>
            ) : null}

            {iade ? (
                <div id='sağ' className='mt-[1050px] border-gray-500 w-[1230px] ml-[150px] border-2 h-[620px] text-[18px] font-bold flex flex-row rounded-[10px]'>

                    <aside>

                        <h1 className='ml-10 mt-7 text-[20px] text-yellow-300'>Kolay İade Süreci Nasıl Başlatılır?</h1>

                        <div className='flex flex-row'>
                            <GoInbox className='text-yellow-500 size-[40px] ml-9 mt-10' />
                            <h1 className='mt-12 ml-6 text-gray-300'>İade talebi oluştur</h1>
                            <span className='text-normal mt-[50px] text-[15px] text-gray-500 ml-[20px] '>Siparişlerim sayfasından iade etmek istediğin ürünü bul ve <a href='' className='text-gray-300'> Kolay iade et</a> 'e tıkla.</span>
                        </div>
                        <div className='flex flex-row'>
                            <RiArticleLine className='text-orange-500 size-[40px] ml-9 mt-10' />
                            <h1 className='mt-12 ml-6 text-gray-300'>İade yöntemini seç</h1>
                            <span className='text-normal mt-[50px] text-[15px] text-gray-500 ml-[20px] '>İade etmek istediğin ürünü kapında iade ile kolayca iade et ya da Hepsimat noktasına iade ve kargoya teslim seçeneklerinden birini seç.
                            </span>
                        </div>
                        <div className='flex flex-row'>
                            <TbArticle className='text-blue-500 size-[40px] ml-9 mt-10' />
                            <h1 className='mt-12 ml-6 text-gray-300'>Kargo kodunu not et
                            </h1>
                            <span className='text-normal mt-[50px] text-[15px] text-gray-500 ml-[20px] '>Yönlendirmeleri tamamla ve ekranda çıkan kargo gönderi kodunu not et.


                            </span>
                        </div>
                        <div className='flex flex-row'>
                            <CiInboxIn className='text-red-500 size-[40px] ml-9 mt-10' />
                            <h1 className='mt-12 ml-6 text-gray-300'>Ürünü teslim et
                            </h1>
                            <span className='text-normal mt-[50px] text-[15px] text-gray-500 ml-[20px] '>Ürünü tüm aparatlarıyla eksiksiz bir şekilde paketle ve kargo gönderi koduyla teslim et.
                            </span>
                        </div>
                        <div className='flex flex-row'>
                            <FcCheckmark className='text-gray-500 size-[40px] ml-9 mt-10' />
                            <h1 className='mt-12 ml-6 text-gray-300'>İadeniz onaylansın

                            </h1>
                            <span className='text-normal mt-[50px] text-[15px] text-gray-500 ml-[20px] '>Ürünü tüm aparatlarıyla eksiksiz bir şekilde paketle ve kargo gönderi koduyla teslim et.

                            </span>
                        </div>
                        <hr className='w-[1100px] ml-[60px] mt-8 border-gray-800' />
                        <p className='text-[15px] text-gray-500 ml-9 mt-5 w-[1150px]'>* Bu üründen toplu/çoklu sipariş verilmesi, siparişin ticari alım olduğunun tespit edilmesi veya farklı kullanıcı adı, rumuz, kimlik ve iletişim bilgileri ile verilen siparişlerde fatura adresi, teslimat adresi, ödeme bilgisi, ticari unvanı, vergi numarası gibi unsurların aynı olması durumunda Hepsiburada siparişleri iptal etme hakkını saklı tutar.</p>
                    </aside>


                </div>
            ) : null}

        </div>
    )
}

export default page