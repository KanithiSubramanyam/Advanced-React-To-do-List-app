import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateNewTask = ({ modal, toggle, save }) => {
  const [projectTaskName, setProjectTaskName] = useState('');
  const [projectTaskStartDate, setProjectTaskStartDate] = useState('');
  const [projectTaskDeadline, setProjectTaskDeadline] = useState(null);
  const [projectTaskStatus, setProjectTaskStatus] = useState('To Do');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'projectTaskName') {
      setProjectTaskName(value);
    } else if (name === 'projectTaskStartDate') {
      setProjectTaskStartDate(value);
    } else if (name === 'projectTaskDeadline') {
      setProjectTaskDeadline(value);
    } else {
      setProjectTaskStatus(value);
    }
  };

  const handleSave = () => {
    let taskObj = {
      Name: projectTaskName,
      StartDate: projectTaskStartDate,
      Deadline: projectTaskDeadline,
      Status: projectTaskStatus,
    };

    save(taskObj);
  };

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form>
            <div className='form-group'>
              <label>Name of the Task</label>
              <input type='text' className='form-control' value={projectTaskName} 
                onChange={handleChange}name='projectTaskName'></input>
            </div>
            <div className='form-group'>
              <label>Start Date</label>
              <input type='date' className='form-control' value={projectTaskStartDate} 
                onChange={handleChange} name='projectTaskStartDate'></input>
            </div>
            <div className='form-group'>
              <label>Deadline</label>
              <input type='date' className='form-control' value={projectTaskDeadline}
                onChange={handleChange} name='projectTaskDeadline' ></input>
            </div>
            <div className='form-group'>
              <label>Status</label>
              <select className='form-control' value={projectTaskStatus}
                onChange={handleChange} name='projectTaskStatus'>
                <option value='To Do' selected>To Do</option>
                <option value='In Progress'>In Progress</option>
                <option value='In Review'>In Review</option>
                <option value='Completed'>Completed</option>
              </select>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={handleSave}>
            Create Task
          </Button>{' '}
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CreateNewTask;
