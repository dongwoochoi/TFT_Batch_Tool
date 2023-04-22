import "./synergy.css"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"


function Synergy(){
    let [line, set_line] = useState({"균열방랑자" : 0, "기계유망주" : 0, "동물특공대" : 0, "레이저단" : 0, "메카:프라임" : 0, "무한대팀" : 0, "별수호자" : 0, "우세" : 0, "위협" : 0, "자동방어체계" : 0, "지하세계" : 0, "황소부대" : 0});
    let [job, set_job] = useState({"결투가" : 0, "기상캐스터" : 0, "마스코트" : 0, "무법자" : 0, "방패대" : 0, "선의" : 0, "속사단" : 0, "싸움꾼" : 0, "엄호대" : 0, "에이스" : 0, "익살꾼" : 0, "주문투척자" : 0, "타락" : 0, "특등사수" : 0, "평행세계" : 0, "해커" : 0});
    let [cline, set_cline] = useState(Object.assign({}, line));
    let [cjob, set_cjob] = useState(Object.assign({}, job));
    let a = useSelector((state) => { return state } )

    useEffect(() => {
        const copy = Object.assign({}, line);
        const copy1 = Object.assign({}, job);
        console.log(a.In)
        for(var i = 0; i < a.In.length; i++){
            if(i > 0){
                for(var j in line){
                    if(a.In[i][Object.keys(a.In[i])][Object.keys(a.In[i])][Object.keys(a.In[i])].line == j ){
                        copy[j] = copy[j] + 1;
                        set_cline(copy)
                    }
                }
            }else{
                set_cline(line)
            }
        }
        for(var ii = 0; ii < a.In.length; ii++){
            if(ii > 0){
                for(var jj in job){
                    for(var q = 0 ; q < a.In[ii][Object.keys(a.In[ii])][Object.keys(a.In[ii])][Object.keys(a.In[ii])].job.length; q++){
                        if(a.In[ii][Object.keys(a.In[ii])][Object.keys(a.In[ii])][Object.keys(a.In[ii])].job[q] == jj ){
                            copy1[jj] = copy1[jj] + 1;
                            set_cjob(copy1)
                        }
                    }
                }
            }else{
                set_cjob(copy1)
            }
        }
      }, [a]);

    return(
        <div className="synergy_main">
            {
                Object.values(cline).reduce((acc, cur) => acc + cur) == 0 ?
                <div className="fake_container">
                    챔피언을 배치하면 시너지가 활성화 됩니다.
                </div> :
                <div className="synergy_container">
                {   
                    Object.entries(cline).map(([key, value]) => (
                        value === 0 ? null : 
                        <div className="synergy_box" key={key}>
                            <span>{key}: </span>
                            <span>{value}</span>
                        </div>
                    ))
                }
                {   
                    Object.entries(cjob).map(([key, value]) => (
                        value === 0 ? null : 
                        <div className="synergy_box" key={key}>
                            <span>{key}: </span>
                            <span>{value}</span>
                        </div>
                    ))
                }
                </div>

            }
        </div>
    );
}

export default Synergy;