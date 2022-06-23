import * as React from "react";

import Header from "../header/header";
import Portfolio from "../portfolio/portfolio";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <Header />
      <Portfolio />
    </div>
  );
};

export default App;