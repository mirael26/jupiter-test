import * as React from "react";

const Filter = () => {
  return (
    <ul className="filter">
      <li className="filter__item">
        <button className="filter__button active" disabled={true}>Show all</button>
      </li>

      <li className="filter__item">
        <button className="filter__button">Design</button>
      </li>

      <li className="filter__item">
        <button className="filter__button">Branding</button>
      </li>
        
      <li className="filter__item">
        <button className="filter__button">Illustration</button>
      </li>

      <li className="filter__item">
        <button className="filter__button">Motion</button>
      </li>
    </ul>
  );
};

export default Filter;