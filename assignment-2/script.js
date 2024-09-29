const mediaPlayer = document.getElementById("mediaPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const playPauseIcon = document.getElementById("playPauseIcon");
const muteBtn = document.getElementById("muteBtn");
const muteIcon = document.getElementById("muteIcon");
const loopBtn = document.getElementById("loopBtn");
const loopIcon = document.getElementById("loopIcon");
const backwardBtn = document.getElementById("backwardBtn");
const forwardBtn = document.getElementById("forwardBtn");
const progressSlider = document.getElementById("progressSlider");
const volumeSlider = document.getElementById("volumeSlider");
const playlistLinks = document.querySelectorAll(".playlist a");
const discoModeBtn = document.getElementById("discoModeBtn");

// Placeholder for icon URLs
const iconLinks = {
  play: "https://img.icons8.com/?size=100&id=9978&format=png&color=F25081",
  pause: "https://img.icons8.com/?size=100&id=9987&format=png&color=F25081",
  mute: "https://img.icons8.com/?size=100&id=9983&format=png&color=F25081",
  volume: "https://img.icons8.com/?size=100&id=9983&format=png&color=F25081",
  loop: "https://img.icons8.com/?size=100&id=23623&format=png&color=F25081",
  backward: "https://img.icons8.com/?size=100&id=60636&format=png&color=F25081",
  forward: "https://img.icons8.com/?size=100&id=60671&format=png&color=F25081",
};

// Set initial icons
playPauseIcon.src = iconLinks.play;
muteIcon.src = iconLinks.volume;
loopIcon.src = iconLinks.loop;
document.getElementById("backwardIcon").src = iconLinks.backward;
document.getElementById("forwardIcon").src = iconLinks.forward;

// Play/Pause Button Functionality
playPauseBtn.addEventListener("click", () => {
  if (mediaPlayer.paused) {
    mediaPlayer.play();
    playPauseIcon.src = iconLinks.pause; // Change to pause icon
  } else {
    mediaPlayer.pause();
    playPauseIcon.src = iconLinks.play; // Change to play icon
  }
});

// Mute/Unmute Button Functionality
muteBtn.addEventListener("click", () => {
  mediaPlayer.muted = !mediaPlayer.muted;
  muteIcon.src = mediaPlayer.muted ? iconLinks.mute : iconLinks.volume; // Toggle between mute and volume icons
});

// Loop Button Functionality
loopBtn.addEventListener("click", () => {
  mediaPlayer.loop = !mediaPlayer.loop;
  loopIcon.style.filter = mediaPlayer.loop ? "brightness(1.5)" : "none";
});

// Skip Backward Button Functionality
backwardBtn.addEventListener("click", () => {
  mediaPlayer.currentTime -= 10; // Skip backward 10 seconds
});

// Skip Forward Button Functionality
forwardBtn.addEventListener("click", () => {
  mediaPlayer.currentTime += 10; // Skip forward 10 seconds
});

// Volume Control Functionality
volumeSlider.addEventListener("input", (e) => {
  mediaPlayer.volume = e.target.value;
});

// Update the progress bar as the track plays
mediaPlayer.addEventListener("timeupdate", () => {
  progressSlider.value = (mediaPlayer.currentTime / mediaPlayer.duration) * 100;
});

// Jump to a different part of the track when the progress bar is used
progressSlider.addEventListener("input", (e) => {
  const newTime = (e.target.value / 100) * mediaPlayer.duration;
  mediaPlayer.currentTime = newTime;
});

// Playlist functionality: switch track when clicked
playlistLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const newSource = e.target.getAttribute("data-src");
    mediaPlayer.src = newSource;
    mediaPlayer.play(); // Automatically play the new track
    playPauseIcon.src = iconLinks.pause; // Update play/pause button icon
  });
});
