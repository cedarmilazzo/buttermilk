import React from 'react';
const options = {weekday : 'long', year:'numeric',month:'short',day:'numeric', time:'numeric'};
export const Task = ({ task, onCheckboxClick, onDeleteClick  } ) => {
  return (
      <li>
      <input
        type="checkbox"
        checked={!!task.isChecked}
        onClick={() => onCheckboxClick(task)}
        readOnly 
        />

    <span>{task.text} 
    <div className='dates'>
       {task.createdAt ? task.createdAt.toLocaleString() : ''} </div> </span>
    <button onClick={ () => onDeleteClick(task) }>&times;</button>
    </li>
  );
};