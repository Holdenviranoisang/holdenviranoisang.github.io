//toggle class active hamberger menu
const navbarnav = document.querySelector('.navbar-nav');
//ketika hamburger menu diklik
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarnav.classList.toggle('active');
};

// toggle searcg
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#searchbox');
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();

};

// kelas aktif toggle shopping
const shoppingCart =document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = () => {
    shoppingCart.classList.toggle('active');
};


//klik diluar sibar untuk menghilangkan nav

const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click',function (e){
    if (!hm.contains(e.target) && !navbarnav.contains(e.target)){
        navbarnav.classList.remove('active');
    }

        if (!sb.contains(e.target) && !searchForm.contains(e.target)){
            searchForm.classList.remove('active');
        }
        if (!sc.contains(e.target) && !shoppingCart.contains(e.target)){
            shoppingCart.classList.remove('active');
        }


});


// modal box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButton = document.querySelectorAll('.item-detail-button');

itemDetailButton.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display ='flex';
        e.preventDefault();
    };
});


document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
};


window.onclick = (e) => {
    if (e.target === itemDetailModal){
        itemDetailModal.style.display = 'none';
    }
};