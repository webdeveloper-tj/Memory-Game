import "./SingleCard.css";
function SingleCard({ card, handleChoice, fliped, disabled }) {
  const handleClick = () => {
    if (disabled == true) {
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={fliped ? "fliped" : "back_fliped"}>
        <img className="front" src={card.src} alt={card.src} />
        <img
          onClick={handleClick}
          className="back"
          src="./img/cover.png"
          alt="back"
        />
      </div>
    </div>
  );
}

export default SingleCard;
