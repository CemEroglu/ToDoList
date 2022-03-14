import React from "react";
import ToDoItem from "./ToDoItem";
const ToDoList = () => {
const todos = [
    { id: 1, title: 'todo1', isTaskCompleted: false },
    { id: 2, title: 'todo2', isTaskCompleted: false },
    { id: 3, title: 'todo3', isTaskCompleted: true },
    { id: 4, title: 'todo4', isTaskCompleted: false },
    { id: 5, title: 'todo5', isTaskCompleted: false },
];

  return (
    
        <ul>
        {todos.map(todo=>{
            return <ToDoItem id={todo.id} title={todo.title} isTaskCompleted={todo.isTaskCompleted} />
        })}
        
        </ul>
      
    
  );
}
export default ToDoList;
