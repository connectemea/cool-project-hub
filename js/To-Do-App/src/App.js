import './App.css';
import Styles from './style.module.css';
import InputBox from './components/InputBox';
import AddButton from './components/AddButton';
import List from './components/List';
import {useState} from 'react';

function App() {
  const [todoList, setTodoList] = useState([]); 
  const [todo, setTodo] = useState();
    function addTodo(){
      console.log('alooooo')
        setTodoList(
          [...todoList,
            todo
          ]
        )
        setTodo('');
    }
    function handleDelete(todoName){
      setTodoList(todoList.filter((todo)=> todo !== todoName))
      
    }
  return (

    <div className={Styles.contentWrapper}>
      <div className={Styles.container}>
        <h1>To-Do-App!</h1>
        <h3>Add new To-Do</h3>
        <div className={Styles.todoSection}>
        <div className={Styles.addSection}>
          <List todoList={todoList} handleDelete={handleDelete}/>
          <InputBox todo={todo} setTodo={setTodo}/>
          <AddButton onClickHandler={addTodo} todo={todo}/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;

