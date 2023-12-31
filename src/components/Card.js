import React, {useState} from 'react';
import EditProjectTask from '../Modals/EditProjectTask';

const Card = ({object, index, updateListArray}) => {
    const [modal, setModal] = useState(false);
    
    const toggle = () =>{
        setModal(!modal);
    }
    const updateTask = (object) =>{
         updateListArray(object, index)
    }
    return (
        <div>
            <div key={index} className='projectTaskList card' onClick={() => setModal(true)}>
                        <div className='task-display-card'>
                            <p>{object.Name}</p>
                            <div className='inner'>
                                <div className='div1'>
                                    <p className='lable text-secondary'>Start date</p>
                                    <p className='dates'>{object.StartDate}</p>
                                </div>
                                <div className='div2'>
                                    <p className='lable text-secondary'>Deadline</p>
                                    <p className='dates'>{object.Deadline}</p>
                                </div>

                            </div>   
                        </div>
                    </div>
                    <EditProjectTask modal={modal} toggle={toggle} updateTask={updateTask} taskDetails={object} 
      />
        </div>
        
    );
};

export default Card;