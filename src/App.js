import React, { useEffect, useState } from "react";
import SingleCard from "./components/SingleCard";
import "./App.css";
const imgCards = [
  { src: "img/helmet-1.png", match: false },
  { src: "img/potion-1.png", match: false },
  { src: "img/ring-1.png", match: false },
  { src: "img/scroll-1.png", match: false },
  { src: "img/shield-1.png", match: false },
  { src: "img/sword-1.png", match: false },
];
function App() {
  const [turns, setTurns] = useState(0);
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const shuffeldCards = () => {
    const shuffeld_cards = [...imgCards, ...imgCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffeld_cards);
    setTurns(0);
  };
  // if (turns == 8) {
  //   setTurns(0);
  //   shuffeldCards();
  // }
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };
  useEffect(() => {
    setDisabled(true);
    if (choiceOne && choiceTwo) {
      if (choiceOne.src == choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src == choiceOne.src) {
              return { ...card, match: true };
            } else {
              return card;
            }
          });
        });
        resetTeurns();
        setDisabled(false);
      } else {
        setTimeout(() => {
          resetTeurns();
        }, 500);
        setDisabled(false);
      }
    }
  }, [choiceOne, choiceTwo]);
  const resetTeurns = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTruns) => prevTruns + 1);
  };
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffeldCards}>New Game</button>
      <div className="grid-card">
        {cards.map((card, index) => (
          <SingleCard
            key={index}
            card={card}
            handleChoice={handleChoice}
            fliped={card === choiceOne || card === choiceTwo || card.match}
            disabled={disabled}
          />
        ))}
      </div>
      <h1
        style={{
          color: turns > 7 ? "red" : "",
        }}
      >
        {turns}
      </h1>
    </div>
  );
}
export default App;
// `Программае бнавис ки у гирифта yes ва n no нишон диҳад дар ғайри ин сурат аломати нодуруст нишин бта`;
