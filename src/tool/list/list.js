import "./list.css"
import React, { useState } from "react";
import Champions from "../../data";

function List(){
    const handleDragStart = (event , d) => {
        event.dataTransfer.setData("application/json", JSON.stringify(d));
      };
    return(
        <div className="list_main">
            <div className="list_selecter">

            </div>
            <div className="list_container">
                {
                    Champions.map(function(a, i){
                        return(
                            <div className="champion">
                                <img draggable onDragStart={ (e) => handleDragStart(e, Champions[i])} src={Champions[i].img} alt="a"></img>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    );
}

export default List;