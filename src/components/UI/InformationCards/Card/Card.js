import "./Card.css";
import { CharacterCardContent } from "./CharacterCardContent";
import { If } from "../../../shared/If";

function Card({ characterInfo, cardType, showContent = false }) {
  const { name, image } = characterInfo;

  return (
    <div className={`characterCard ${showContent && "showContent"}`}>
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
