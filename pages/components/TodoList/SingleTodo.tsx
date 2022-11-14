import { ITodo } from './Interfaces'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useState } from 'react'
import { MdDone } from "react-icons/md";
import styles from './Todolist.module.css'



const SingleTodo: React.FC <{ 
 // index: number; 
  todo: ITodo;
  todos: Array<ITodo>
  setTodos: React.Dispatch<React.SetStateAction<Array<ITodo>>>;
}> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div>
      <form
        onSubmit={(e) => handleEdit(e, todo.id)}
      >
        {edit ? (
          <input
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className={styles.todosText}
          />
        ) : todo.isDone ? (
          <s className={styles.todosText}>{todo.todo}</s>
        ) : (
          <span className={styles.todosText}>{todo.todo}</span>
        )}
        <div>
          <span
            className="icon"
            onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
            }}
          >
            <AiFillEdit />
          </span>
          <span className={styles.icon} onClick={() => handleDelete(todo.id)}>
            <AiFillDelete />
          </span>
          <span className={styles.icon} onClick={() => handleDone(todo.id)}>
              <MdDone />
          </span>
        </div>
      </form>
    </div>
  )
}

export default SingleTodo;