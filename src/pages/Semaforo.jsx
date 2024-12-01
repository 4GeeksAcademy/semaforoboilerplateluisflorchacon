import React from "react";
import { useState } from "react";

import Luz from "../components/Luz";

function Semaforo () {
  const [colorEncendido, setColorEncendido] = useState("")
  const colores = ["green", "yellow", "red"];
    return (
        <>
        <div style={{width:"120px", height:"320px", backgroundColor:"black", padding:3}}>
        {colores.map((item, index)=> {
          return (
            <Luz color={item} colorActivo={colorEncendido} colorSet={setColorEncendido} />
          )
        }) 
        }
        </div>
        </>
  );
};

export default Semaforo;