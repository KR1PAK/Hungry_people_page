const  menu  = document.querySelector('.menu__burger');
const  col_1  = document.querySelector('.col-1');
const  col_2  = document.querySelector('.col-2');
const  logo  = document.querySelector('.logo');
const  container  = document.querySelector('.header__container');
const  animItems  = document.querySelectorAll('._anim-items');


menu.addEventListener('click' , function (e){
    menu.classList.toggle('menu__active')
    col_1.classList.toggle('menu__active')
    col_2.classList.toggle('menu__active')
    container.classList.toggle('menu__active')
    logo.classList.toggle('menu__active')
});


if (animItems.length > 0){
    window.addEventListener('scroll' , animOnScroll);
    function animOnScroll(){
        for(let index = 0;index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            }else{
                if (!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}

    }
    setTimeout(() =>{
        animOnScroll();
    }, 300);
}