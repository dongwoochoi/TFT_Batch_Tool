import React from "react";
import "./hexagon.css";
import { useState, useEffect } from "react";

function Hexagon(props) {
  let [sdata, set_sdata] = useState(props)
  useEffect(() => {
    set_sdata(props)
  }, [props]);
  return (
    <div className="h">
      <div class="hexagon-container">
        <div class="hexagon">
          <div class="hexagon-container2">
            <div class="hexagon2">
              {
                sdata.img.img == undefined ? null : <img src={sdata.img.img}></img>
              }
            </div>
        </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default Hexagon;