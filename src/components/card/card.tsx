import * as React from "react";

import { Card } from "../../types";

interface CardProps {
  data: Card,
}

const Card = ({data}: CardProps): JSX.Element => {

  return (
    <div className="card" id={data.id}
      style={{backgroundImage: `linear-gradient(rgba(92, 32, 0, 0.32), rgba(92, 32, 0, 0.32)), url(${require(`./../../img/cards/${data.image}`)})`}}>
      <button className="card__category">{data.category}</button>
      <h2 className="card__title">{data.title}</h2>   
    </div>
  );
};

export default Card;


