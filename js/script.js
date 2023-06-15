
let songindex = 0;

const masterplay = document.getElementById("masterplay");
const prevbtn = document.getElementById("prevbtn");
const nextbtn = document.getElementById("nextbtn");
const playgif = document.getElementById("playgif");
const myprogressbar = document.getElementById("myprogressbar");
const masterplaysong = document.getElementById("masterplaysong");
const clickandplay = document.getElementsByClassName("songs");
const mastersongposter = document.getElementById("masterplayposter");
let progress =0;

let audioElement = new Audio('songs/1.mp3');
myprogressbar.value = 0;

let songs = [

    {songName:"Mahabharat title song" , filePath:"songs/1.mp3" , coverPath:"covers/1.jpg"} ,
    {songName:"Mahabharat  Instrumental" , filePath:"songs/2.mp3" , coverPath:"covers/2.jpg"} ,
    {songName:"krishna flute" , filePath:"songs/3.mp3" , coverPath:"covers/3.png"} ,
    {songName:"Yada Yada hi Dharmasya" , filePath:"songs/4.mp3" , coverPath:"covers/4.jpg"} ,
    {songName:"Mahabharat title song" , filePath:"songs/5.mp3" , coverPath:"covers/5.png"} ,

]

masterplay.addEventListener("click" ,playsong);

function playsong()
{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterplay.innerHTML = "";
        masterplay.innerHTML = `<img  class="play" src="images/pause-logo.png" alt="pause">`
        playgif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.innerHTML = "";
        masterplay.innerHTML = `<img  class="play" src="images/play-logo.png" alt="play">`
        playgif.style.opacity = 0;
    }

}

audioElement.addEventListener("timeupdate" , updateprogressbar);

function updateprogressbar()
{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
    console.log(progress);

    if(progress == 100){
        setTimeout(updateplaysetup , 200);
        function updateplaysetup(){
        myprogressbar.value = 0;
        masterplay.innerHTML = "";
        masterplay.innerHTML = `<img  class="play" src="images/play-logo.png" alt="play">`;
        playgif.style.opacity = 0;
        masterplaysong.innerHTML = "";
        }
    }
}

myprogressbar.addEventListener("change" ,updatesongtime);

function updatesongtime()
{
    audioElement.currentTime = (myprogressbar.value * audioElement.duration)/100;
}


Array.from(clickandplay).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        songindex = parseInt(e.target.id);
        audioElement.src = songs[songindex-1].filePath;
        masterplaysong.innerHTML = "";
        masterplaysong.innerHTML = songs[songindex-1].songName;
        audioElement.currentTime =0;
        playgif.style.opacity = 1;
        masterplay.innerHTML = "";
        masterplay.innerHTML = `<img  class="play" src="images/pause-logo.png" alt="play">`;
        mastersongposter.innerHTML = `<img  class="songimage" src="${songs[songindex-1].coverPath}" alt="songimage">`;
        audioElement.play();
    })
    
});

prevbtn.addEventListener("click" , prevsong);

function prevsong()
{
    if(songindex>1){
        songindex = songindex-1;
        audioElement.src = songs[songindex-1].filePath;
        masterplaysong.innerHTML = "";
        masterplaysong.innerHTML = songs[songindex-1].songName;
        audioElement.currentTime =0;
        playgif.style.opacity = 1;
        masterplay.innerHTML = "";
        masterplay.innerHTML = `<img  class="play" src="images/pause-logo.png" alt="play">`;
        mastersongposter.innerHTML = `<img  class="songimage" src="${songs[songindex-1].coverPath}" alt="songimage">`;
        audioElement.play();
    }else{
        songindex =1;
        audioElement.src = songs[songindex-1].filePath;
        masterplaysong.innerHTML = "";
        masterplaysong.innerHTML = songs[songindex-1].songName;
        audioElement.currentTime =0;
        playgif.style.opacity = 1;
        masterplay.innerHTML = "";
        masterplay.innerHTML = `<img  class="play" src="images/pause-logo.png" alt="play">`;
        mastersongposter.innerHTML = `<img  class="songimage" src="${songs[songindex-1].coverPath}" alt="songimage">`;
        audioElement.play();
    }
}

nextbtn.addEventListener("click" , nextsong);

function nextsong()
{
    if(songindex>=5){
        songindex = 1;
        audioElement.src = songs[songindex-1].filePath;
        masterplaysong.innerHTML = "";
        masterplaysong.innerHTML = songs[songindex-1].songName;
        audioElement.currentTime =0;
        playgif.style.opacity = 1;
        masterplay.innerHTML = "";
        masterplay.innerHTML = `<img  class="play" src="images/pause-logo.png" alt="play">`;
        mastersongposter.innerHTML = `<img  class="songimage" src="${songs[songindex-1].coverPath}" alt="songimage">`;
        audioElement.play();
    }else{
        songindex=songindex+1;
        audioElement.src = songs[songindex-1].filePath;
        masterplaysong.innerHTML = "";
        masterplaysong.innerHTML = songs[songindex-1].songName;
        audioElement.currentTime =0;
        playgif.style.opacity = 1;
        masterplay.innerHTML = "";
        masterplay.innerHTML = `<img  class="play" src="images/pause-logo.png" alt="play">`;
        mastersongposter.innerHTML = `<img  class="songimage" src="${songs[songindex-1].coverPath}" alt="songimage">`;
        audioElement.play();
    }
}