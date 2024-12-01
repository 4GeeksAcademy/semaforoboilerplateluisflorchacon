import React from "react";
import Button from "react-bootstrap/Button";

function BotonColores({ colores, colorActivo, colorSet }) {
  const colorActivado = colores.indexOf(colorActivo);
  const longitudColores = colores.length;
  const indiceColorNuevo = (colorActivado + 1) % longitudColores;
  const colorNuevo = colores[indiceColorNuevo];
  const resultado = console.log(colorNuevo);

  const handleClick = () => {
    colorSet(colorNuevo); 
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleClick}
        style={{
          width: "120px",
          height: "60px",
          marginTop: "20px",
        }}
      >
        Siguiente color
      </Button>
    </>
  );
}

export default BotonColores;


  