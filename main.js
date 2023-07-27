const menuEmail =document.querySelector('.navbar-email');
const desktopMenu =document.querySelector('.desktop-menu');
const menuHamburguesa =document.querySelector('.menu');
const menuCarrito =document.querySelector('.navbar-shopping-cart');

const mobileMenu =document.querySelector('.mobile-menu');
const aside =document.querySelector('.product-detail');
const cardContainer =document.querySelector('.cards-container');
const productDetalleClose = document.querySelector('.product-detail-close');
const productDetalleContainer = document.querySelector('.product-detail-secondary');

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

function openProductDetailAside(){

    console.log('click abrir producto');
    const isAsideClosed =aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.toggle('inactive');
    }
    productDetalleContainer.classList.remove('inactive');

}

function toggleProductDetailClose(){
    productDetalleContainer.classList.toggle('inactive');
    console.log('clik cerrar detalle producto');
    
}


const productList =[];
productList.push({
    name: 'Bike',
    price: 120,
    imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Casco',
    price: 50,
    imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'guarntes',
    price: 10,
    imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
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
        const productCard=document.createElement('div');
        productCard.classList.add('product-card');
    
        //product = {name,price,imag}
        const producImg = document.createElement('img');
        producImg.setAttribute('src',product.imagen);
        producImg.addEventListener('click',openProductDetailAside)
    
        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv=document.createElement('div');
    
        const productPrice=document.createElement('p');
        productPrice.innerText='$'+product.price;
        const productName=document.createElement('p');
        productName.innerText=product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure=document.createElement('figure');
        const productImgCart=document.createElement('img'); 
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(producImg);
        productCard.appendChild(productInfo);
    
        cardContainer.appendChild(productCard);
    
    }
    
}

renderProducts(productList);
