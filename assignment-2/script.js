// Grab the main audio element that will be used to play the media
const mediaPlayer = document.getElementById("mediaPlayer");

// Play/Pause button functionality and its icon
const playPauseBtn = document.getElementById("playPauseBtn");
const playPauseIcon = document.getElementById("playPauseIcon");

// Mute button functionality and its icon
const muteBtn = document.getElementById("muteBtn");
const muteIcon = document.getElementById("muteIcon");

// Loop button, allows users to loop the track
const loopBtn = document.getElementById("loopBtn");
const loopIcon = document.getElementById("loopIcon");

// Buttons to skip backward and forward through the track
const backwardBtn = document.getElementById("backwardBtn");
const forwardBtn = document.getElementById("forwardBtn");

// Progress bar for showing and controlling the current track's progress
const progressSlider = document.getElementById("progressSlider");

// Volume control slider for adjusting the media's volume
const volumeSlider = document.getElementById("volumeSlider");

// Button to toggle disco mode (background color changes)
const discoModeBtn = document.getElementById("discoModeBtn");

// Fetch all the playlist links so users can click them to change tracks
const playlistLinks = document.querySelectorAll(".playlist a");

// Placeholder for icon links. Makes it easy to update icons in one place.
const iconLinks = {
  play: "https://img.icons8.com/?size=100&id=9978&format=png&color=F25081", // Play icon
  pause: "https://img.icons8.com/?size=100&id=9987&format=png&color=F25081", // Pause icon
  mute: "https://img.icons8.com/?size=100&id=9983&format=png&color=F25081", // Mute icon
  volume: "https://img.icons8.com/?size=100&id=9983&format=png&color=F25081", // Volume icon
  loop: "https://img.icons8.com/?size=100&id=23623&format=png&color=F25081", // Loop icon
  backward: "https://img.icons8.com/?size=100&id=60636&format=png&color=F25081", // Backward icon
  forward: "https://img.icons8.com/?size=100&id=60671&format=png&color=F25081", // Forward icon
};

// Set the initial icons for play, mute, loop, and navigation
playPauseIcon.src = iconLinks.play;
muteIcon.src = iconLinks.volume;
loopIcon.src = iconLinks.loop;
document.getElementById("backwardIcon").src = iconLinks.backward;
document.getElementById("forwardIcon").src = iconLinks.forward;

// Play/Pause button functionality: toggle between play and pause states
playPauseBtn.addEventListener("click", () => {
  if (mediaPlayer.paused) {
    mediaPlayer.play(); // Start playing the media
    playPauseIcon.src = iconLinks.pause; // Change the icon to pause
  } else {
    mediaPlayer.pause(); // Pause the media
    playPauseIcon.src = iconLinks.play; // Change the icon to play
  }
});

// Mute/Unmute button functionality: toggle between muted and unmuted
muteBtn.addEventListener("click", () => {
  mediaPlayer.muted = !mediaPlayer.muted; // Toggle the muted state
  muteIcon.src = mediaPlayer.muted ? iconLinks.mute : iconLinks.volume; // Change the icon based on state
});

// Loop button functionality: toggle looping for the current track
loopBtn.addEventListener("click", () => {
  mediaPlayer.loop = !mediaPlayer.loop; // Toggle loop mode
  loopIcon.style.filter = mediaPlayer.loop ? "brightness(1.5)" : "none"; // Visually indicate loop mode is on
});

// Skip backward button: move the track backward by 10 seconds
backwardBtn.addEventListener("click", () => {
  mediaPlayer.currentTime -= 10; // Go backward by 10 seconds
});

// Skip forward button: move the track forward by 10 seconds
forwardBtn.addEventListener("click", () => {
  mediaPlayer.currentTime += 10; // Go forward by 10 seconds
});

// Volume control: adjust the volume as the slider is moved
volumeSlider.addEventListener("input", (e) => {
  mediaPlayer.volume = e.target.value; // Set volume based on the slider's value
});

// Update the progress bar as the track plays
mediaPlayer.addEventListener("timeupdate", () => {
  progressSlider.value = (mediaPlayer.currentTime / mediaPlayer.duration) * 100; // Show track progress
});

// Allow users to jump to different parts of the track using the progress bar
progressSlider.addEventListener("input"),
  (e) => {
    const newTime = (e.target.value / 100) * mediaPlayer.duration; // Calculate the new time
    mediaPlayer.currentTime = newTime; // Set the track to the
  };
