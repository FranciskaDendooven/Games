import { cardList } from "./collection.js";
const missed = 0;
let cardSet;
const cardContainer = [];
const rows = 2;
const columns = 5;

window.onload = () => {
    shuffleCards();
    startGame();
};

const shuffleCards = () => {
    cardSet = cardList.concat(cardList);//Gives two of each card
    console.log(cardSet);
    //shuffle cards
    for (let i = 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random()) * cardSet.length;//get random index
    //swap cards
        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
    console.log(cardSet);
};

const startGame = () => {
    //arrange board
    for (let row = 0; row < rows; row++){
        let row = [];
        for (let column = 0; column < columns; column++){
            let cardImg = cardSet.pop();
            row.push(cardImg);

            //create img el with class
            let card = document.createElement("img");
            card.id = row.toString() + "-" + column.toString();
            card.src = "img/" + cardImg + ".jpg";
            card.classList.add("card");
            document.querySelector("#cardContainer").append(card);
        }
        cardContainer.push(row);
    }
    console.log(cardContainer);
};
