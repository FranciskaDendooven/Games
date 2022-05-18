function start(){
    document.getElementById("play").style.visibility="hidden";
    document.getElementById("rock").style.visibility="visible";
    document.getElementById("paper").style.visibility="visible";
    document.getElementById("scissor").style.visibility="visible";
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

    const random = Math.floor(Math.random() * 3); //generates a nr between 0 and 17. 17 is not included, so add '+1' to make it 17.
    console.log('Random', random);
    setTimeout(() => {
        document.getElementById("player2").innerHTML=clickedImg2[random];
        document.getElementById("player1").innerHTML=clickedImg1[position];
    }, 5000);

    setTimeout(() => {
        if (random == position){
            feedback.innerHTML = "DRAW!";
            window.location.reload();
        }
        else if(position == 0 && random == 2){
            feedback.innerHTML = "PLAYER WON!";
            window.location.reload();
        }
        else if(position == 1 && random == 0){
            feedback.innerHTML = "PLAYER WON!";
            window.location.reload();
        }
        else if(position == 2 && random == 1){
            feedback.innerHTML = "PLAYER WON!";
            window.location.reload();
        }
        else{
            feedback.innerHTML = "COMPUTER WON! Better Luck Next Time!";
        }
    }, 5500);
}

/* const randomNumber = Math.floor(Math.random() * 17) + 1; //generates a nr between 0 and 17. 17 is not included, so add '+1' to make it 17.
console.log('Random Number', randomNumber);

btn.addEventListener('click', function(){
    let guess = document.getElementById("guess").value;
    if (guess == randomNumber) {
        alert(`Awesome! ${randomNumber} was correct. You can be named many things, hungry not being one of them.`);
      } else if (guess !== randomNumber) {
        alert(`Bummer... You guessed ${guess}. The secret number was ${randomNumber}.`);//use `` to avoid using signs like +, ""..
      }
}); */