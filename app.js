let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","green","blue"]; 

let h2=document.querySelector("h2");

let h5=document.querySelector("h5");
let started=false;
let level=0;
let highscore=0;


document.addEventListener("keypress",function(){
      if(started==false){
        console.log("game started");
        started=true;

        levelUp();
      }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`; 

    let randIdx=Math.floor(Math.random()*3);
    let randClr=btns[randIdx];
    let randBtns=document.querySelector(`.${randClr}`);
    gameSeq.push(randClr);
    console.log(gameSeq);
    
    btnFlash(randBtns);

}

function checkAns(idx){

    if(userSeq[idx]===gameSeq[idx]){
        //nested if
       if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
        highScore(level);
       }
    }

    else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b> <br> press any key to start.`; 
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        highScore()
        gameReset();
    }
}

function btnpress(){
    
   let btn=this;
    btnFlash(btn);
    let userclr=btn.getAttribute("id");
    userSeq.push(userclr);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
};

function gameReset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

function highScore(level){
    if(level>highscore){
        highscore=level;
      h5.innerHTML=`highscore:${highscore}`;
 }
}
 
