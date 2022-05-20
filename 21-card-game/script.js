const dealerSum = 0;
const yourSum = 0;

const dealerAceCount = 0;
const yourAceCount = 0;//Keep track of how many aces the dealer and the player have (ace = 11 points).

let hidden;
let deck;

const canBust = true;//Allows player to draw while 'yourSum' = 21

//function to build a deck
window.onload = function(){
    buildDeck();
    shuffleDeck();//Create function to shuffle (Otherwise you can cheat).
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