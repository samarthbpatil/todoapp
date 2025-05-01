import styles from './Form.module.css';
import React, { useState } from 'react';

export default function Form({todos, setTodos}){
    const [todo, setTodo] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        // console.log(todos); this runs before the setTodos function and it is asynchronous
        setTodos([...todos,todo]);
        setTodo("");

    }
    return <div className={styles.formContainer}>

    <form className={styles.form} onSubmit={(e)=>handleSubmit(e)} >
                <input className={styles.modernInput} placeholder='Enter Todos' type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
                <button className={styles.modernButton} type="submit">ADD</button>
            </form>
            {/* {console.log(todos)} this runs after the setTodos function and it is asynchronous  */}
    </div>

       
}