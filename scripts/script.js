const header = document.querySelector('.navbar');
const blob = document.getElementById("blob");
const fadeIns = document.querySelectorAll(".scroll-fade-in");


// manages the quick navigation bar at the top.
window.onscroll = function() {
    var top = window.scrollY;
    if(top >= 100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

// controls the movement of the blob
document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    // this code is for perfectly following the mouse
    // blob.style.left = `${clientX}px`;
    // blob.style.top = `${clientY}px`;

    // animate allows the blob to lag behind a bit
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px` 
    }, {duration: 3000, fill: "forwards"});
}

// controls and manages anything that fades in on scroll
// its set up just in case I want more things to fade-in in 
// the future.
const appearOptions = {
    threshold: 1, // dictates that the effects won't happen until the element is fully on screen
    rootMargin: "0px 0px -100px 0px" // dictates the margins for our screen 
};

const appearOnScroll = new IntersectionObserver(
    function(entries) {
        entries.forEach(entry => {
            // turns out, with ease-in-out, we only need to toggle the "appear" class and 
            // the transition will go both ways
            entry.target.classList.toggle('appear');
        })
    }, appearOptions); 

// this sets all elements with the scroll-fade-in to be observed
fadeIns.forEach(fadeIn => {
    appearOnScroll.observe(fadeIn);
})