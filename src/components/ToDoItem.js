import React from "react";

const ToDoItem = ({ id, title, isTaskCompleted }) => {
    return (
        <div>
            <li className=''>
                <div className=''>
                    <span className=''>
                        <input type='checkbox' className='' checked={isTaskCompleted}></input>
                        {title}
                    </span>
                    <button className=''>Delete</button>
                </div>
            </li>
        </div>
    );
}

export default ToDoItem;
