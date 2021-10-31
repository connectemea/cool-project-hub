import Styles from './style.module.css'

const AddButton = (props) =>{
    const {onClickHandler,todo} = props;
    return <button className={todo? Styles.addButton:Styles.addButtonMuted} onClick={todo? onClickHandler:null}>Add</button>
}
export default AddButton;
