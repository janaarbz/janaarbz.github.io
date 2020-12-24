const songTitle = document.querySelector(".song-title");
const thumbnail = document.querySelector("#thumbnail");
const BG = document.querySelector("#BG");
const pp = document.querySelector("#pp");
const progressBar = document.querySelector("#progressBar");
const song = document.querySelector("#song");
var playing = true;
var songs = ["Jaden Smith - Icon.mp3", "Billie Eilish - bad guy (Lyrics).mp3", "Tommee Profitt - In The End (Mellen Gi Remix).mp3", "Ross Lynch - On My Own (From Teen Beach 2).mp3","y2mate.com - lord_huron_the_night_we_met_lyric_video_wGF7PswOENQ.mp3","y2mate.com - idina_menzel_evan_rachel_wood_show_yourself_from_frozen_2lyric_video_md7dK5-qvHc.mp3","y2mate.com - jar_of_hearts_christina_perri_lyrics_rOYnrBuIMgA.mp3","y2mate.com - christina_perri_the_lonely_lyrics_a9YQPWqTnx4.mp3"],
  songIndex = 0;
(thumbnails = ["images/IMG_6771.jpg"]),
  (songNames = [
    "Jaden Smith - Icon",
    "Bad Guy - Billie Eilish",
    "In The End - Linkin Park",
    "On My Own - Ross Lynch",
    "Night We Met - Lord Huron",
    "Show Yourself - Idina Menzel",
    "Jar Of Hearts - Christina Perri",
    "The Lonely - Christina Perri"
  ]);


  
  var something = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            // do something
            setTimeout(function (){

              confetti.start()
            
            }, 9000);
            
        } else {
            confetti.start()
        }
    };
})();

function playPause() {
  if (playing) {
    const song = document.querySelector("#song"),
      pp = document.querySelector("#pp"),
      thumbnail = document.querySelector("#thumbnail");
    pp.src = "https://icons-for-free.com/iconfiles/png/512/music+pause+play+stop+icon-1320185671881968262.png";
    song.play(); //plays the song
    playing = false;
    thumbnail.style.width = "160%";
  //  confetti.maxCount = 150;     //set max confetti count
confetti.speed = 3;          //set the particle animation speed
	//confetti.frameInterval = 20; //the confetti animation frame interval in milliseconds
	confetti.alpha = 0.8;        //the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
  //confetti.gradient = false; 

something();

    document.getElementById("song-title").innerHTML = "Frohe Weihnachten Baby ❤"
  } else {
    pp.src = "http://www.iconarchive.com/download/i91182/icons8/windows-8/Media-Controls-Play.ico";
    song.pause(); //pauses the song
    playing = true;
    thumbnail.style.width = "130%";
    confetti.pause()
    document.getElementById("song-title").innerHTML = "Starte die Musik"
  }
}


var myVid = document.getElementById('video');    
if (myVid !== null) { // Possibility of no video loaded in DOM
    myVid.onplay = function () {
      const song = document.querySelector("#song");
      pp.src = "http://www.iconarchive.com/download/i91182/icons8/windows-8/Media-Controls-Play.ico";
      song.pause(); //pauses the song
      playing = true;
      thumbnail.style.width = "130%";
    };
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length-1) songIndex = 0;
  document.querySelector("#song").src = songs[songIndex];
  document.querySelector("#thumbnail").src = thumbnails[songIndex];
  document.querySelector("#BG").src = thumbnails[songIndex];
  playPause();
  document.querySelector(".song-title").innerHTML = songNames[songIndex];
}

function previousSong() {
  songIndex--;
  if (songIndex < 0) songIndex = songs.length-1;
  document.querySelector("#song").src = songs[songIndex];
  document.querySelector("#thumbnail").src = thumbnails[songIndex];
  document.querySelector("#BG").src = thumbnails[songIndex];
  playPause();
  document.querySelector(".song-title").innerHTML = songNames[songIndex];
}

function updateProgressValue() {
  const progressBar = document.querySelector("#progressBar");
  progressBar.max = document.querySelector("#song").duration;
  progressBar.value = document.querySelector("#song").currentTime;
}

setInterval(updateProgressValue, 700);
