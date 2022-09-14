import React from 'react';

const Todo = (props) => {

    const { tasks, handleComplete, handleRemove } = props

    return (
        <ul className='todo'>
            {tasks
                .map((task, index) =>
                    <li key={index}>
                        <div className='checkAndTask'>
                            <label className='checkContainer'>
                                <input type="checkbox" onClick={() => handleComplete(index)} />
                                <span className="checkmark"></span>
                            </label>
                            <span>{task.task}</span>
                        </div>
                        <button onClick={() => handleRemove(index)}>Delete<i ></i></button>
                    </li>
                )}
        </ul>
    );
}

export default Todo;
