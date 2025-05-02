import styles from './Task.module.css';
export default function Task({todos}){

    const count = todos.filter((todo)=>todo.done? true : false).length;



    return <div className={styles.container}>
        <div className={styles.item}>
        <h3>PENDING  {(todos.length)-count}</h3>
        </div>
       <div className={styles.item}>
        <h3>COMPLETED  {count}</h3>
       </div>
      
    </div>

}