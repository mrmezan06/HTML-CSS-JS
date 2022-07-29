const videoEl = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media stream, pass to video element, then play

async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoEl.srcObject = mediaStream;
        videoEl.onloadedmetadata = () => {
            videoEl.play();
        };
    }catch(error){
        // Catch Error
        console.log('Happened: ' + error);
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;
    await videoEl.requestPictureInPicture();
    button.disabled = false;
});

// On Load
selectMediaStream();