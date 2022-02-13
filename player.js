let audio = document.querySelector("#audio");
let play = document.querySelector("#play");
let repeat = document.querySelector("#repeat");
let shuffle = document.querySelector("#shuffle");
let songs = [1, 2, 3];
let randomSongIndex = Math.floor(Math.random() * songs.length);
let currentSongIndex = 0;
let indexRemoved = 0;

play.addEventListener("click", () => {
    audio.play();
});

repeat.addEventListener("click", () => {
    audio.load();
    audio.play();
})

shuffle.addEventListener("click", () => {

    audio.src = `${songs[randomSongIndex]}.mp3`;
    audio.play();
    console.log(songs[randomSongIndex]);
})


audio.addEventListener('ended', function (e) {
       currentSongIndex++; 
       if(currentSongIndex == songs.length)
       {
           currentSongIndex = 0;
       }
       e.target.src = `${songs[currentSongIndex]}.mp3`;
       e.target.play();               
});

let songsRemoveBtn = Array.from(document.querySelectorAll(".btn"));

console.log(songsRemoveBtn);

songsRemoveBtn.forEach(function(ele){
   ele.addEventListener("click",(e)=>{
           
             indexRemoved = songs.indexOf(parseInt(e.target.previousElementSibling.dataset.song));
              e.target.parentNode.remove();
             songs.splice(indexRemoved,1);
             console.log(songs);
   })
})