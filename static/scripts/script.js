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
    /*stopCurrentVideo();*/
});

/*
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
*/

$(document).ready(function () {
    // get the carousel element
    var carousel = $('#carouselExampleIndicators');

    // add a 'slide.bs.carousel' event listener to the carousel
    carousel.on('slide.bs.carousel', function () {
        console.log('The carousel is sliding!');
    });

    // add a 'slid.bs.carousel' event listener to the carousel
    carousel.on('slid.bs.carousel', function () {
        console.log('The carousel has finished sliding!');
    });
});
// Load the YouTube IFrame API script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Define the video IDs and player objects
var videoIds = ['JlRSIea7GXU', 'clDVcMkZd38', 'j9RCZDciYfU'];
var players = [];

function onPlayerReady(event) {
    console.log('players made');
    // Add the player to the players array
    players.push(event.target);
}

// Create a YouTube player object for each video
function onYouTubeIframeAPIReady() {
    for (var i = 0; i < videoIds.length; i++) {
        players[i] = new YT.Player('player' + (i + 1), {
            height: '360',
            width: '640',
            videoId: videoIds[i],
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
}

function onPlayerStateChange(event) {
    console.log('changed');
    if (event.data == YT.PlayerState.ENDED) {
        var currentIndex = parseInt(event.target.getIframe().getAttribute('data-bs-slide-to'));
        var nextIndex = (currentIndex + 1) % $('#carouselExampleIndicators').find('.carousel-item').length;
        $('#carouselExampleIndicators').carousel(nextIndex);
    }
    if (event.data == YT.PlayerState.PLAYING) {
        var currentSlide = $('#carouselExampleIndicators').find('.carousel-item')[currentIndex];
        $(currentSlide).find('iframe').each(function () {
            var playerIndex = parseInt($(this).attr('id').replace('player', '')) - 1;
            players[playerIndex].pauseVideo();
        });
    }
}

$(document).ready(function () {
    var carousel = $('#carouselExampleIndicators');

    // add a 'slide.bs.carousel' event listener to the carousel
    carousel.on('slide.bs.carousel', function () {
        // Pause all videos
        for (var i = 0; i < players.length; i++) {
            players[i].pauseVideo();
        }
    });
});