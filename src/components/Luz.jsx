import React from "react";

function Luz ({color,colorActivo, colorSet}) {
    const isSelected = colorActivo === color;
    const handleClick = () => {
        colorSet(color);
    };
    
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
    onClick={handleClick}
    style={estilo}
    >
    </div>
    </>
    );
}

export default Luz;

