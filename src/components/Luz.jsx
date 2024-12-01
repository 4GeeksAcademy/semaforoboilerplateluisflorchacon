import React from "react";

function Luz({ color, colorActivo, colorSet }) {
  const isSelected = colorActivo === color;

  const estilo = {
    width: "100px",
    height: "100px",
    backgroundColor: color,
    borderRadius: "50%",
    margin: "3px",
    border: isSelected ? "5px solid white" : "none",
    cursor: "pointer",
  };

  return (
    <>
      <div 
        onClick={() => colorSet(color)}
        style={estilo}
      ></div>
    </>
  );
}

export default Luz;
