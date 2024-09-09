"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';
import pc2 from './img/pc2.png'
import tshirt1 from './img/tshirt1.png'
import tshirt2 from './img/tshirt2.png'
import tshirt3 from './img/tshirt3.png'
import pc from './img/pc.png'
import kahve from './img/kahve-m.png'
import sort from './img/şort.png'
import { IoIosHeartEmpty } from "react-icons/io";


export default function Home() {

  const product1Detail = () => {
    window.location.href = "/product-detail-1"
  }

  const allProductsPage = () => {
    window.location.href = "/tüm-ürünler"
  }



  const handleAddToFavorites = () => {
    const productImage = document.getElementById('pc').src;
    const productName = document.getElementById('h1').innerText;
    const productPrice = document.getElementById('h2').innerText;


    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push({ image: productImage, price: productPrice, name: productName });
    localStorage.setItem('favorites', JSON.stringify(favorites));

    window.location.href = '/favoriler';
    alert("Favorilere eklendi!")
  };




  const handleAddToFavorites1 = () => {
    const productImage = document.getElementById('pc1').src;
    const productPrice = document.getElementById('h5').innerText;
    const productName = document.getElementById('h4').innerText;


    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push({ image: productImage, price: productPrice, name: productName });
    localStorage.setItem('favorites', JSON.stringify(favorites));

    window.location.href = '/favoriler';
    alert("Favorilere eklendi!")
  };




  return (
    <div className='overflow-hidden	'>
      <div>
        <aside className='mt-[0px]'>
          < div id='ss' className='w-[500px] h-[400px] p-10 rounded-[30px] border-gray-700 flex justify-center ml-[850px] absolute mt-[180px]  ' >
            <img id='pc'
              className='w-[250px] ml-[-1830px] sm:ml-[0px] mt-[35px] h-[200px] sm:w-[700px] absolute sm:h-[380px] sm:mt-[-40px]'
              src={pc2.src}
              alt="" />
            <IoIosHeartEmpty onClick={handleAddToFavorites} className='absolute size-[50px] sm:mt-[-60px] cursor-pointer mt-[20px] ml-[-1630px] text-red-600  sm:ml-[400px] z-50 border-2 bg-black border-white rounded-[300px] p-2 transition-transform duration-300 hover:scale-110' />
          </ div>

          <button id='sss' onClick={product1Detail}
            className='w-[200px] h-[30px] mt-[480px] ml-[85px] sm:mt-[600px] absolute sm:w-[500px] border-gray-700 rounded-[30px] sm:h-[50px] hover:bg-blue-400 bg-blue-800400 bg-blue-800 hover:border-none sm:ml-[850px]'>
            <p className='text-[20px] font-bold'>Ürüne Git</p>
          </button>

          <h1
            className='text-[24px] mt-[100px] ml-[105px] sm:text-[80px] sm:mt-[200px] sm:ml-[200px] absolute font-bold'
          ><span id='h1' className='text-[30px] sm:ml-6  sm:text-[80px] mt-[150px] ml-15'>ACER Nitro 5</span> <br /> <span className='ml-2'>12% İndirimde!</span></h1>
          <h2 id='h2'
            className='text-[30px] ml-[130px] mt-[180px] sm:text-[120px] text-yellow-500 font-bold sm:mt-[460px] sm:ml-[230px] absolute'
          >28.999₺</h2>
        </aside >

        <div className='flex flex-row'>
          <div className='ml-3 flex flex-row sm:ml-[-60px] sm:mt-[610px]'>
            <hr className='w-[100px] mt-[625px] ml-3 sm:w-[400px] sm:mt-[145px] sm:ml-[300px]' />
            <p className='text-[12px] mt-[616px] sm:text-[17px] ml-[125px] sm:mt-[130px] sm:ml-[740px] absolute font-bold'>AtaRam & Market</p>
            <hr className=' w-[100px] mt-[625px] ml-[110px] sm:w-[400px] sm:mt-[145px] sm:ml-[200px]' />
          </div>
        </div>

        <div className='sm:ml-[500px] sm:mt-[100px]'>
          <h1 className='text-[16px] ml-[115px] mt-10 sm:text-[35px] font-bold'>EN ÇOK SATANLAR</h1>
          <hr className='w-[180px] ml-[86px] mt-3 sm:w-[400px] sm: sm:ml-[60px] sm:mt-4' />
        </div>

        {/* ÜRÜNLER BAŞLANGIÇ */}


        <section id='ilk-ürünler' className=' flex flex-row sm:flex-col mt-[-200px] ml-[-30px]'>

          <div className='flex flex-col sm:flex-row'>

            <div className='mt-[-100px] ml-[-80px]'>
              <div className='mt-[300px] ml-[100px]  sm:w-[400px] sm:h-[350px] sm:p-10 rounded-[30px] border-gray-700 flex justify-center sm:ml-[200px] absolute sm:mt-[400px] '>
                <img
                  className='w-[200px] ml-[90px] mt-10 sm:w-[280px] sm:h-[300px] sm:ml-[10px] sm:mt-[-20px] '
                  id='pc1'
                  src={tshirt1.src}
                  alt=""
                /></div>
              <h1 className='text-[16px] mt-[590px] ml-[225px] sm:mt-[760px] text-white sm:ml-[300px] absolute sm:text-[24px] font-bold'> <span id='h4'>Chuba Tshirt</span> /
                <span id='h5' className='sm:text-[28px] text-yellow-500'> 640₺</span>
              </h1>
              <hr className='w-[160px] ml-[210px] mt-[620px] absolute sm:w-[208px] sm:mt-[810px] sm:ml-[300px]' />
              <button id='h2' onClick={handleAddToFavorites1}
                className='mt-[640px] ml-[215px] w-[150px] sm:mt-[840px]  absolute sm:w-[160px] border-gray-700 rounded-[30px] sm:h-[40px] hover:bg-blue-400 bg-blue-800 hover:border-none sm:ml-[320px]'>
                <p className='text-[18px] sm:text-[20px] font-bold'>Ürüne Git</p>
              </button>
              <IoIosHeartEmpty onClick={handleAddToFavorites1} className='absolute size-[50px] sm:mt-[420px] mt-[330px] cursor-pointer text-red-600  ml-[330px] sm:ml-[470px] z-50 border-2 bg-black border-white rounded-[300px] p-2 transition-transform duration-300 hover:scale-110' />

            </div>

            <div className='mt-[380px] ml-[-80px] sm:mt-[-100px] sm:ml-[460px]'>
              <div className='mt-[300px] ml-[100px]  sm:w-[400px] sm:h-[350px] sm:p-10 rounded-[30px] border-gray-700 flex justify-center sm:ml-[200px] absolute sm:mt-[400px] '>
                <img
                  className='w-[200px] ml-[90px] mt-10 sm:w-[280px] sm:h-[300px] sm:ml-[10px] sm:mt-[-20px] '
                  src={sort.src}
                  alt=""
                /></div>
              <h1 className='text-[16px] mt-[590px] ml-[235px] sm:mt-[760px] text-white sm:ml-[300px] absolute sm:text-[24px] font-bold'> Fluer Şort /
                <span className='sm:text-[28px] text-yellow-500'> 450₺</span>
              </h1>
              <hr className='w-[160px] ml-[210px] mt-[620px] absolute sm:w-[208px] sm:mt-[810px] sm:ml-[300px]' />
              <button
                className='mt-[640px] ml-[215px] w-[150px] sm:mt-[840px]  absolute sm:w-[160px] border-gray-700 rounded-[30px] sm:h-[40px] hover:bg-blue-400 bg-blue-800 hover:border-none sm:ml-[320px]'>
                <p className='text-[18px] sm:text-[20px] font-bold'>Ürüne Git</p>
              </button>
              <IoIosHeartEmpty onClick={handleAddToFavorites1} className='absolute size-[50px] sm:mt-[420px] mt-[330px] cursor-pointer text-red-600  ml-[330px] sm:ml-[470px] z-50 border-2 bg-black border-white rounded-[300px] p-2 transition-transform duration-300 hover:scale-110' />
            </div>

            <div className='mt-[380px] ml-[-80px] sm:ml-[480px] sm:mt-[-100px]'>
              <div className='mt-[300px] ml-[100px]  sm:w-[400px] sm:h-[350px] sm:p-10 rounded-[30px] border-gray-700 flex justify-center sm:ml-[200px] absolute sm:mt-[400px] '>
                <img
                  className='w-[200px] ml-[90px] mt-10 sm:w-[280px] sm:h-[300px] sm:ml-[10px] sm:mt-[-20px] '
                  src={tshirt3.src}
                  alt=""
                /></div>
              <h1 className='text-[16px] mt-[590px] ml-[225px] sm:mt-[760px] text-white sm:ml-[300px] absolute sm:text-[24px] font-bold'>  United Tshirt /
                <span className='sm:text-[28px] text-yellow-500'> 719₺</span>
              </h1>
              <hr className='w-[160px] ml-[210px] mt-[620px] absolute sm:w-[208px] sm:mt-[810px] sm:ml-[300px]' />
              <button
                className='mt-[640px] ml-[215px] w-[150px] sm:mt-[840px]  absolute sm:w-[160px] border-gray-700 rounded-[30px] sm:h-[40px] hover:bg-blue-400 bg-blue-800 hover:border-none sm:ml-[320px]'>
                <p className='text-[18px] sm:text-[20px] font-bold'>Ürüne Git</p>
              </button>
              <IoIosHeartEmpty onClick={handleAddToFavorites1} className='absolute size-[50px] sm:mt-[420px] mt-[330px] cursor-pointer text-red-600  ml-[330px] sm:ml-[470px] z-50 border-2 bg-black border-white rounded-[300px] p-2 transition-transform duration-300 hover:scale-110' />
            </div>




          </div>

        </section>

        <div id='ikinci-ürünler' className='flex flex-col mt-[590px] sm:mt-[640px] ml-[-30px]'>

          <div className='flex flex-col sm:flex-row'>

            <div className='mt-[-200px] sm:mt-[-100px] ml-[-80px]'>
              <div className='mt-[300px] ml-[100px]  sm:w-[400px] sm:h-[350px] sm:p-10 rounded-[30px] border-gray-700 flex justify-center sm:ml-[200px] absolute sm:mt-[400px] '>
                <img
                  className='w-[200px] ml-[100px] mt-10 sm:w-[280px] sm:h-[300px] sm:ml-[40px] sm:mt-[-20px] '
                  src={kahve.src}
                  alt=""
                /></div>
              <h1 className='text-[16px] mt-[590px] ml-[190px] sm:mt-[760px] text-white sm:ml-[250px] absolute sm:text-[24px] font-bold'> Philips Kahve Makinesi /
                <span className='sm:text-[28px] text-yellow-500'> 1322₺</span>
              </h1>
              <hr className='w-[160px] ml-[210px] mt-[620px] absolute sm:w-[208px] sm:mt-[810px] sm:ml-[300px]' />
              <button
                className='mt-[640px] ml-[215px] w-[150px] sm:mt-[840px]  absolute sm:w-[160px] border-gray-700 rounded-[30px] sm:h-[40px] hover:bg-blue-400 bg-blue-800 hover:border-none sm:ml-[320px]'>
                <p className='text-[18px] sm:text-[20px] font-bold'>Ürüne Git</p>
              </button>
              <IoIosHeartEmpty onClick={handleAddToFavorites1} className='absolute size-[50px] sm:mt-[420px] mt-[330px] cursor-pointer text-red-600  ml-[330px] sm:ml-[470px] z-50 border-2 bg-black border-white rounded-[300px] p-2 transition-transform duration-300 hover:scale-110' />
            </div>

            <div className='mt-[380px] ml-[-80px] sm:mt-[-100px] sm:ml-[460px]'>
              <div className='mt-[300px] ml-[100px]  sm:w-[400px] sm:h-[350px] sm:p-10 rounded-[30px] border-gray-700 flex justify-center sm:ml-[200px] absolute sm:mt-[400px] '>
                <img
                  className='w-[200px] ml-[90px] mt-10 sm:w-[280px] sm:h-[300px] sm:ml-[10px] sm:mt-[-20px] '
                  src={tshirt2.src}
                  alt=""
                /></div>
              <h1 className='text-[16px] mt-[590px] ml-[212px] sm:mt-[760px] text-white sm:ml-[280px] absolute sm:text-[24px] font-bold'> United Tshirt V2 /
                <span className='sm:text-[28px] text-yellow-500'> 669₺</span>
              </h1>
              <hr className='w-[160px] ml-[210px] mt-[620px] absolute sm:w-[208px] sm:mt-[810px] sm:ml-[300px]' />
              <button
                className='mt-[640px] ml-[215px] w-[150px] sm:mt-[840px]  absolute sm:w-[160px] border-gray-700 rounded-[30px] sm:h-[40px] hover:bg-blue-400 bg-blue-800 hover:border-none sm:ml-[320px]'>
                <p className='text-[18px] sm:text-[20px] font-bold'>Ürüne Git</p>
              </button>
              <IoIosHeartEmpty onClick={handleAddToFavorites1} className='absolute size-[50px] sm:mt-[420px] mt-[330px] cursor-pointer text-red-600  ml-[330px] sm:ml-[470px] z-50 border-2 bg-black border-white rounded-[300px] p-2 transition-transform duration-300 hover:scale-110' />
            </div>

            <div className='mt-[380px] ml-[-80px] sm:ml-[480px] sm:mt-[-100px]'>
              <div className='mt-[300px] ml-[100px]  sm:w-[400px] sm:h-[350px] sm:p-10 rounded-[30px] border-gray-700 flex justify-center sm:ml-[200px] absolute sm:mt-[400px] '>
                <img
                  className='w-[200px] ml-[90px] mt-10 sm:w-[340px] sm:h-[250px] sm:ml-[10px] sm:mt-[-20px] '
                  src={pc.src}
                  alt=""
                /></div>
              <h1 className='text-[16px] mt-[510px] ml-[220px] sm:mt-[760px] text-white sm:ml-[300px] absolute sm:text-[24px] font-bold'>  MSI Laptop /
                <span className='sm:text-[28px] text-yellow-500'> 21.999₺</span>
              </h1>
              <hr className='w-[160px] ml-[210px] mt-[540px] absolute sm:w-[208px] sm:mt-[810px] sm:ml-[300px]' />
              <button
                className='mt-[560px] ml-[215px] w-[150px] sm:mt-[840px]  absolute sm:w-[160px] border-gray-700 rounded-[30px] sm:h-[40px] hover:bg-blue-400 bg-blue-800 hover:border-none sm:ml-[320px]'>
                <p className='text-[18px] sm:text-[20px] font-bold'>Ürüne Git</p>
              </button>
              <IoIosHeartEmpty onClick={handleAddToFavorites} className='absolute size-[50px] mt-[420px] cursor-pointer text-red-600  ml-[490px] z-50 border-2 bg-black border-white rounded-[300px] p-2 transition-transform duration-300 hover:scale-110' />
            </div>




          </div>

        </div>




        <div className='mt-[650px] ml-[70px] sm:ml-[600px] sm:mt-[900px]'>
          <hr className='w-[220px] sm:w-[300px]' />
          <button onClick={allProductsPage} className='ml-[50px] mt-3 sm:text-[30px] sm:ml-10 sm:mt-3 font-bold hover:text-blue-600'>Tüm Ürünleri Gör</button>
        </div>


      </div >
    </div>
  );
}
