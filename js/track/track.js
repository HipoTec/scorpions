const audioPlayer = document.getElementById("audio-player");
const playPauseBtn = document.getElementById("playPauseBtn");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");
const progressBar = document.querySelector(".progress-bar");
const songTitleElement = document.getElementById("songTitle");
const songYearElement = document.getElementById("songYear");
const albumImgElement = document.getElementById("albumImg");
const songList = document.getElementById("songList");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

const songs = [
  {
    title: "Rock Believer",
    year: "2022",
    albumImg: "/assets/images/track/Track1.jpeg",
    audioSrc: "/assets/music/rock-believer.mp3",
  },
  {
    title: "Still Loving You",
    year: "1984",
    albumImg: "/assets/images/track/Track2.jpeg",
    audioSrc: "/assets/music/still-loving-you.mp3",
  },
  {
    title: "Black Out",
    year: "1982",
    albumImg: "/assets/images/track/Track3.jpg",
    audioSrc: "/assets/music/blackout.mp3",
  },
  {
    title: "Comeblack",
    year: "2011",
    albumImg: "/assets/images/track/Track4.jpeg",
    audioSrc: "/assets/music/comeblack.mp3",
  },
  {
    title: "Believe in Love",
    year: "1982",
    albumImg: "/assets/images/track/Track5.jpeg",
    audioSrc: "/assets/music/believe-in-love.mp3",
  },
  {
    title: "Born To Touch Your Feelings",
    year: "1985",
    albumImg: "/assets/images/track/Track6.jpeg",
    audioSrc: "/assets/music/born-to-touch-your-feelings.mp3",
  },
  {
    title: "Eye || Eye",
    year: "1999",
    albumImg: "/assets/images/track/Track7.jpeg",
    audioSrc: "/assets/music/eye-to-eye.mp3",
  },
  {
    title: "Crazy World",
    year: "1990",
    albumImg: "/assets/images/track/Track8.jpeg",
    audioSrc: "/assets/music/crazy-world.mp3",
  },
  {
    title: "Wind Of Change",
    year: "1990",
    albumImg: "/assets/images/track/Track9.jpeg",
    audioSrc: "/assets/music/wind-of-change.mp3",
  },
  {
    title: "Send Me Angel",
    year: "1990",
    albumImg: "/assets/images/track/Track10.jpg",
    audioSrc: "/assets/music/send-me-an-angel.mp3",
  },
];

let currentSongIndex = 0;

// Function to toggle play/pause of the audio
function togglePlay() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline";
  } else {
    audioPlayer.pause();
    playIcon.style.display = "inline";
    pauseIcon.style.display = "none";
  }
}

// Function to update the progress bar
function updateProgressBar() {
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.style.width = `${progress}%`;
}

// Function to change the song and update the UI
function changeSong(index) {
  currentSongIndex = index;
  const selectedSong = songs[index];
  audioPlayer.src = selectedSong.audioSrc;
  songTitleElement.textContent = selectedSong.title;
  songYearElement.textContent = selectedSong.year;
  albumImgElement.src = selectedSong.albumImg;
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}

// Function to generate the song list dynamically
function generateSongList() {
  songs.forEach((song, index) => {
    const songItem = document.createElement("p");
    songItem.textContent = `${index + 1}. ${song.title}`;
    songItem.addEventListener("click", () => changeSong(index));
    songList.appendChild(songItem);
  });
}

// Add event listeners
playPauseBtn.addEventListener("click", togglePlay);
audioPlayer.addEventListener("timeupdate", updateProgressBar);

// Generate the song list
generateSongList();

// Initialize the first song
changeSong(currentSongIndex);

// Function to play the next song
function playNextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  changeSong(currentSongIndex);
  audioPlayer.play();
}

// Function to play the previous song
function playPreviousSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  changeSong(currentSongIndex);
  audioPlayer.play();
}

// Add event listeners to the Next and Previous buttons
nextBtn.addEventListener("click", playNextSong);
prevBtn.addEventListener("click", playPreviousSong);
