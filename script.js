var timers =60;
var score = 0;
var hitrun = 0;



function increasescore(){
    score++;
    document.querySelector("#scoreval").textContent = score;
    if(score%10===0){
        timers+=10;
    }
    document.querySelector("#timerval").textContent = timers;
    if(score>100){
        document.querySelector("#pbtm").innerHTML = `<h1> You Won! ${score}`;
    }
 
}


function getnewhit(){
   hitrun = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrun;
}

function makebubble(){
    var clutter = "";

for(var i = 1; i<=160; i++){
    var rn = Math.floor(Math.random()*10)
    clutter +=`<div class="bubble">${rn}</div>` ;
}

document.querySelector("#pbtm").innerHTML = clutter
}

function runtimer (){
    setInterval(function(){
        if(timers>0){
            timers--;
            document.querySelector("#timerval").textContent = timers;
        }else{
            document.querySelector("#pbtm").innerHTML = `<h1> Game over ${score}`;
        }
       
    }, 1000);
}

document.querySelector("#pbtm")
.addEventListener("click", function(details){
    var clickednum =Number(details.target.textContent);
    if(clickednum === hitrun){
        increasescore();
        makebubble();
        getnewhit();

    }


})



runtimer();
makebubble();
getnewhit();




