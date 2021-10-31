import Styles from './style.module.css'

const List = (props) =>{
    const {todoList,handleDelete} = props;
    return(
        <>

        {
            todoList.map((todo)=>(
                <div className={Styles.todoList} key={todo}>
            <div className={Styles.listDes}><p>{todo}</p></div>
            <button onClick={()=>handleDelete(todo)} className={Styles.deleteButton}><i class="fas fa-trash"></i></button>
        </div>
            ))
        }

        </>
    )
}
export default List;
