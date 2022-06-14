const cards = document.getElementsByClassName("memoryCard");

const flipCard = () => {
    const cards = document.getElementsByClassName("memoryCard");
    cards.classList.toggle("flip");
};

/* cards.forEach(card => card.addEventListener("click", flipCard)); */