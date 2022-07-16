const imgContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let photosArray = [];
let ready = false;
let imagesLoaded = 0;
let totatImages = 0;
// Check if all images are loaded
function imgLoaded() {
    imagesLoaded++;
    if(imagesLoaded === totatImages){
        ready = true;
        loader.hidden = true;
    }
}

// Helper function to set Attributes to elements
function setAttributes(element, attributes) {
    for(const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}

// Create Elements for links and images, add to DOM
function displayPhotos() {
    imagesLoaded = 0;
    totatImages = photosArray.length;
    photosArray.forEach(photo => {
        const item = document.createElement('a');
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        });

        const img = document.createElement('img');
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);
        setAttributes(img, {
            src: photo.urls.small,
            alt: photo.alt_description,
            title: photo.alt_description
        });
        // Event Listener for image load
        img.addEventListener('load', imgLoaded);
        // put img inside a tag
        item.appendChild(img);
        imgContainer.appendChild(item);

    });
}

// API call to get photos
const count = 30;
const apiKey = 'KiWpCq1s_mvvhCsDz_4IWxZ6goKvPpfIY6tEwLhb7i4';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


// Get Photos from Unsplash API

async function getPhotos() {
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    }catch(error){

    }
}

// Check to see if scrolling near bottom of page, if so, get more photos
window.addEventListener('scroll', () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
        ready = false;
        getPhotos();
    }
});

// Onload
getPhotos();