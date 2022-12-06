import { ITodo } from "./TodoInterfaces";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import { MdDone } from "react-icons/md";
import { Draggable } from "react-beautiful-dnd";
import styles from "./css/TodoList.module.css";


const SingleTodo: React.FC<{
  index: number;
  todo: ITodo;
  todos: Array<ITodo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<ITodo>>>;
}> = ({ index, todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  //when edit task, focus on task
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

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
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`${styles.todosSingle} ${snapshot.isDragging ? styles.drag : ""}`}
        >
          {edit ? (
            <input
              value={editTodo}
              ref={inputRef}
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
              className={styles.icon}
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
      )}
    </Draggable>
  );
};

export default SingleTodo;
