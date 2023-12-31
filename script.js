// Selecting DOM elements
let video = document.querySelector("#my-video");
let playPauseBtn = document.querySelector("#play-pause-btn");
let stopBtn = document.querySelector("#stop-btn");
let volumeSlider = document.querySelector("#volume-slider");
let progressBar = document.querySelector("#progress-bar");
let customControls = document.querySelector("#custom-controls");

// Event listener for the play/pause button
playPauseBtn.addEventListener("click", function(){
    // Check if the video is paused
    if (video.paused){
        // If paused, play the video, update button text, and show controls
        video.play();
        playPauseBtn.innerHTML = "PAUSE";
        showControls();
    } else {
        // If playing, pause the video, update button text, and hide controls
        video.pause();
        playPauseBtn.innerHTML = "PLAY";
        hideControls();
    }
});

// Event listener for the stop button
stopBtn.addEventListener("click", function(){
    // Pause the video, reset the playback time to 0, and hide controls
    video.pause();
    video.currentTime = 0;
    hideControls();
});

// Event listener for the volume slider
volumeSlider.addEventListener("input", function(){
    // Update the video volume based on the slider value
    video.volume = volumeSlider.value;
});

// Event listener for the video time update
video.addEventListener("timeupdate", function(){
    // Calculate the progress as a percentage and update the progress bar
    let progress = (video.currentTime / video.duration) * 100;
    progressBar.value = progress;
});

// Event listener for the progress bar click
progressBar.addEventListener("click", function(e){
    // Get the width of the progress bar
    let progressWidth = progressBar.clientWidth;
    // Get the clicked position relative to the progress bar
    let clickedPosition = e.offsetX;
    // Calculate the time to set based on the clicked position
    let clickedTime = (clickedPosition / progressWidth) * video.duration;
    // Set the video playback time to the calculated time
    video.currentTime = clickedTime;
});

// Function to hide controls
function hideControls() {
    customControls.style.opacity = 0;
}

// Function to show controls
function showControls() {
    customControls.style.opacity = 1;
}

// Hide controls initially
hideControls();

// Event listener to show controls on hover
video.addEventListener("mouseenter", showControls);

// Event listener to hide controls on mouseout
video.addEventListener("mouseout", hideControls);
