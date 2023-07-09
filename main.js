const menuEmail =document.querySelector('.navbar-email');
const desktopMenu =document.querySelector('.desktop-menu');
const menuHamburguesa =document.querySelector('.menu');
const menuCarrito =document.querySelector('.navbar-shopping-cart');
const mobileMenu =document.querySelector('.mobile-menu');
const aside =document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener('click',toggleMobileMenu)
menuCarrito.addEventListener('click', toggleCarritoAside)

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

    if(!isAsideClosed){
        aside.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}



function toggleCarritoAside(){
    console.log('clik carrito de compras');
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    const menuDesktopClosed = desktopMenu.classList.contains('inactive');

    if(!mobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    if(!menuDesktopClosed)
    {
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');


}