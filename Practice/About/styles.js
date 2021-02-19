const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.overlay');

btnHamburger.addEventListener('click',function(){
    console.log('opened');
    if (header.classList.contains('open')) {
        header.classList.remove('open');
    }
    else{
        header.classList.add('open');
    }
});

