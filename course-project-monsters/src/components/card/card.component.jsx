import "./card.styles.css";

const Card = ({ cardKey, cardName, cardId, cardEmail }) => {
  return (
    <div key={cardKey} className="cardContainer">
      <img
        alt={`monster ${cardName}`}
        src={`https://robohash.org/${cardId}?set=set2&size=180x180`}
      />
      <h2>{cardName}</h2>
      <p>{cardEmail}</p>
    </div>
  );
};

export default Card;
