'use strict';

const mobileBtn = document.querySelector('#mobile-toggle-btn');
const navbar = document.querySelector('#navbar');

mobileBtn.addEventListener('click', () => {
    if (navbar.className === 'navbar') {
        navbar.className += ' responsive';
    } else {
        navbar.className = 'navbar';
    }
    // adding class to btn toggle to change display
    if (mobileBtn.className === 'hamburger') {
        mobileBtn.className += ' active';
    } else mobileBtn.className = 'hamburger';
})