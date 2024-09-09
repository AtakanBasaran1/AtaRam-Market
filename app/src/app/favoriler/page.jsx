"use client";

import { useEffect, useState } from 'react';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const allFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(allFavorites);
  }, []);

  return (
    <div className='flex flex-col sm:flex-row mt-[150px] absolute flex-wrap w-[1800px]'>
      <h1 className='mt-[-20px] w-[235px] absolute  ml-[75px] text-[40px] border-b-2 flex justify-start border-blue-500 font-bold '>Favori Ürünler</h1>
      {favorites.map((item, index) => (
        <div className='mt-[100px] ml-[65px]' key={index}>

          <img className='w-[250px] mr-[60px] border-t-2 border-r-2 border-blue-700 border-l-2 p-8 rounded-[50px] h-[250px]' src={item.image} alt={item.name} />
          <h2 className='text-[18px] text-white ml-8 font-bold mt-7'>{item.name}</h2>
          <p className='text-[25px] font-bold text-yellow-500 ml-[90px] mt-2'>{item.price}</p>

        </div>
      ))}
      {favorites.length === 0 && <p className='text-[40px] mt-[100px] ml-10'>Favorilere eklenmiş ürün bulunmamaktadır.</p>}
    </div>


  );
};

export default FavoritesPage;
