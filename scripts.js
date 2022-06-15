

function closeMenu(){
    const closebtn = document.querySelector('#closeMenu');
    const openbtn = document.querySelector('#openMenu');
    const nav = document.querySelector('#menu');
    
    nav.classList.add('hideMenu');
    nav.classList.remove('showMenu');
    closebtn.classList.add('hide');
    openbtn.classList.remove('hide');
}
function openMenu(){   
    const closebtn = document.querySelector('#closeMenu');
    const openbtn = document.querySelector('#openMenu');
    const nav = document.querySelector('#menu');
    
    nav.classList.remove('hideMenu');
    nav.classList.add('showMenu');
    closebtn.classList.remove('hide')
    openbtn.classList.add('hide');
}