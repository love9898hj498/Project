//video start
const backVideo = document.getElementById("backVideo");
const playBtn = document.getElementById("playBtn");
const icon = document.getElementById("icon");
const bubblescontent = document.getElementById("bubbles-content")


playBtn.addEventListener('click',() => {
    backVideo.style.display = "block";
    bubblescontent.style.display = "none"  

    if(backVideo.paused){  //.paused 如果影片停止
        // backVideo.play();
        backVideo.load()
        icon.src = "images/pause.png";
    }else{
        backVideo.pause();
        icon.src = "images/play.png";
    }
})
//video end

//audio start
const audio = document.getElementById("audio")
const audioimg = document.getElementById("audioimg")

function playPause() {    
    if (audio.paused){
        audio.volume = 0.15;    //初始音量15%
        audio.play();    //play()繼續播放
        audioimg.src = 'images/playaudio.svg';    
    }    
    else{    
        audio.pause();    //暫停播放pause()
        audioimg.src = 'images/stopaudio.svg'; 
        audio.load();    //重製音樂load()
        }    
}   
//audio end

//menu-inner srart

let menu  = document.getElementById("menu");
let closeBtn  = document.getElementsByClassName("closeBtn")[0];
let menuinner = document.getElementsByClassName("menu-inner")[0];

console

menu.addEventListener("click", () => {
    menuinner.classList.add("open");
})

closeBtn.addEventListener("click", () => {
    menuinner.classList.remove("open");
})


// menu-inner end

/* contentPhone start */

const contentPhone = document.getElementById("contentPhone");

const angleleft = document.getElementById("angleleft");
const angleright = document.getElementById("angleright");

let idx = 1; 
let timebox = null;  //重製時間

angleleft.addEventListener("click", leftFn);
angleright.addEventListener("click", rightFn);


function leftFn(){
    idx = idx - 1;

    if(idx < 1){
        idx = 11;
    }
    contentPhone.style.backgroundImage = 'url("images/a' + idx + '.png")';
    clearInterval(timebox);    //將時間停止
    timego();
}

function rightFn(){
    idx = idx + 1;
    
    if(idx > 11){
        idx = 1;
    }
    contentPhone.style.backgroundImage = 'url("images/a' + idx + '.png")';
    clearInterval(timebox);
    timego();
}

function timego(){
    timebox = setInterval(function(){
        idx++;
        if(idx > 11){
            idx = 1;
        }
        contentPhone.style.backgroundImage = 'url("images/a' + idx + '.png")';
    }, 3000);
}

timego();
/* contentPhone end */

// loading
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }

  function fadeOut(){
    setInterval(loader, 2500);
  }

  window.onload = fadeOut;
// loading