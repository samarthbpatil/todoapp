import styles from './Form.module.css';
import React, { useState } from 'react';

export default function Form({todos, setTodos}){
    const [todo, setTodo] = useState({name:"", delete:false});

    function handleSubmit(e){
        e.preventDefault();
        // console.log(todos); this runs before the setTodos function and it is asynchronous
        setTodos([...todos,todo]);
        setTodo({name:"", done:false});

    }
    return <div className={styles.formContainer}>

    <form className={styles.form} onSubmit={(e)=>handleSubmit(e)} >
                <input className={styles.modernInput} placeholder='Enter Todos' type="text" value={todo.name} onChange={(e)=>setTodo({name:e.target.value,done:false})} />
                <button className={styles.modernButton} type="submit">ADD</button>
            </form>
            {/* {console.log(todos)} this runs after the setTodos function and it is asynchronous  */}
    </div>

       
}