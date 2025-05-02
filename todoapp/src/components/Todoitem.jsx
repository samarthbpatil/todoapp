import styles from  "./todolist.module.css";

export default function Todoitem({item,setTodos, todos}){
    function handleDelete(item){
        console.log(item);
        // setTodos(todos.filter((todo)=>todo!==item)); this is not working because the todos state is not being updated in the parent component

        setTodos(todos.filter((todo)=>todo!==item));
    }
    function handleClick(name){
        setTodos(todos.map((todo)=>todo.name===name ? {...todo, done:!todo.done} : todo));
        console.log(todos);
        
    }
    const className = item.done ? styles.completed :"";


    
    return <div className={styles.item}>


     <div className={styles.listName}>
        <span className={className} onClick={()=>handleClick(item.name)} >
            {item.name}
        </span>
      <span><button onClick={()=>handleDelete(item)} className={styles.deleteButton}>x</button></span>
    </div>
    <hr  className={styles.line}/>
    </div>
}