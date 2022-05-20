let dealerSum = 0;
let yourSum = 0;

let dealerAceCount = 0;
let yourAceCount = 0;//Keep track of how many aces the dealer and the player have (ace = 11 points).

let hidden;
let deck;

let canBust = true;//Allows player to draw while 'yourSum' = 21

//function to build a deck
window.onload = function(){
    buildDeck();
    shuffleDeck();//Create function to shuffle (Otherwise you can cheat).
    startGame();
};

function buildDeck(){
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]);//The naming equals the names of the card img, it links all the values to the types.
            
        }
    }
    /* console.log(deck); */
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);//Math gives a nr between 0-1 and is * by the deck(52 cards)=so it gives a number between 0-51
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;//Makes the cards shuffle!
    }
    console.log(deck);
}

function startGame() {
    hidden = deck.pop();//Deal to the dealer. See 'let hidden' that keeps track of the hidden cards.
    dealerSum += getValue(hidden);
    dealerAceCount += checkAce(hidden);
    /* console.log(hidden);
    console.log(dealerSum); */

    //Rule: deal cards to the dealer, unless they have cards less then or equal to 15
    //Underneath: Creates less than 15 cards for the div dealerCards in the html
    while (dealerSum < 15){
        let cardImg = document.createElement("img");//Create an img
        let card = deck.pop();//Get a card from the deck
        cardImg.src = "/21-card-game/cards/" + card + ".png";//Set the source for the card
        dealerSum += getValue(card);//Increment dealerSum
        dealerAceCount += checkAce(card);//Increment dealerAceCount
        document.getElementById("dealerCards").append(cardImg);//Append cardImg to the dealerCards div
    }
    console.log(dealerSum);
    document.getElementById("dealerSum").innerHTML = dealerSum;

    //Rule: deal cards to the player, 2 cards
    //Underneath: Creates less than 2 cards for the div yourCards in the html
    for (let i = 0; i < 2; i++){
        let cardImg = document.createElement("img");//Create an img
        let card = deck.pop();//Get a card from the deck
        cardImg.src = "/21-card-game/cards/" + card + ".png";//Set the source for the card
        yourSum += getValue(card);//Increment dealerSum
        yourAceCount += checkAce(card);//Increment dealerAceCount
        document.getElementById("yourCards").append(cardImg);//Append cardImg to the dealerCards div
    }
    console.log(yourSum);
    document.getElementById("yourSum").innerHTML = yourSum;
    document.getElementById("bust").addEventListener("click", bust);
    document.getElementById("stay").addEventListener("click", stay);

}

function bust(){
    if(!canBust){
        return;
    }

    let cardImg = document.createElement("img");//Create an img
    let card = deck.pop();//Get a new card from the deck
    cardImg.src = "/21-card-game/cards/" + card + ".png";//Assign the source for the card
    yourSum += getValue(card);//Increment yourSum
    yourAceCount += checkAce(card);//Increment yourAceCount
    document.getElementById("yourCards").append(cardImg);//Append cardImg to the yourCards div

    //Find reduceAce function with the other functions below
    if (reduceAce(yourSum, yourAceCount) > 21){//reduceAce function is checking the yourSum and yourAceCount to be more than 21
        canBust = false;
    }
}

function stay (){//Total up the sum's + takes the consideration of reduceAce function
    dealerSum = reduceAce(dealerSum, dealerAceCount);
    yourSum = reduceAce(yourSum, yourAceCount);

    canBust = false;//User then can not draw cards after he chose his hand
    document.getElementById("hidden").src = "./cards/" + hidden + ".png";//hidden? See function startGame
    //display msg
    let message = "";
    if(yourSum > 21){
        message = "You lose!";
    }
    else if(dealerSum > 21){
        message = "You win!";
    }
    //Both the dealer and you have a sum less than || equal to 21
    else if (yourSum == dealerSum){
        message = "Tie!";
    }
    else if (yourSum > dealerSum){
        message = "You win!";
    }
    else if (yourSum < dealerSum){
        message = "You lose!";
    }

    document.getElementById("results").innerText = message;//Let msg display in html p "results" */
}

function getValue(card){
    let data = card.split("-");//split()= splits the value in 2 parts; "4-C" = ["4", "C"]
    let value = data[0];

    if (isNaN(value)) {//check if the value contains digits. If not the 'if' returns true.
        if (value == "A"){
            return 11;//A becomes 11
        }
        return 10;//otherwise return 10
    }
    return parseInt(value); //Or return the value of the digit
}

function checkAce(card){
    if (card[0] == "A") {
        return 1;
    }
    return 0;
}

function reduceAce(playerSum, playerAceCount){
    while (playerSum > 21 && playerAceCount > 0){
        playerSum -= 10;
        playerAceCount -= 1;
    }
    return playerSum; //This is reducing the total sum (ico Aces, you can bust one more time!).
}                       //But it also makes sure you can not draw an unlimited amount of cards.