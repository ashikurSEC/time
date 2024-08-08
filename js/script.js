//! ==== Dark Toggoler ==== // 

let icons = document.querySelector('.icons');
let clock = document.getElementById('clock');
icons.onclick = () => {
    clock.classList.toggle('dark')
}


//! ==== Date Time ==== //

let hour_num = document.querySelector('.hour_num');
let min_num  = document.querySelector('.min_num'); 
let sec_num  = document.querySelector('.sec_num');


setInterval(() => {

    let date = new Date ();
    let hour = date.getHours();
    let min  = date.getMinutes();
    let sec  = date.getSeconds();

    let d = hour < 12 ? 'AM' : 'PM';
    hour  = hour > 12 ? hour - 12 : hour;


    hour = hour < 10 ? "0" + hour : hour;
    min  = min  < 10 ? "0" + min  : min;
    sec  = sec  < 10 ? "0" + sec  : sec;
    
    
    hour_num.textContent = hour;
    min_num.textContent  = min;
    sec_num.textContent  = sec;
    

}, 1000);