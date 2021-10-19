import "./Card.css";
import { CharacterCardContent } from "./CharacterCardContent";
import { If } from "../../../shared/If";

function Card({ characterInfo, cardType }) {
  const { name, image } = characterInfo;
  console.log("🚀 ~ file: Card.js ~ line 7 ~ Card ~ image", image)

  return (
    <div className="characterCard">
      <img src={image} alt="Character avatar" />
      <div className="contentBox">
        <h2>{name}</h2>
      </div>

      <If condition={cardType === "character"}>
        <CharacterCardContent characterInfo={characterInfo} />
      </If>
    </div>
  );
}

export default Card;
