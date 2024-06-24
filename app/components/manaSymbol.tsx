import React from "react";

type ManaSymbolProps = {   
    color: string;
};

const ManaSymbol: React.FC<ManaSymbolProps> = (props) => {
  const symbol = props.color === "blue" ? "u" : props.color[0].toLowerCase();
  return (
    <i className={`ms ms-${symbol}`} />
  );
}

export default ManaSymbol; 