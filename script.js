console.log("welsome to Spotify");
let index = 1;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem=document.getElementsByClassName('songItem');
let mastersong=document.getElementById("mastersong");
let songitemplay=document.getElementsByClassName("songitemplay");
let song = [
  {
    songName: "Let Me Love You",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg"
  },
  {
    songName: "Trap Cartel",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg"
  },
  {
    songName: "They Mad",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg"
  },
  {
    songName: "Plug Walk",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg"
  },
  {
    songName: "Song Title",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg"
  },
//   {
//     songName: "salam-e-isq",
//     filePath: "songs/6.mp3",
//     coverPath: "covers/6.jpg"
//   },
//   {
//     songName:"salam-e-isq",
//     filePath:"songs/7.mp3",
//     coverPath:"covers/7.jpg"
// },
// {
//     songName:"salam-e-isq",
//     filePath:"songs/8.mp3",
//     coverPath:"covers/8.jpg"
// },
// {
//     songName:"salam-e-isq",
//     filePath:"songs/9.mp3",
//     coverPath:"covers/9.jpg"
// }
]


masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-circle-play');
    //Showing error while executing below lines of code.Tring to add the feature that when masterclas button got clicked then buttons associated with songitemplay should show play pause.After correction copy the code also
    //if statement. 
    // songItem.classList.remove('fa-pause');
    // songItem.classList.add('fa-circle-play');
    gif.style.opacity = 0;
  }
});
audioElement.addEventListener('timeupdate', () => {
 const progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});
myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100
});
const makeAllPlays=()=>{
  Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.classList.remove("fa-pause-circle");
    element.classList.add("fa-play-circle");
  })
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
  element.addEventListener("click",(e)=>{
    makeAllPlays();
    index=parseInt(e.target.id);
    mastersong.innerText=song[index-1].songName;
    if (audioElement.paused || audioElement.currentTime <= 0){
    e.target.classList.remove("fa-play-circle");
    e.target.classList.add("fa-pause-circle");
    audioElement.src = `songs/${index}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = 1
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause');
    }
    else{
      audioElement.pause();
      e.target.classList.remove('fa-pause');
      e.target.classList.add('fa-circle-play');
      masterPlay.classList.add('fa-circle-play');
    masterPlay.classList.remove('fa-pause');
    gif.style.opacity = 0;
    }
  })
})
  document.getElementById("next").addEventListener('click',(e)=>{
    if(index>=5)
    index=1;
    else{
      index+=1;
    }
    console.log("index is:"+index)
    mastersong.innerText=song[index-1].songName;
   
      audioElement.src = `songs/${index}.mp3`;
      
      audioElement.currentTime=0;
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-pause');
      makeAllPlays();
      // songitemplay.classList.remove('fa-circle-play');
      // msongitemplay.classList.add('fa-pause');
    
  })
  document.getElementById("previous").addEventListener('click',(e)=>{
    if(index<=1)
    index=5;
    else{
      index-=1;
    }console.log("index is:"+index)
    mastersong.innerText=song[index-1].songName;
      audioElement.src = `songs/${index}.mp3`;
      audioElement.currentTime=0;
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-pause');
    
  })
