import React from "react";
import Button from 'react-bootstrap/Button';

function BotonColores({colores, colorActivo, colorSet}) {
    const colorActivado = colores.indexOf(colorActivo)
    const longitudColores = colores.length;
    const indiceColorNuevo = (colorActivado + 1) % longitudColores;
    const colorNuevo = colores[indiceColorNuevo];

  return (
    <>
      <Button variant="primary" onClick={() => colorSet(colorNuevo)}
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: colorActivo,
            borderRadius: "50px",
            margin: "10px",
          }}>
            Siguiente Luz
        </Button>
    </>
  );
}

export default BotonColores;
  