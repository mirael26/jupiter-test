import * as React from "react";
import { useState } from "react";

interface FilterProps {
  filters: Array<string>,
  currentFilter: string,
  changeFilter: (arg: string) => void,
};

const Filter = ({filters, currentFilter, changeFilter}: FilterProps) => {
  const [isOpen, setOpen] = useState(false);

  const onMobileFilterButtonClick = (filter: string): void => {
    changeFilter(filter);
    setOpen(false);
  }

  return (
    <React.Fragment>
      <div className="filter filter--desktop">
        <ul className="filter__list">
          {filters.map((filter, i) => {
            return <li key={`${i}`} className="filter__item">
              <button className={`filter__button${currentFilter === filter ? ' active' : ''}`}
                disabled={currentFilter === filter ? true : false}
                onClick={(() => {changeFilter(filter)})}>
                  {filter}</button>
            </li>
          })}
        </ul>
      </div>

      <div className="filter filter--mobile">
        <button className="filter__open-button" onClick={() => setOpen(!isOpen)}>{currentFilter}</button>

        {isOpen
          ? <ul className="filter__list">

              {filters.filter(el => el !== currentFilter).map((filter, i) => {
                return <li key={`${i}`} className="filter__item">
                    <button className="filter__button" onClick={(() => {onMobileFilterButtonClick(filter)})}>{filter}</button>
                  </li>
              })}
            </ul>
          : null}
      </div>
    </React.Fragment>
  );
};

export default Filter;