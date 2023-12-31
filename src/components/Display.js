import React, { useState, useEffect } from 'react';
import Frame1 from './images/Frame1.png';
import Frame2 from './images/Frame2.png';
import Frame3 from './images/Frame3.png';
import Frame4 from './images/Frame4.png';
import CreateNewTask from '../Modals/CreateNewTask';
import Card from './Card';

const Display = ({ projectName }) => {
  const [modal, setModal] = useState(false);
  const [projectTaskData, setProjectTaskData] = useState({});

  const toggle = () => {
    setModal(!modal);
  };

  const saveProjectTask = (taskObj) => {
    const projectNameKey = projectName.Name;
    const updatedData = {
      ...projectTaskData,
      [projectNameKey]: [...(projectTaskData[projectNameKey] || []), taskObj],
    };

    localStorage.setItem('projectTaskData', JSON.stringify(updatedData));
    setModal(false);
    setProjectTaskData(updatedData);
  };

  useEffect(() => {
    const storedTaskData = localStorage.getItem('projectTaskData');
    if (storedTaskData) {
      setProjectTaskData(JSON.parse(storedTaskData));
    }
  }, []);

  const updateListArray = (object, index) => {
    let tempList = projectTaskData[projectName.Name];
    tempList[index] = object;
    const updatedData = {
      ...projectTaskData,
      [projectName.Name]: tempList,
    };
    localStorage.setItem('projectTaskData', JSON.stringify(updatedData));
    setProjectTaskData(updatedData);
    window.location.reload();
  };

  return (
    <>
      <div className='frames'>
        <div className='frame1'>
          <img src={Frame1} alt='To Do'></img>
          <div className='line'>
            <div>
                {projectTaskData[projectName.Name] &&
                projectTaskData[projectName.Name].map((object, index) => {
                    if (object.Status === 'To Do') {
                        return <Card key={index} object={object} index={index} updateListArray={updateListArray} />;
                    }
                    return null;
                })}
            </div>
            <button className='addnewbtn' onClick={toggle}>
              + Add New Button
            </button>
          </div>
        </div>
        <div className='frame2'>
          <img src={Frame2} alt='In Progress'></img>
          <div className='line'>
            <div>
                {projectTaskData[projectName.Name] &&
                projectTaskData[projectName.Name].map((object, index) => {
                    if (object.Status === 'In Progress') {
                        return <Card key={index} object={object} index={index} updateListArray={updateListArray} />;
                    }
                    return null;
                })}
            </div>
            <button className='addnewbtn' onClick={toggle}>
              + Add New Button
            </button>
          </div>
        </div>
        <div className='frame3'>
          <img src={Frame3} alt='In Review'></img>
          <div className='line'>
            <div>
              {projectTaskData[projectName.Name] &&
                projectTaskData[projectName.Name].map((object, index) => {
                if (object.Status === 'In Review') {
                    return <Card key={index} object={object} index={index} updateListArray={updateListArray} />;
                }
                return null;
                })}
            </div>
            <button className='addnewbtn' onClick={toggle}>
              + Add New Button
            </button>
          </div>
        </div>
        <div className='frame4'>
          <img src={Frame4} alt='Completed'></img>
          <div className='line'>
            <div>
                {projectTaskData[projectName.Name] &&
                projectTaskData[projectName.Name].map((object, index) => {
                    if (object.Status === 'Completed') {
                        return <Card key={index} object={object} index={index} updateListArray={updateListArray} />;
                    }
                    return null;
                })}
            </div>
            <button className='addnewbtn' onClick={toggle}>
              + Add New Button
            </button>
          </div>
        </div>
      </div>
      <CreateNewTask toggle={toggle} modal={modal} save={(taskObj) => saveProjectTask(taskObj)} />
    </>
  );
};

export default Display;
