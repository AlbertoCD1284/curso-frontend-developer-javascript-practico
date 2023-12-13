const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDestopMenu);
menuHamIcon.addEventListener('click', toggleMobilMenu);
menuCarrito.addEventListener('click', toggleCarritoMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

// Menu en Email: sale menu con clik en Email
function toggleDestopMenu() {
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
}

// Menu hambuergesa: Es para celulares  clik esquina sup-izq
function toggleMobilMenu() {
    mobileMenu.classList.toggle('inactive');    
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive')
}

// Menu carrito de compras
function toggleCarritoMenu() {
    shoppingCartContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');    
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive')
}

// Abrir Detalles del Producto
function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive')
    shoppingCartContainer.classList.add('inactive');    
}

// Cerrar Los Detalles del Producto
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}

// Lista de productos
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Compu',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Compu',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProduct(arr) {    
    for (product of productList) {
        const productoCard = document.createElement('div');
        productoCard.classList.add('product-card');
        
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
    
        const productoInfo = document.createElement('div');
        productoInfo.classList.add('product-info');
    
        const productoInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productoInfoDiv.appendChild(productPrice);
        productoInfoDiv.appendChild(productName);
    
        const productoInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productoInfoFigure.appendChild(productImgCart);
    
        productoInfo.appendChild(productoInfoDiv);
        productoInfo.appendChild(productoInfoFigure);
    
        productoCard.appendChild(productImg);
        productoCard.appendChild(productoInfo);
    
        cardsContainer.appendChild(productoCard);
    
    }
}

renderProduct(productList);