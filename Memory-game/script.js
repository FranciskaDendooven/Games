import {cardList, cardBg} from './collection.js';

const cards = document.querySelectorAll('.card');
let matchedCards = 0;
const button = document.querySelector("button");

const randomize = () => {
    const cardData = cardList;
    cardData.sort(() => Math.random() - 0.5);
    //console.log(cardData);
    return cardData;
};

const cardGenerator = () => {
    const cardData = randomize();

        cards.forEach((card, index)=>{
            // const cardChild = card.firstElementChild;
            const firstChild = card.firstElementChild;
            const lastChild = card.lastElementChild;

            // console.log(cardChild.firstChild);
            firstChild.firstChild.src = cardList[index].img;
            lastChild.firstChild.src = cardBg[0].img;
            // console.log(cardList[index]);

            firstChild.setAttribute("name", cardList[index].name);

            card.addEventListener('click', (e) => {
                if(!card.classList.contains("matched")){
                    card.classList.toggle('is-flipped');
                    checkCards(e);
                }
            });
        });
        const checkCards = (e) => {
            const clickedCard = e.target;
            clickedCard.classList.add("flipped");
            const flippedCards = document.querySelectorAll(".flipped:not(.matched)");//controle 'geen match' : => om if function te laten werken
            console.log(flippedCards);
            if(flippedCards.length === 2 ){
                if (flippedCards[0].innerHTML === flippedCards[1].innerHTML){
                    console.log("match");
                    flippedCards[0].classList.add('matched');
                    flippedCards[1].classList.add('matched');
                    ++matchedCards;//+1 als het een match is

                    if(matchedCards==8){
                        console.log('itsAMatch!');
                        document.querySelector("#replayButton").style.visibility = "visible";
                    }

                } else {
                    console.log("wrong");
                    setTimeout(() => { flipCardsBack(); }, 1000);

                const flipCardsBack = () => {
                    flippedCards[0].classList.remove('flipped');
                    flippedCards[0].classList.toggle('is-flipped');
                    flippedCards[1].classList.remove('flipped');
                    flippedCards[1].classList.toggle('is-flipped');
                };
                }
            }
        };

};
cardGenerator();

button.addEventListener("click", () => {
location.reload();
});