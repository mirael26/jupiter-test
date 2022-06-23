import * as React from "react";
import { useState, useEffect, useRef } from "react";

import { cardMocks } from "../../mocks";
import { Card as CardType } from "../../types";

import Container from "../container/container";
import Filter from "../filter/filter";
import Card from "../card/card";

const AMOUNT_STEP = 9;
const CARD_CLASS = "card";
const CARD_CATEGORY_CLASS = "card__category";

let activeCardId: string = null;

const Portfolio = (): JSX.Element => {
  const [filter, setFilter] = useState("Show All")
  const [cards, setCards] = useState(cardMocks);
  const [cardsAmount, setCardsAmount] = useState(AMOUNT_STEP);
  
  useEffect (
    () => {
      document.addEventListener('keydown', onDeleteKeydown);
      return () => {
        document.removeEventListener('keydown', onDeleteKeydown);
      };
    }, [cards]
  )

  const onDeleteKeydown = (evt: KeyboardEvent) => {
    if (evt.isComposing || evt.key === "Delete") {
      evt.preventDefault();
      setCards(cards.filter(card => card.id !== activeCardId));
      activeCardId = null;
      document.querySelector(".card.active").classList.remove("active");
    }
  }

  const loadMoreCards = () => {
    setCardsAmount(cardsAmount + AMOUNT_STEP);
  };

  const onCardsClick = (evt: React.SyntheticEvent) => {    
    const element = evt.target as Element;

    if (element.classList.contains(CARD_CATEGORY_CLASS)) {
      setFilter(element.textContent);
      return;
    }

    if (element.classList.contains(CARD_CLASS)) {
      if (element.classList.contains("active")) {
        element.classList.remove("active");
        activeCardId = null;
        return;
      }
      
      activeCardId !== null ? document.querySelector(".card.active").classList.remove("active") : null;
      element.classList.add("active");        
      activeCardId = element.id;
      return;
    }

    const parentElement = element.parentNode as Element;
    if (parentElement.classList.contains(CARD_CLASS)) {

      if (parentElement.classList.contains("active")) {

        parentElement.classList.remove("active");
        activeCardId = null;
        return;
      }
      activeCardId !== null ? document.querySelector(".card.active").classList.remove("active") : null;
      parentElement.classList.add("active");
      activeCardId = parentElement.id;
    }
  };

  const filters = Array.from(new Set(cards.map((card: CardType) => card.category)));
  filters.unshift('Show All');

  const filteredCards = filter === "Show All" ? cards : cards.filter(card => card.category === filter);
  const displayedCards = filteredCards.slice(0, cardsAmount);
  
  return (
    <div className="portfolio">
      <Container>
        <Filter filters={filters} currentFilter={filter} changeFilter={setFilter} />

        <div className="portfolio__cards" onClick={(evt) => onCardsClick(evt)}>
          {displayedCards.map((card, i) => {
            return <Card key={`${i}`} data={card}/>
          })}
        </div>

        {filteredCards.length > cardsAmount
          ? <button className="portfolio__loadmore-button" onClick={loadMoreCards}>Load more</button>
          : null
        }
        
      </Container>
    </div>
  );
};

export default Portfolio;