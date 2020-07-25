"use strict";

console.log("funguju")


//scrolls down when clicked on a link from navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let element = document.querySelector(this.getAttribute('href'));
        let yOffset = -80;
        let y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    });
});

