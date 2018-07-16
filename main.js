const cardColors = ["bakla", "bakla", "brok", "brok", "chili", "chili", "kap", "kap", "march", "march", "ogor", "ogor", "papr", "papr", "piecz", "piecz", "pomidor", "pomidor"];

let cards = document.querySelectorAll("div");
cards = [...cards];

const startTime = new Date().getTime();

let activeCard = "";
const activeCards = [ ];

const gamePairs = cards.length/2;
let gameResult = 0;

const clickCard = function(){
              activeCard= this;

              if(activeCard == activeCards[0]) return;

              activeCard.classList.remove("hidden");

              if(activeCards.length=== 0 )
              {
                activeCards[0] = activeCard;
                return;
              }
              else {
                        cards.forEach(card=>card.removeEventListener("click", clickCard))
                        activeCards[1] = activeCard;
                        setTimeout(function (){
                              if (activeCards[0].className===activeCards[1].className)
                              {
                                  activeCards.forEach(card => card.classList.add("off"))
                                  gameResult++;
                                  cards = cards.filter(card => !card.classList.contains("off"))
                                  if (gameResult == gamePairs) {
                                    const endTime = new Date().getTime();
                                    const gameTime = (endTime - startTime)/1000
                                    alert(`Twój czas to: ${gameTime} sekund`)
                                    location.reload();
                                  }
                              }
                              else {
                                activeCards.forEach(card=> card.classList.add("hidden"))
                              }
                        activeCard="";
                        activeCards.length = 0;
                        cards.forEach(card=>card.addEventListener("click", clickCard))

                      },500)
              }

  }

const init = function () {
  cards.forEach(card =>{
      const position = Math.floor(Math.random()*cardColors.length);
      card.classList.add(cardColors[position]);
      cardColors.splice(position,1);
  })

  setTimeout(function(){
    cards.forEach(card =>{
      card.classList.add("hidden")
      card.addEventListener("click", clickCard)
    })
  },1000)
}

init()
