let sc = document.getElementById('sc');
let mn = document.getElementById('mn');
let hr = document.getElementById('hr');

let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let ampm = document.getElementById('ampm');


setInterval(() => {
            let day = new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * 6;
            let ss = day.getSeconds() * 6;

            hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sc.style.transform = `rotateZ(${ss}deg)`;
            // Digital Clock
            let h = new Date().getHours();
            let m = new Date().getMinutes();
            let s = new Date().getSeconds();
            let am = h >= 12 ? 'PM' : 'AM';
            // Convert to 12 hour format
            if(h > 12){
                h = h - 12; 
            }
            //  add zero before single digit numbers
            h = h < 10 ? '0' + h : h;
            m = m < 10 ? '0' + m : m;
            s = s < 10 ? '0' + s : s;
            //  update the clock
            hour.innerHTML = h;
            min.innerHTML = m;
            sec.innerHTML = s;
            ampm.innerHTML = am;

});