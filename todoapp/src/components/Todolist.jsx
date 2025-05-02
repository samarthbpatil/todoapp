import styles from './Todolist.module.css';
import Todoitem from "./Todoitem";
export default function Todolist({todos, setTodos}){
    return <div className={styles.container}>
        {todos.map((item)=>(<Todoitem setTodos={setTodos } todos={todos} key={item.name} item={item} />))}
    </div>
}