"use strict";

console.log("funguju")


//scrolls down when clicked on a link from navbar - I used css transition n offset for this
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         let element = document.querySelector(this.getAttribute('href'));
    //         //acounts for the hegiht of the navbar
    //         let yOffset = -80;
    //         let y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    //         window.scrollTo({top: y, behavior: 'smooth'});
    //     });
    // });


//shows which part of the page I am on / scrollspy
let scrollspy = function () {
    let resumePart = document.querySelectorAll(".part"); //returns a NodeList
    let resumeParts = {};
    let i = 0;

    Array.prototype.forEach.call(resumePart, function (e) {
        resumeParts[e.id] = e.offsetTop - 80;
    });

    window.onscroll = function () {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (i in resumeParts) {
            if (resumeParts[i] <= scrollPosition) {
                document.querySelector('.active').setAttribute('class', 'navitem');
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active', 'navitem');
            }
        }
    }
};

scrollspy();


//animate skills bars when in view

(function () {
    var skillBars;
    var windowHeight;

    function init() {
        skillBars = document.querySelectorAll('.skill-bar');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (var i = 0; i < skillBars.length; i++) {
            var oneBar = skillBars[i];
            var positionFromTop = skillBars[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                oneBar.classList.remove('no-animation');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();