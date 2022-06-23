import * as React from "react";

interface ContainerProps {
  children?: JSX.Element | JSX.Element[],
}

const Container = ({children}: ContainerProps): JSX.Element => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default Container;