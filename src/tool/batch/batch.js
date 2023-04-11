import "./batch.css"
import React, { useState, useEffect } from "react";
import Hexagon from "./hexagon/hexagon";

function Batch() {
  const [data, set_data] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleDrop = (e,i) => {
    e.preventDefault();
    const copy = [...data]
    copy[i] = JSON.parse(e.dataTransfer.getData("application/json"))
    set_data(copy);
  };

  const handleDragStart = (event , i) => {
    const d = data[i]
    event.dataTransfer.setData("application/json", JSON.stringify(d));
    const copy = [...data];
    copy[i] = {};
    set_data(copy)
  };

  const handleContextMenu = (event, i) => {
    event.preventDefault();
    const copy = [...data];
    copy[i] = {};
    set_data(copy)
  };

  return (
    <div className="batch_main">
        {
            data.map(function(a,i){
                return(
                    <div className={"h_box "+i} onContextMenu={ (e)=> handleContextMenu(e,i)} 
                        onDragStart={ (e) => handleDragStart(e, i)}
                        onDragOver={(e) => e.preventDefault()} 
                        onDrop={ (e) => handleDrop(e,i)}>
                        <Hexagon img={data[i]}>
                            {/* <img src={data.img} alt="dropped" /> */}
                        </Hexagon>
                    </div>
                )
            })
        }
    </div>
  );
}

export default Batch;