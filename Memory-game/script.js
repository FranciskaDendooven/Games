import {cardList, cardBg} from './collection.js';
//Take what you need!
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

//link text
playerLivesCount.textContent = playerLives;

//randomize
const randomize = () => {
    const cardData = cardList;
    cardData.sort(() => Math.random() - 0.5);
    console.log(cardData);
    return cardData;
};

//card generator function
const cardGenerator = () => {
    const cardData = randomize();
/*     //generate html
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("img");
    card.classList = "card";
    face.classList = "face";
    back.classlist = "back";

    //attach info to card
    face.src = cardList[0].img;

    section.append(card);
    card.append(face);
    card.append(back); */
    cardList.forEach(card => {
        console.log(card.img);
        const cardBody = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("img");
        cardBody.classList = "cardBody";
        face.classList = "face";
        back.classlist = "back";

        face.src = card.img;

        cardBg.forEach(card =>{
            back.src = card.img;
        });
        

        section.append(cardBody);
        cardBody.append(face);
        cardBody.append(back);

    });

};
cardGenerator();