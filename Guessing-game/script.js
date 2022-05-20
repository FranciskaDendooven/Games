let btn = document.getElementById("btn");
let myGuess = document.getElementsByTagName("label");

const randomNumber = Math.floor(Math.random() * 17) + 1; //generates a nr between 0 and 17. 17 is not included, so add '+1' to make it 17.
console.log('Random Number', randomNumber);

btn.addEventListener('click', function(){
    let guess = document.getElementById("guess").value;
    if (guess == randomNumber) {
        alert(`Awesome! ${randomNumber} was correct. You can be named many things, hungry not being one of them.`);
      } else if (guess !== randomNumber) {
        alert(`Bummer... You guessed ${guess}. The secret number was ${randomNumber}.`);//use `` to avoid using signs like +, ""..
      }
});