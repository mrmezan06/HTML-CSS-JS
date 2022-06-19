const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let int = setInterval(blurring, 30)
function blurring()
{
    load++;
    console.log(load);
    if(load > 99)
    {
        clearInterval(int)
    }
    loadText.innerText = `Loading...${load}%`;
    /* loadText.style.opacity = load / 100; */ /* Opacity range 0 - 1 */
    /* loadText.style.opacity = scale(load, 0, 100, 1, 0); */
    loadText.style.opacity = (100-load) / 100; /* My Function */
    /* bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; */ /* Tutor Function */

    let blurValue = (3000 - 30*load) / 100;
    bg.style.filter = `blur(${blurValue}px)`; /* My Function */
}
/* Range The Number Between Opacity Range */
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


