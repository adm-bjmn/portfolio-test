function checkVisibility() {
    const buttonList = document.querySelector('.button-list');
    const buttonListRect = buttonList.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (buttonListRect.top < windowHeight * 0.4) {
        const buttonListItems = document.querySelectorAll('.button-list li');
        buttonListItems.forEach(item => item.classList.add('visible'));
    }
}

window.addEventListener('scroll', checkVisibility);

window.addEventListener('load', function () {
    var loader = document.getElementById('loader');
    setTimeout(function () {
        loader.style.display = 'none';
    }, 20);
});

const nextButton = document.querySelector('#next-button');
nextButton.addEventListener('click', function () {
    console.log('Button clicked');
    stopCurrentVideo();
});


function stopCurrentVideo() {
    const iframe = document.querySelector('.carousel-item.active iframe');
    const video = iframe.contentDocument.querySelector('video');
    if (video) {
        video.pause();
    }
}

const myVideo = document.querySelector('#myVideo');

nextButton.addEventListener('click', () => {
    myVideo.pause();
    // code to go to the next project
});