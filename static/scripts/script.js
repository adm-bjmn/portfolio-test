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
nextButton.addEventListener('click', stopCurrentVideo);

function stopCurrentVideo() {
    const currentVideo = document.querySelector('video[playing]');
    if (currentVideo) {
        currentVideo.pause();
        currentVideo.removeAttribute('playing');
    }
}