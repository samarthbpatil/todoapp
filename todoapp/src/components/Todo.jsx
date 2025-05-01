
import {useState} from "react";
import Header from "./header";
import Form from "./Form";
import Todolist from "./Todolist";
export default function Todo(){
    
    const [todos, setTodos] = useState([]);
    return <div>
        <Header />
        <Form todos={todos} setTodos={setTodos} />
        <Todolist  todos={todos} setTodos={setTodos} />

    </div>
}