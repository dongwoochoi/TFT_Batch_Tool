import "./list.css"
import React, { useState } from "react";
import Champions from "../../data";

function List(){
    const [isHovered, setIsHovered] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
    const handleDragStart = (event , d) => {
        event.dataTransfer.setData("application/json", JSON.stringify(d));
      };

      const handleMouseEnter = (e,i) => {
        const copy = [...isHovered];
        copy[i] = true;
        setIsHovered(copy);
      };
    
      const handleMouseLeave = (e,i) => {
        const copy = [...isHovered];
        copy[i] = false;
        setIsHovered(copy);
      };
    

      const divStyle = {
        display: isHovered ? 'flex' : 'none',
      };
    return(
        <div className="list_main">
            <div className="list_selecter">
                <div className="tab1">
                    이름순
                </div>
                <div className="tab2">
                    가격순
                </div>
                <div className="tab3">
                    직업순
                </div>
                <div className="tab4">
                    계열순
                </div>
                <input className="champion_search">

                </input>

            </div>
            <div className="list_container">
                {
                    Champions.map(function(a, i){
                        return(
                            <div className="champion" key={i}>
                                <img draggable onMouseEnter={(e)=>{handleMouseEnter(e,i)}} onMouseLeave={(e)=>{handleMouseLeave(e,i)}} onDragStart={ (e) => handleDragStart(e, Champions[i])} src={Champions[i].img} alt="a"></img>
                                {
                                    isHovered[i] == true ? <div className={"champion_info " + "c"+i} style={divStyle}>
                                    <div>{Champions[i].name}</div>
                                    <div>{Champions[i].cost}</div>
                                    <div>{Champions[i].line}</div>
                                    <div>{Champions[i].job}</div>
                                    <div>{Champions[i].attack_range}</div>
                                    <div>{Champions[i].skill}</div>
                                    <div>{Champions[i].mana}</div>
                                    <div>{Champions[i].skill_effect}</div>
                                    <div>{Champions[i].demage}</div>
                                </div> : <div className={"champion_info " + "c"+i}>
                                    <div>{Champions[i].name}</div>
                                    <div>{Champions[i].cost}</div>
                                    <div>{Champions[i].line}</div>
                                    <div>{Champions[i].job}</div>
                                    <div>{Champions[i].attack_range}</div>
                                    <div>{Champions[i].skill}</div>
                                    <div>{Champions[i].mana}</div>
                                    <div>{Champions[i].skill_effect}</div>
                                    <div>{Champions[i].demage}</div>
                                </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    );
}

export default List;