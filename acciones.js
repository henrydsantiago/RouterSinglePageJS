const menuBB = document.querySelector('.header-nav');
console.log(menuBB);
const burgerButton = document.querySelector('#burgerButton');


function hideShow(){
    if(menuBB.classList.contains('is-active')){
        console.log("Tiene")
        menuBB.classList.remove('is-active');
    }
    else{
        console.log("No tiene");
        menuBB.classList.add("is-active");
    }
}

/* Para verificar si el viewport pertenece a un tamaño inferior al del IPAD */
const ipad = window.matchMedia('screen and (max-width:480px)');

ipad.addEventListener('change', validation);

function validation(event){
    console.log(event)
    if(event.matches){
        burgerButton.addEventListener('click', hideShow);
    }else{
        burgerButton.removeEventListener('click', hideShow);
    }
}

validation(ipad);