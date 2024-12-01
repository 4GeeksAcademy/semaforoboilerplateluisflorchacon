import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Semaforo from "./pages/Semaforo";

function App() {
  const colores = ["red", "blue", "green", "yellow"];
  const [colorActivo, colorSet] = useState("red");

  return (
    <>
      {/* Pasa el estado global al Semaforo */}
      <Semaforo
        colores={colores}
        colorActivo={colorActivo}
        colorSet={colorSet}
      />
    </>
  );
}

export default App;
