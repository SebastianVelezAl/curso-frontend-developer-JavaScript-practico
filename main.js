const menuEmail =document.querySelector('.navbar-email');
const desktopMenu =document.querySelector('.desktop-menu');
const menuHamburguesa =document.querySelector('.menu');
const menuCarrito =document.querySelector('.navbar-shopping-cart');

const mobileMenu =document.querySelector('.mobile-menu');
const aside =document.querySelector('.product-detail');
const cardContainer =document.querySelector('.cards-container');
const productDetalleClose = document.querySelector('.product-detail-close');
const productDetalleContainer = document.querySelector('.product-detail-secondary');

const imgDetailAside = document.querySelector('#imgDetailAside');

const productInfo = document.querySelector(".product-info");
const productInfoParrafos = productInfo.querySelectorAll('p');




menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener('click',toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarritoAside);
productDetalleClose.addEventListener('click',toggleProductDetailClose);

function toggleDesktopMenu(){
    console.log('clik');
    const isAsideClosed =aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){ 
    console.log('clicl clase mobile menu');
    const isAsideClosed =aside.classList.contains('inactive');
    const detalleProductClosed = productDetalleContainer.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.toggle('inactive');
    }   
     if(!detalleProductClosed){
        productDetalleContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    console.log('clik carrito de compras');
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    const menuDesktopClosed = desktopMenu.classList.contains('inactive');
    const detalleProductClosed = productDetalleContainer.classList.contains('inactive');
     

    if(!mobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    if(!menuDesktopClosed)
    {
        desktopMenu.classList.add('inactive');
    }
    if(!detalleProductClosed){
        productDetalleContainer.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

function openProductDetailAside(img, productPrice, productName, description) {
    imgDetailAside.src=img.src;
    productInfoParrafos[0].textContent = '$'+productPrice;
    productInfoParrafos[1].textContent = productName.textContent;
    productInfoParrafos[2].textContent = description;

    aside.classList.add('inactive');
    productDetalleContainer.classList.remove('inactive');

}



function toggleProductDetailClose(){
    productDetalleContainer.classList.toggle('inactive');
    console.log('clik cerrar detalle producto');
    
}
const productList = [];
productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque natus quo est nulla? Mollitia debitis quo tempore velit, iste ullam',
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque natus quo est nulla? Mollitia debitis quo tempore velit, iste ullam',
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque natus quo est nulla? Mollitia debitis quo tempore velit, iste ullam',
});



  
/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <im g src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> 
*/

//listar los productos a comprar
function renderProducts (arr){
    for(product of arr){
        const description = product.description;
        const productPriceClean = product.price;

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.src=product.image;
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productInfoImg = document.createElement('img');
        productInfoImg.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoImg.addEventListener('click', () => {
            addToCart(img, productName, productPriceClean);
        });

        img.addEventListener('click', () => {
            openProductDetailAside(img, productPriceClean, productName, description);
        });
    
        productInfoFigure.append(productInfoImg);
        productDiv.append(productPrice, productName);
    
        productInfo.append(productDiv,productInfoFigure);
    
        productCard.append(img, productInfo);
    
        cardContainer.append(productCard);

        
    }
    
}

renderProducts(productList);
