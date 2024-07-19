let gameSeq = [];
let userSeq = [];

let color= ["red", "blue", "green", "yellow"];

let started= false;
let level = 0;

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("started");
        started = true;
        levelUp();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500)
}


function levelUp(){
    userSeq = [];
    level++;
    document.querySelector("h1").innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randcolor = color[randIdx];
    let randBtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    btnflash(randBtn); 
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500)
}

function checkbtn(idx) {
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            document.querySelector("h1").innerText = "Correct sequence";
            setTimeout(levelUp,2000);
        }
    }
    else{
        document.querySelector("body").style.backgroundColor = "orange";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 2000);
        document.querySelector("h1").innerText = `Game over!! \n Score is ${level} press any key to Restart..`;
        reset();
    }
}

function btnpress() {
    let btn = this;
    userflash(btn);
    let usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    console.log(userSeq);
    checkbtn(userSeq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn){
    btn.addEventListener("click", btnpress);
}

function reset () {
    level = 0;
    gameSeq =[];
    userSeq = [];
    started = false;
}
