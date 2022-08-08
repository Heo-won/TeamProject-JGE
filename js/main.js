let scrollYpos;
window.addEventListener("scroll",  function() {
    scrollYpos = window.scrollY;
    console.log(scrollYpos);
    
    if(scrollYpos > 100) {
        const planetAnimate = document.querySelector(".planet1")
        planetAnimate.classList.add("animate");
        console.log(planetAnimate);
    }
})