import { useEffect, useState } from 'react';
import {Button,Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';

function Edittask({modal,toogle,update,taskObj}){
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

    useEffect(()=>{
        setTask(taskObj.Name)
        setDes(taskObj.Description)
    },[])


    const handleUpdate  = (e) =>{
       e.preventDefault();
       let tempObj = {}
       tempObj['Name'] = task
       tempObj['Description']= des
       update(tempObj)

    }
    return(
        <Modal isOpen={modal} toogle={toogle}>
            <ModalHeader toggle={toogle}>Edit Task</ModalHeader>
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
                <Button color='primary' onClick={handleUpdate}>Update</Button>{''}
                <Button color='secondary' onClick={toogle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}
export default Edittask