import './App.css';
import ToDoList from './components/ToDoList';
import AddTodoForm from './components/AddToDoForm';
import Summary from './components/Summary';
function App() {
  return (
    <div className=''>
      <AddTodoForm></AddTodoForm>
      <ToDoList></ToDoList>
      <Summary></Summary>
    </div>
  );
}

export default App;
