import * as React from "react";

const Card = () => {
  return (
    <div className="card"
      style={{backgroundImage: `linear-gradient(rgba(92, 32, 0, 0.32), rgba(92, 32, 0, 0.32)), url(${require("./../../img/cards/sofa.png")})`}}>
      <div className="card__category">Design</div>
      <h2 className="card__title">Sofa</h2>   
    </div>
  );
};

export default Card;


