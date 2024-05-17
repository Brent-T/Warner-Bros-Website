// Get all video elements
var videos = document.querySelectorAll('.item video');

// Define function to play video on hover
function playVideo(event) {
    event.target.play();
}

// Define function to pause video on mouse leave
function pauseVideo(event) {
    event.target.pause();
}

// Add event listeners to each video
videos.forEach(function(video) {
    video.addEventListener('mouseover', playVideo);
    video.addEventListener('mouseout', pauseVideo);
});

