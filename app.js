'use strict';

document.addEventListener('keyup', (e) => {
    document.querySelector("h3").style.display = 'none';
    document.querySelector(".wrapper").style.display = 'block';
    document.querySelector(".key").textContent = e.key;
    document.querySelector(".code").textContent = e.keyCode;
    if(e.keyCode === 32){
        document.querySelector(".key").textContent = 'Space';
    }
});