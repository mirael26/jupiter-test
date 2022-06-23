import * as React from "react";
import { useState } from "react";

import { cardMocks } from "../../mocks";
import { Card as CardType } from "../../types";

import Container from "../container/container";
import Filter from "../filter/filter";
import Card from "../card/card";

const Portfolio = (): JSX.Element => {
  const [filter, setFilter] = useState("Show All")
  const [displayedCards, setDisplayedCards] = useState(cardMocks);

  const filters = Array.from(new Set(displayedCards.map((card: CardType) => card.category)));
  filters.unshift('Show All');

  return (
    <div className="portfolio">
      <Container>
        <Filter filters={filters} currentFilter={filter} changeFilter={setFilter} />

        <div className="portfolio__cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <button className="portfolio__loadmore-button">Load more</button>
      </Container>
    </div>
  );
};

export default Portfolio;