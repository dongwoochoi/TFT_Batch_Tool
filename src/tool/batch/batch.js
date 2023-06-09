import "./batch.css"
import React, { useState, useEffect } from "react";
import Hexagon from "./hexagon/hexagon";
import { useDispatch, useSelector } from "react-redux"
import { input, delete1 } from "../../store";

function Batch() {
  let dispatch = useDispatch()
  const [data, set_data] = useState([{0 : {}},{1 : {}},{2 : {}},{3 : {}},{4 : {}},{5 : {}},{6 : {}},{7 : {}}, {8 : {}}, {9 : {}},{10 : {}},{11 : {}},{12 : {}},{13 : {}},{14 : {}},{15 : {}},{16 : {}},{17 : {}},{18 : {}},{19 : {}},{20 : {}},{21 : {}},{22 : {}},{23 : {}},{24 : {}},{25 : {}},{26 : {}},{27 : {}}]);
  const [drop_i, set_drop_i] = useState();
  const [delete_i, set_delete_i] = useState();
  useEffect(() => {
    dispatch(input({ i: drop_i, data: data }))
  }, [drop_i]);
  useEffect(() => {
    dispatch(delete1({ i: delete_i, data: data }))
  }, [delete_i]);


  const handleDrop = (e,i) => {
    e.preventDefault();
    const copy1 = [...data]
    copy1[i] = { [i] : JSON.parse(e.dataTransfer.getData("application/json"))}
    set_data(copy1);
    
    if(drop_i == i){
      dispatch(input({ i: i, data: copy1 }))
    }else{
      set_drop_i(i);
    }
  };

  const handleDragStart = (event , i) => {
    const d = data[i][i]
    event.dataTransfer.setData("application/json", JSON.stringify(d));
    const copy2 = [...data];
    copy2[i] = {[i] : {}};
    set_data(copy2)
    if(delete_i == i){
      dispatch(delete1({ i: i, data: data }))
    }else{
      set_delete_i(i);
    }
  };

   const handleInDragStart = (event , i) => {
    const d = data[i][i]
    event.dataTransfer.setData("application/json", JSON.stringify(d));
    const copy2 = [...data];
    copy2[i] = {[i] : {}};
    set_data(copy2);
    
   };

  const handleContextMenu = (event, i) => {
    event.preventDefault();
    const copy3 = [...data];
    copy3[i] = {[i]:{}};
    set_data(copy3);
    
    if(delete_i == i){
      dispatch(delete1({ i: i, data: data }))
    }else{
      set_delete_i(i);
    }
  };
  return (
    <div className="batch_main">
        {
            data.map(function(a,i){
                return(
                    <div key={i} className={"h_box "+"c"+i} onContextMenu={ (e)=> handleContextMenu(e,i)} 
                        onDragStart={ (e) => handleDragStart(e, i)}
                        onDragOver={(e) => e.preventDefault()} 
                        onDrop={ (e) => handleDrop(e,i)}>
                        <Hexagon img={data[i][i]}>
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