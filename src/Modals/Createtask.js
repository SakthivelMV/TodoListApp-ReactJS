import { useState } from 'react';
import {Button,Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';

function Createtask({modal,toogle,save}){
    const[task,setTask]=useState('');
    const[des,setDes]=useState('');
    const handleChange = (e) =>{
        const {name,value} = e.target
        if(name === "taskname"){
            setTask(value)
        }else{
            setDes(value)
        }

    }
    const handleSave  = ()=>{
        let taskObj = {}
        taskObj["Name"] = task
        taskObj["Description"]= des
        save(taskObj)

    }
    return(
        <Modal isOpen={modal} toogle={toogle}>
            <ModalHeader toggle={toogle}>Create a Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label>Task Name</label>
                        <input type = "text" className="form-control" value={task} name='taskname'
                        onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Task Description</label>
                        <textarea rows="5" className="form-control" value={des} name="description" onChange={handleChange}></textarea>
                    </div>

                </form>
            
            </ModalBody>
            <ModalFooter>
                <Button color='primary' onClick={handleSave}>Add</Button>{''}
                <Button color='secondary' onClick={toogle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}
export default Createtask