// let a=Math.random();
// console.log(Math.floor(a));


let initialvalue=100;
let highscore=null;
let random=generaterandomnumber(100);

function generaterandomnumber(max){
    return Math.floor(Math.random()*max) + 1
}
console.log(random);

function check(){
let currentnumber =    document.getElementById("guessid").value;
if(initialvalue!==0){
    if(currentnumber>random){
        document.querySelector(".message").textContent="Your guess is too high!!!"
        initialvalue--;
        document.querySelector(".score").textContent=initialvalue;
        
    }
    
    else if(currentnumber<random){
        document.querySelector(".message").textContent=" Your guess is low!!!"
        initialvalue--;
        document.querySelector(".score").textContent=initialvalue;
        
    }
    
    else{
        document.querySelector(".message").textContent="winner winner!!"
        initialvalue--;
        document.querySelector(".score").textContent=initialvalue;
        highscore=initialvalue;
        document.querySelector(".highscore").textContent=highscore;
        document.body.style.backgroundColor="green";
        document.querySelector(".check").style.visibility="hidden";
        document.querySelector(".resultbox").textContent=random;
        
    }
    



    
    
}

else{
    document.querySelector(".message").textContent="game over";
}
}



function play(){
    document.querySelector(".playagain")
    document.querySelector(".score").textContent=100;
    document.querySelector(".highscore").textContent=00;
    document.querySelector("#guessid").value="";
    document.querySelector(".check").textContent="check";
    document.querySelector(".resultbox").textContent="?";
    document.querySelector(".message").textContent="start guessing...";
    document.querySelector("body").style.backgroundColor="rgb(50, 11, 11)";
    document.querySelector(".check").style.visibility="visible";

    console.log("play");
  }