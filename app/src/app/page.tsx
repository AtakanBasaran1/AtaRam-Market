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


export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  interface Product {
    id: number;
    name: string;
    title: string;
    description: string;
  }

  // const [product, setProduct] = useState<Product | null>(null);

  // useEffect(() => {
  //   const productList = async () => {
  //     try {
  //       const response = await fetch("https://api.example.com/products");
  //       const data: Product = await response.json();
  //       setProduct(data);
  //     } catch (error) {
  //       console.error("Ürün bilgilerini alırken bir hata oluştu:", error);
  //     }
  //   };

  //   productList();
  // }, []);

  const product1Detail = () => {
    window.location.href = "/product-1"
  }

  const allProductsPage = () => {
    window.location.href = "/tüm-ürünler"
  }




  return (
    <div>

      <div className='mt-[0px]'>
        <div className='w-[500px] h-[400px] p-10 rounded-[30px] border-gray-700 flex justify-center ml-[850px] absolute mt-[180px] transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer'>
          <img id='pc'
            className='w-[700px] absolute h-[380px] mt-[-40px] '
            src={pc2.src}
            alt="" />
        </div>
        <button id='button' onClick={product1Detail}
          className='mt-[600px]  absolute w-[500px] border-gray-700 rounded-[30px] h-[50px] hover:bg-blue-400 bg-blue-800400 bg-blue-800 hover:border-none ml-[850px]'>
          <p className='text-[20px] font-bold'>Sepete Ekle</p>
        </button>
        <h1 id='h1'
          className='text-[80px] mt-[200px] ml-[200px] absolute font-bold'
        ><span className='ml-6'>ACER Nitro 5</span> <br /> 12% İndirimde!</h1>
        <h2 id='h2'
          className='text-[120px] font-bold mt-[460px] ml-[240px] absolute'
        >28.999₺</h2>
      </div>

      <div className='flex flex-row'>
        <div className='flex flex-row ml-[-60px] mt-[610px]'>
          <hr className='w-[400px] mt-[145px] ml-[300px]' />
          <p className='mt-[130px] ml-[740px] absolute font-bold'>AtaRam & Market</p>
          <hr className='w-[400px] mt-[145px] ml-[200px]' />
        </div>
      </div>

      <div className='ml-[600px] mt-[100px]'>
        <h1 className='text-[35px] font-bold'>EN ÇOK SATANLAR</h1>
        <hr className='w-[400px] ml-[-60px] mt-4' />
      </div>

      {/* ÜRÜNLER BAŞLANGIÇ */}


      <div id='ilk-ürünler' className='flex flex-col mt-[-200px] ml-[-30px]'>

        <div className='flex flex-row'>

          <div className='mt-[-100px] ml-[-80px]'>
            <div className='w-[400px] h-[350px] p-10 rounded-[30px] border-gray-700 flex justify-center ml-[200px] absolute mt-[400px] transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer'>
              <img
                className='w-[280px] h-[300px] mt-[-20px] '
                src={tshirt1.src}
                alt=""
              /></div>
            <h1 className='mt-[760px] text-white ml-[300px] absolute text-[24px] font-bold'> Chuba Tshirt /
              <span className='text-[28px]'> 640₺</span>
            </h1>
            <hr className='absolute w-[208px] mt-[810px] ml-[300px]' />
            <button
              className='mt-[840px]  absolute w-[160px] border-gray-700 rounded-[30px] h-[40px] hover:bg-blue-400 bg-blue-800 hover:border-none ml-[320px]'>
              <p className='text-[20px] font-bold'>Sepete Ekle</p>
            </button>
          </div>

          <div className='mt-[-100px] ml-[450px]'>
            <div className=' w-[400px] h-[350px] p-10 rounded-[30px] border-gray-700 flex justify-center ml-[200px] absolute mt-[400px] transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer'>
              <img
                className='w-[280px] h-[300px] mt-[-20px] '
                src={sort.src}
                alt="" />
            </div>
            <h1 className='mt-[760px] text-white ml-[320px] absolute text-[24px] font-bold'> Fluer Şort /
              <span className='text-[28px]'> 412₺</span>
            </h1>
            <hr className='absolute w-[208px] mt-[810px] ml-[300px]' />
            <button
              className='mt-[840px]  absolute w-[160px] border-gray-700 rounded-[30px] h-[40px] hover:bg-blue-400 bg-blue-800 hover:border-none ml-[325px]'>
              <p className='text-[20px] font-bold'>Sepete Ekle</p>
            </button>
          </div>

          <div className='mt-[-100px] ml-[480px]'>
            <div className=' w-[400px] h-[350px] p-10 rounded-[30px] border-gray-700 flex justify-center ml-[200px] absolute mt-[400px] transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer'>
              <img
                className='w-[280px] h-[300px] mt-[-20px] '
                src={tshirt3.src}
                alt="" /></div>
            <h1 className='mt-[760px] text-white ml-[300px] absolute text-[24px] font-bold'> United Tshirt /
              <span className='text-[28px]'> 410₺</span>
            </h1>
            <hr className='absolute w-[208px] mt-[810px] ml-[300px]' />
            <button
              className='mt-[840px]  absolute w-[160px] border-gray-700 rounded-[30px] h-[40px] hover:bg-blue-400 bg-blue-800 hover:border-none ml-[330px]'>
              <p className='text-[20px] font-bold'>Sepete Ekle</p>
            </button>
          </div>
        </div>

      </div>

      <div id='ikinci-ürünler' className='flex flex-col mt-[650px] ml-[-30px]'>

        <div className='flex flex-row'>

          <div className='mt-[-100px] ml-[-80px]'>
            <div className='w-[400px] h-[350px] p-10 rounded-[30px] border-gray-700 flex justify-center ml-[200px] absolute mt-[400px] transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer'>
              <img
                className='w-[280px] h-[300px] mt-[-20px] '
                src={tshirt2.src}
                alt=""
              /></div>
            <h1 className='mt-[760px] text-white ml-[275px] absolute text-[24px] font-bold'> Chuba Tshirt - V2 /
              <span className='text-[28px]'> 620₺</span>
            </h1>
            <hr className='absolute w-[208px] mt-[810px] ml-[300px]' />
            <button
              className='mt-[840px]  absolute w-[160px] border-gray-700 rounded-[30px] h-[40px] hover:bg-blue-400 bg-blue-800 hover:border-none ml-[320px]'>
              <p className='text-[20px] font-bold'>Sepete Ekle</p>
            </button>
          </div>

          <div className='mt-[-100px] ml-[450px]'>
            <div className=' w-[400px] h-[350px] p-10 rounded-[30px] border-gray-700 flex justify-center ml-[200px] absolute mt-[400px] transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer'>
              <img
                className='w-[280px] h-[300px] mt-[-20px] ml-10 '
                src={kahve.src}
                alt="" />
            </div>
            <h1 className='mt-[760px] text-white ml-[250px] absolute text-[24px] font-bold'> Philips Kahve Makinesi /
              <span className='text-[28px]'> 1299₺</span>
            </h1>
            <hr className='absolute w-[208px] mt-[810px] ml-[300px]' />
            <button
              className='mt-[840px]  absolute w-[160px] border-gray-700 rounded-[30px] h-[40px] hover:bg-blue-400 bg-blue-800 hover:border-none ml-[330px]'>
              <p className='text-[20px] font-bold'>Sepete Ekle</p>
            </button>
          </div>

          <div className='mt-[-100px] ml-[480px]'>
            <div className=' w-[400px] h-[350px] p-10 rounded-[30px] border-gray-700 flex justify-center ml-[200px] absolute mt-[400px] transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer'>
              <img
                className='w-[340px] absolute h-[250px] mt-[-20px] '
                src={pc.src}
                alt="" /></div>
            <h1 className='mt-[760px] text-white ml-[290px] absolute text-[24px] font-bold'> MSI Laptop /
              <span className='text-[28px]'> 21.299₺</span>
            </h1>
            <hr className='absolute w-[208px] mt-[810px] ml-[300px]' />
            <button
              className='mt-[840px]  absolute w-[160px] border-gray-700 rounded-[30px] h-[40px] hover:bg-blue-400 bg-blue-800 hover:border-none ml-[330px]'>
              <p className='text-[20px] font-bold'>Sepete Ekle</p>
            </button>
          </div>
        </div>

      </div>




      <div className='ml-[600px] mt-[900px]'>
        <hr className='w-[300px]' />
        <button onClick={allProductsPage} className='text-[30px] ml-10 mt-3 font-bold'>Tüm Ürünleri Gör</button>
      </div>


    </div>
  );
}
