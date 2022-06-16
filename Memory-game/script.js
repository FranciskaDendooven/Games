import {cardList, cardBg} from './collection.js';

const cards = document.querySelectorAll('.card');

const randomize = () => {
    const cardData = cardList;
    cardData.sort(() => Math.random() - 0.5);
    //console.log(cardData);
    return cardData;
};

const cardGenerator = () => {
    const cardData = randomize();
   //generate html
        //     cardList.forEach(card => {
//         console.log(card.img);
//         const cardBody = document.querySelector(".card");
//         const face = document.querySelector(".card__face--front");
//         const back = document.querySelector(".card__face--back");
//      console.log("cow");
        /* face.src = card.img;

        cardBg.forEach(card =>{
            back.src = card.img;
        }); */

        /* cardBody.append(face);
        cardBody.append(back);
        console.log("horse"); */

        cards.forEach((card, index)=>{
            // const cardChild = card.firstElementChild;
            const firstChild = card.firstElementChild;
            const lastChild = card.lastElementChild;

            // console.log(cardChild.firstChild);
            firstChild.firstChild.src = cardList[index].img;
            lastChild.firstChild.src = cardBg[0].img;
            // console.log(cardList[index]);

            card.addEventListener('click', () => {
                card.classList.toggle('is-flipped');
            });
        });

};
cardGenerator();