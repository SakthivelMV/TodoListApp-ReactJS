import { useState } from "react"
import Edittask from "../Modals/Editask"

function Card({taskObj,index,delTask,updateListArray}){
    const [modal,setModal] = useState(false);
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toogle = () => {
        setModal(!modal);
    }

    const update = (obj) => {
        updateListArray(obj, index)
    }

    const handleDel = () =>{
        delTask(index)
    }

    return(
        <div class="card-wrapper mr-5">
            <div class="card-top" style={{"background-color":colors[index%5].primaryColor}}></div>
                        <div class = "task-holder">
                            <span class = "card-header" style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>{taskObj.Name}</span>
                            <p className="mt-3">{taskObj.Description}</p>
                            <div style={{"position":"absolute","right":"20px","bottom":"20px"}}>
                            <i class = "far fa-edit mr-5" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick={()=>setModal(true)}></i>
                            <br/><br/>
                            <i class = "fas fa-trash-alt" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick={handleDel}></i>
                            </div>
                        </div>
                        <Edittask modal={modal} toogle={toogle} update={update} taskObj={taskObj}/>
        </div>
    )
}
export default Card