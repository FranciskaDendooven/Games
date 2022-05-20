window.onload = function(){
    document.getElementById("play").style.visibility="visible";
    document.getElementById("rock").style.visibility="hidden";
    document.getElementById("paper").style.visibility="hidden";
    document.getElementById("scissor").style.visibility="hidden";
    document.getElementById("btnReplay").style.visibility="hidden";
};
function start(){
    document.getElementById("play").style.visibility="hidden";
    document.getElementById("rock").style.visibility="visible";
    document.getElementById("paper").style.visibility="visible";
    document.getElementById("scissor").style.visibility="visible";
    console.log(start);
}

clickedImg1=[`<img src="./img/paper.svg" alt="Black stylized paper with outcrop displaying: paper" id="img1" width="200" height="200">`,
`<img src="./img/rock.svg" alt="Black stylized rock with outcrop displaying: rock" id="img1" width="200" height="200">`,
`<img src="./img/scissor.svg" alt="Black stylized scissor with outcrop, twice displaying: scissor" id="img1" width="200" height="200">`];

clickedImg2=[`<img src="./img/paper.svg" alt="Black stylized paper with outcrop displaying: paper" id="img2" width="200" height="200">`,
`<img src="./img/rock.svg" alt="Black stylized rock with outcrop displaying: rock" id="img2" width="200" height="200">`,
`<img src="./img/scissor.svg" alt="Black stylized scissor with outcrop, twice displaying: scissor" id="img2" width="200" height="200">`];

function game(position){
    document.getElementById("img1").style.animation="shakeLeft 1s 5 ease-in-out";
    document.getElementById("img2").style.animation="shakeRight 1s 5 ease-in-out";

    const random = Math.floor(Math.random() * 3);
    console.log('Random', random);
    setTimeout(() => {
        document.getElementById("player2").innerHTML=clickedImg2[random];
        document.getElementById("player1").innerHTML=clickedImg1[position];
    }, 5500);
    console.log(game);

    setTimeout(() => {
        if (random == position){
            feedback.innerHTML = "DRAW!";
            document.getElementById("feedback");
        }
        else if(position == 0 && random == 2){
            feedback.innerHTML = "PLAYER WON!";
            document.getElementById("feedback");
        }
        else if(position == 1 && random == 0){
            feedback.innerHTML = "PLAYER WON!";
            document.getElementById("feedback");
        }
        else if(position == 2 && random == 1){
            feedback.innerHTML = "PLAYER WON!";
            document.getElementById("feedback");

        }
        else{
            feedback.innerHTML = "COMPUTER WON! Better Luck Next Time!";
            document.getElementById("feedback");
        }

        document.getElementById("play").style.visibility="hidden";
        document.getElementById("rock").style.visibility="hidden";
        document.getElementById("paper").style.visibility="hidden";
        document.getElementById("scissor").style.visibility="hidden";
        document.getElementById("btnReplay").style.visibility="visible";

    }, 5500);
}

document.querySelector('#btnReplay').addEventListener('click', function(){
    window.location.reload();
});