import "./synergy.css"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"


function Synergy(){
    let [line, set_line] = useState({"균열방랑자" : 0, "기계유망주" : 0, "동물특공대" : 0, "레이저단" : 0, "메카:프라임" : 0, "무한대팀" : 0, "별수호자" : 0, "우세" : 0, "위협" : 0, "자동방어체계" : 0, "지하세계" : 0, "황소부대" : 0});
    let [cline, set_cline] = useState(Object.assign({}, line))
    let a = useSelector((state) => { return state } )

    useEffect(() => {
        const copy = Object.assign({}, line)
        for(var i = 0; i < a.In.length; i++){
            if(i > 0){
                for(var j in line){
                    if(a.In[i][Object.keys(a.In[i])][Object.keys(a.In[i])].line == j ){
                        copy[j] = copy[j] + 1;
                        set_cline(copy)
                    }
                }
            }
        }
      }, [a]);
    //   a.In[i][Object.keys(a.In[i])][Object.keys(a.In[i])].line == "기계유망주"
    // console.log(a.In[2])
    return(
        <div className="synergy_main">
            <div className="synergy_container">
                {
                    Object.entries(cline).map(([key, value]) => (
                        value === 0 ? null : 
                        <div key={key}>
                            <span>{key}: </span>
                            <span>{value}</span>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default Synergy;