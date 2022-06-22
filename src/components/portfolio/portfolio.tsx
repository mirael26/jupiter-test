import * as React from "react";

import Container from "../container/container";
import Filter from "../filter/filter";
import Card from "../card/card";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Container>
        <Filter />
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