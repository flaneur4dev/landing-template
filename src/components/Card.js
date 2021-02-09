import { memo } from "react";
import Social from "./Social";

function Card(props) {
  return (
    <article className="card">
      <div className="card__container">
        <Social />
        <img
          src={props.card.image}
          alt={props.card.name}
          className="card__image"
          name="image-button"
        />
      </div>
      <div className="card__wrapper">
        <h2 className="card__title">{props.card.name}</h2>
        <p className="card__subtitle">{props.card.profession}</p>
        <p className="card__description">{props.card.description}</p>
      </div>
    </article>
  )
}

export default memo(Card)
