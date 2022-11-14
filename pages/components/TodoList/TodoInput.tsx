import React, { useState } from 'react'
//import { ITodo } from './Interfaces'
//import SingleTodo from './SingleTodo'
import styles from './TodoList.module.css'

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const TodoInput: React.FC<props> = ({todo, setTodo, handleAdd}) => {

   // const [todo, setTodo] = useState<string>("");
    const [date, setDate] = useState<string>('2022-11-05');
   // const [todoList, setTodoList] = useState<ITodo[]>([]);
   
    /*
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
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

    const deleteTodo = (todoNameDelete: string): void => {
        setTodoList(
            todoList.filter((todo) => {
            return todo.todoName != todoNameDelete;
        }))
    }

    const editTodo = (editTodo: string): void => {
        setTodoList(
            todoList.filter((todo) => {
            return todo.todoName != editTodo;
        }))
    }
    
   */
  return (
    <div >
       
        <h1 className={styles.AddTodoTitel}>TodoList</h1>
        <form 
            id='todoList' 
            className={styles.AddTodo} 
            onSubmit={(e) => { handleAdd(e); 
            }}
        >
            <input 
                    type="date" 
                    id='date'
                    name='date'
                    value={date}
                    onChange={(e) => setTodo(e.target.value)}
            />
            <input 
                id='newTodo' 
                type="text" 
                placeholder='Add task..' 
                name="todo" 
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className={styles.inputAdd}
            />
            <button type='submit' className={styles.AddTodoButton}>Add</button>
        </form>
       
    </div>
  )
}


export default TodoInput;