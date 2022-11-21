import React, { useState, useRef } from "react";
import styles from "../../../styles/forms/TodoList.module.css";


interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
  // date: string;
}

const TodoInput: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
 // const [date, setDate] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      id="todoList"
      className={styles.AddTodo}
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      {/*
      <input
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className={styles.inputDate}
    />*/}
      <input
        id="newTodo"
        type="text"
        placeholder="Add task.."
        name="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className={styles.inputAdd}
      />
      <button type="submit" className={styles.AddTodoButton}>
        Add
      </button>
    </form>
  );
};

export default TodoInput;
