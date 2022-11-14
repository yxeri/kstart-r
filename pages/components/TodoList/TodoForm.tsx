import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { ITodo } from './Interfaces'
import styles from './TodoList.module.css'
import Navbar from '../Navbar'

/*
interface todoProps {
    id: number;
    todo: 
}
*/

const TodoForm: React.FC<todoProps> = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Array<ITodo>>([]);
    const [completedTodos, setCompletedTodos] = useState<Array<ITodo>>([]);
    
    /** 
     * const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        if (e.target.name === "todo") {
            setTodo(e.target.value);
         } 
         else {
        setDate(e.target.value);
        }
    }
    const addTodo = (): void => {
        const newTodo = {
            todoName: todo, date: date
        };
        setTodoList([...todoList, newTodo]);
        setTodo("")
        
    }
    */
    
    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (todo) {
          setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
          setTodo("");
        }
    }
    return (
      <>
        <Navbar />
        <div className={styles.TodoContent}>
            <TodoInput todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        </div>
        <div>
            <TodoList
                todos={todos}
                setTodos={setTodos}
                completedTodos={completedTodos}
                setCompletedTodos={setCompletedTodos}
            />
        </div>
      </>
    );
}
  
export default TodoForm