const left = document.querySelector('.arrow-left');
const right = document.querySelector('.arrow-right');
const slider = document.querySelector('.cards');
const slides = document.querySelector(' .card');
let margin = 0;

left.addEventListener('click', showPreviousSlide);
right.addEventListener('click', showNextSlide);


function showNextSlide() {
    let width = slides.offsetWidth + 20;
    if (margin > -1860) {
        margin = margin - width;
        slider.style.marginLeft = margin + 'px';
    }
}

function showPreviousSlide() {
    let width = slides.offsetWidth + 20;
    if (margin < 0) {
        margin = margin + width;
        slider.style.marginLeft = margin + 'px';
    }
}



const btnShowHid = document.querySelector('.show')

btnShowHid.addEventListener('click', function (){
    let blockHiddenShow = document.querySelector('.hidden');
  
    if (btnShowHid.innerHTML === 'Почитать еще'){
        btnShowHid.innerHTML = 'Скрыть'
        blockHiddenShow.style.display = 'flex';
    } else if  (btnShowHid.innerHTML === 'Скрыть') {
        btnShowHid.innerHTML = 'Почитать еще'
        blockHiddenShow.style.display = 'none';
    }
})






