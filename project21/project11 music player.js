
 let song = document.getElementById("song");
 let progress = document.getElementById("progress");
 let ctrlBtn = document.getElementById("ctrlBtn");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrlBtn.classList.contains("fa-pause")){
        song.pause();
        ctrlBtn.classList.remove("fa-pause");
        ctrlBtn.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlBtn.classList.remove("fa-play");
        ctrlBtn.classList.add("fa-pause");
    }
}

if(song.play()){
    setInterval( ()=>{
        progress.value = song.currentTime;

    }, 100);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlBtn.classList.remove("fa-play");
    ctrlBtn.classList.add("fa-pause");
}

