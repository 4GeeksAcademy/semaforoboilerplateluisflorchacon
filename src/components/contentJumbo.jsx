import React from "react";
import Boton from "./botonsito";

function Jumbo() {
  return (
    <div className="container-fluid py-5">
      <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
      <p className="col-md-8 fs-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quo iure quas pariatur est minus esse error, qui numquam, ullam repellat officia sed, optio illum ipsum cum inventore corporis sapiente!
      </p>
      <Boton />
    </div>
  );
}

export default Jumbo;
