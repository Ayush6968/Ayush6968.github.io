const container = document.querySelector(".slidercontainer")
const slider = document.querySelector(".actualslider")
const images = document.querySelectorAll(".actualslider img")
const box = document.querySelector(".boxfortheroom")


let counter = 1
const size = box.clientWidth
slider.style.transform = 'translateX(' + (-size * counter) + 'px)'



function nexttoggle() {
    if (counter >= images.length - 1) return;
    const slider = document.querySelector(".actualslider");
    slider.style.transition = 'transform 0.9s ease-in-out'
    counter++
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)'



}


function prevtoggle() {
    if (counter <= 0) return;
    const slider = document.querySelector(".actualslider");
    slider.style.transition = 'transform 0.9s ease-in-out'
    counter--
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)'

}

slider.addEventListener('transitionend', () => {
    if (images[counter].id == 'lastclone') {
        slider.style.transition = 'none'
        counter = images.length - 2
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
    if (images[counter].id == 'firstclone') {
        slider.style.transition = 'none'
        counter = images.length - counter
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
});


// for first slider
const container2 = document.querySelector(".slidercontainer2")
const slider2 = document.querySelector(".actualslider2")
const images2 = document.querySelectorAll(".actualslider2 img")



let counter2 = 1

const size2 = container2.clientWidth

slider2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)'





function nexttoggle2() {
if (counter2 >= images2.length - 1) return;
slider2.style.transition = 'transform 0.9s ease-in-out'
counter2++
slider2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)'

}



function prevtoggle2() {
if (counter2 <= 0) return;

slider2.style.transition = 'transform 0.9s ease-in-out'
counter2--
slider2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)'

}

slider2.addEventListener('transitionend', () => {
if (images2[counter2].id == 'lastclone2') {
slider2.style.transition = 'none'
counter2= images2.length - 2
slider2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)'
}
if (images2[counter2].id == 'firstclone2') {
slider2.style.transition = 'none'
counter2 = images2.length - counter2
slider2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)'
}
});




// For Smooth Scrolling
function smoothscrolling(tss,duration){
    var targetforss=document.querySelector(tss);
    var targetpos=targetforss.getBoundingClientRect().top;
    var startpos=window.pageYOffset;
    var distance=targetpos-startpos;
    var startTime=null;

    function animation(currentTime){
        if(startTime===null) startTime=currentTime;
        var timeElasped=currentTime-startTime;
        var run=easeInOutQuad(timeElasped,startpos,distance,duration);
        window.scrollTo(0,run);
        if(timeElasped < duration)  requestAnimationFrame(animation)
    }
    function easeInOutQuad(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };

    requestAnimationFrame(animation)
   
} 
    
var aboutss=document.querySelector('.aboutss')
aboutss.addEventListener("click",function(){
    smoothscrolling(".smoothscrolling1",1000)}
    )
var storiesss=document.querySelector('.storiesss')
storiesss.addEventListener("click",function(){
    smoothscrolling(".smoothscrolling2",1000)}
    )
var exploress=document.querySelector('.exploress')
exploress.addEventListener("click",function(){
    smoothscrolling(".smoothscrolling3",1000)}
    )
var galleryss=document.querySelector('.galleryss')
galleryss.addEventListener("click",function(){
    smoothscrolling(".smoothscrolling4",1000)}
    )

