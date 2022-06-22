import * as React from "react";
import { useState } from "react";

const Filter = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="filter filter--desktop">
        <ul className="filter__list">
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
      </div>

      <div className="filter filter--mobile">
        <button className="filter__open-button" onClick={() => setOpen(!isOpen)}>ShowAll</button>

        {isOpen
          ? <ul className="filter__list">
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
          : null}
      </div>
    </React.Fragment>
  );
};

export default Filter;