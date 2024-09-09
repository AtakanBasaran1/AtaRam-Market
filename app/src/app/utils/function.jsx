export const handleAddToFavorites = () => {
    const productImage = document.getElementById('img1').src;
    const productPrice = document.getElementById('h1').innerText;
    const productName = document.getElementById('h2').innerText;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push({ image: productImage, price: productPrice, name: productName });
    localStorage.setItem('favorites', JSON.stringify(favorites));

    alert("Favorilere eklendi!");
};

export const handleRemoveToFavorites = () => {
    const productImage = document.getElementById('img1').src;
    const productPrice = document.getElementById('h1').innerText;
    const productName = document.getElementById('h2').innerText;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push({ image: productImage, price: productPrice, name: productName });
    localStorage.removeItem('favorites', JSON.stringify(favorites));

    alert("Favorilerden çıkarıldı!");
};


export const handleAddToFavorites1 = () => {
    const productImage = document.getElementById('img2').src;
    const productName = document.getElementById('h3').innerText;
    const productPrice = document.getElementById('h4').innerText;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push({ image: productImage, price: productPrice, name: productName });
    localStorage.setItem('favorites', JSON.stringify(favorites));


    alert("Favorilere eklendi!");
};


export const handleRemoveToFavorites1 = () => {
    const productImage = document.getElementById('img2').src;
    const productPrice = document.getElementById('h3').innerText;
    const productName = document.getElementById('h4').innerText;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push({ image: productImage, price: productPrice, name: productName });
    localStorage.removeItem('favorites', JSON.stringify(favorites));

    alert("Favorilerden çıkarıldı!");
};




export const handleAddToFavorites2 = () => {
    const productImage = document.getElementById('img3').src;
    const productName = document.getElementById('h5').innerText;
    const productPrice = document.getElementById('h6').innerText;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push({ image: productImage, price: productPrice, name: productName });
    localStorage.setItem('favorites', JSON.stringify(favorites));

    alert("Favorilere eklendi!");
};

export const handleRemoveToFavorites2 = () => {
    const productImage = document.getElementById('img3').src;
    const productName = document.getElementById('h5').innerText;
    const productPrice = document.getElementById('h6').innerText;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push({ image: productImage, price: productPrice, name: productName });
    localStorage.removeItem('favorites', JSON.stringify(favorites));

    alert("Favorilerden çıkarıldı!");
};

export const handleAddToFavorites3 = () => {
    const productImage = document.getElementById('img4').src;
    const productName = document.getElementById('h7').innerText;
    const productPrice = document.getElementById('h8').innerText;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push({ image: productImage, price: productPrice, name: productName });
    localStorage.setItem('favorites', JSON.stringify(favorites));

    alert("Favorilere eklendi!");
};

export const handleRemoveToFavorites3 = () => {
    const productImage = document.getElementById('img4').src;
    const productName = document.getElementById('h7').innerText;
    const productPrice = document.getElementById('h8').innerText;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push({ image: productImage, price: productPrice, name: productName });
    localStorage.removeItem('favorites', JSON.stringify(favorites));

    alert("Favorilerden çıkarıldı!");
};

export const handleAddToFavorites4 = () => {
    const productImage = document.getElementById('img5').src;
    const productName = document.getElementById('h9').innerText;
    const productPrice = document.getElementById('h10').innerText;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push({ image: productImage, price: productPrice, name: productName });
    localStorage.setItem('favorites', JSON.stringify(favorites));

    alert("Favorilere eklendi!");
};

export const handleRemoveToFavorites4 = () => {
    const productImage = document.getElementById('img5').src;
    const productName = document.getElementById('h9').innerText;
    const productPrice = document.getElementById('h10').innerText;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push({ image: productImage, price: productPrice, name: productName });
    localStorage.removeItem('favorites', JSON.stringify(favorites));

    alert("Favorilerden çıkarıldı!");
};

export const handleAddToFavorites5 = () => {
    const productImage = document.getElementById('img6').src;
    const productName = document.getElementById('h11').innerText;
    const productPrice = document.getElementById('h12').innerText;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push({ image: productImage, price: productPrice, name: productName });
    localStorage.setItem('favorites', JSON.stringify(favorites));

    alert("Favorilere eklendi!");
};

export const handleRemoveToFavorites5 = () => {
    const productImage = document.getElementById('img6').src;
    const productName = document.getElementById('h11').innerText;
    const productPrice = document.getElementById('h12').innerText;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push({ image: productImage, price: productPrice, name: productName });
    localStorage.removeItem('favorites', JSON.stringify(favorites));

    alert("Favorilere çıkarıldı!");
};

export const handleAddToFavorites6 = () => {
    const productImage = document.getElementById('img7').src;
    const productName = document.getElementById('h13').innerText;
    const productPrice = document.getElementById('h14').innerText;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push({ image: productImage, price: productPrice, name: productName });
    localStorage.setItem('favorites', JSON.stringify(favorites));

    alert("Favorilere eklendi!");
};


export const handleRemoveToFavorites6 = () => {
    const productImage = document.getElementById('img7').src;
    const productName = document.getElementById('h13').innerText;
    const productPrice = document.getElementById('h14').innerText;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push({ image: productImage, price: productPrice, name: productName });
    localStorage.removeItem('favorites', JSON.stringify(favorites));

    alert("Favorilere çıkarıldı!");
};





