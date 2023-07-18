import { useEffect, useState } from "react"
import Createtask from "../Modals/Createtask"
import Card from "./Card";
function Todolist(){
    const[modal,setModal]=useState(false);
    const[taskList,setTaskList]=useState([])

    useEffect (()=>{
        let arr = localStorage.getItem("taskList")
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    },[]);

    const delTask = (index)=>{
        let tempList = taskList
        tempList.splice(index,1)
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }
const updateListArray = (obj,index)=>{
    let tempList = taskList
    tempList[index]=obj
    localStorage.setItem("taskList",JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
}

    const toogle = () => {
        setModal(!modal);
    }
    const saveTask = (taskObj)=>{
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
        
    }
    return(
        <>
        <div className = "header text-center">
        <h3>Todo App by Sakthivel.M</h3>
        <button className="btn btn-primary mt-3" onClick={()=>setModal(true)}>Create Task</button>
        </div>   
        <div className="task-container">
            {taskList.map((obj,index)=> <Card taskObj={obj} index={index} delTask={delTask} updateListArray={updateListArray}/>)}

        </div>
        <Createtask toogle = {toogle} modal={modal} save={saveTask}/>
        </>
        )
}
export default Todolist