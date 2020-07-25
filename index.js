"use strict";

console.log("funguju")


//scrolls down when clicked on a link from navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let element = document.querySelector(this.getAttribute('href'));
        //acounts for the hegiht of the navbar
        let yOffset = -80;
        let y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    });
});

// const navItems = document.querySelectorAll(".navitem"); //returns a NodeList
//     const navItemsArr = Array.prototype.slice.call(navItems);
//     console.log(navItemsArr[0].hash);

//shows which part of the page I am on 
window.onscroll = function() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
       console.log(scrollPosition);
    const resumeParts = document.querySelectorAll(".part"); //returns a NodeList
    //creating an array from a nodelist
    const resumePartsArr = Array.prototype.slice.call(resumeParts);
       
    resumePartsArr.forEach(function(item) {
        let target = item.getBoundingClientRect().y;
        let id = item.id;
    
        if (target <= scrollPosition) {
            console.log(id);
            // document.querySelectorAll('.navitem').classList.remove(".active");
            // document.querySelectorAll('nav > a[href=#' + id + ']').classList.add('active');
        }
    });
} 
