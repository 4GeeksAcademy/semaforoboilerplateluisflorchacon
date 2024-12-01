import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Semaforo from "./pages/Semaforo";
import BotonColores from "./components/BotonColores";

function App() {
  return (
    <>
      <Semaforo />
      <BotonColores />
    </>
  );
}

export default App;
