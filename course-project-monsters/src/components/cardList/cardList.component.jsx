import Card from "../card/card.component";
import "./cardList.styles.css";

const CardList = ({ data }) => {
  return (
    <div className="cardList">
      {data.map((monster) => {
        const { id, name, email } = monster;

        return (
          <Card cardKey={id} cardName={name} cardEmail={email} cardId={id} />
        );
      })}
    </div>
  );
};

export default CardList;
