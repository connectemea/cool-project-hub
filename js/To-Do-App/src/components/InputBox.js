import Styles from './style.module.css';
import {useState, useEffect} from 'react';
const InputBox = (props) =>{
    const {todo, setTodo} = props;
    function todoOnChangeHandler(event){
        setTodo(
            event.target.value
        )
    }
    return <input type='text' onChange={todoOnChangeHandler} value={todo} placeholder='Add new item' className={Styles.todoInputBox}></input>;
}
export default InputBox;
