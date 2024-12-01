import React from "react";
import { useState } from "react";

import Luz from "../components/Luz";
import BotonColores from "../components/BotonColores";

function Semaforo () {
  const [colorActivo, colorSet] = useState("")
  const colores = ["green", "yellow", "red"];
    return (
        <>
        <div style={{width:"120px", height:"320px", backgroundColor:"black", padding:3}}>
        {colores.map((item, index)=> {
          return (
            <Luz color={item} colorActivo={colorActivo} colorSet={colorSet} />
          )
        }) 
        }
        </div>
        <BotonColores         
        colores={colores} 
        colorActivo={colorActivo} 
        colorSet={colorSet} />
        </>
  );
};

export default Semaforo;