// Section 1
// Cube
let x = 0;
let y = 20;
let z = 0;
let bool = true;
let interval;
const cube = document.querySelector('.cube');
document.querySelector('.top-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x += 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});
document.querySelector('.bottom-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x -= 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});
document.querySelector('.left-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y -= 20}deg) rotateZ(${z}deg)`;
});
document.querySelector('.right-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y += 20}deg) rotateZ(${z}deg)`;
});
document.querySelector('.top-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z -= 20}deg)`;
});
document.querySelector('.bottom-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z += 20}deg)`;
});
const playPause = () => {
    if(bool){
        interval = setInterval(() => {
            cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
        }, 100);
    }else {
        clearInterval(interval);
    }
}
playPause();

document.querySelector('.controls').addEventListener('mouseover', () => {
    bool = false;
    playPause();
});
document.querySelector('.controls').addEventListener('mouseout', () => {
    bool = true;
    playPause();
});
// End of Cube
// Slideshow
const slideshowDivs = () => {
    for(let i=1; i<=5; i++){
        const div = document.createElement('div');
        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;
        i===1 && div.classList.add('change');

        document.querySelector('.slideshow').appendChild(div);
    }
}

slideshowDivs();

const divs = document.querySelectorAll('.slideshow div');

let counter = 1;
const slideshow = () => {
    setInterval(() => {
        counter++;
        const div = document.querySelector('.slideshow .change');
        div.classList.remove('change');
        if(counter < divs.length){
            div.nextElementSibling.classList.add('change');
        }else{
            divs[0].classList.add('change');
            counter = 1;
        }
        
        
    }, 20000)
}
slideshow();
// End of Slideshow
// End of Section 1

// Section 3
const section3Content =  document.querySelector('.section-3-content');
window.addEventListener('scroll', ()=> {
    if(window.pageYOffset + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight / 2) {
        section3Content.classList.add('change')
    }
});
// End of Section 3


