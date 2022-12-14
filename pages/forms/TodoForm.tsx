import React, { useState } from "react";
import TodoInput from "../../components/Forms/TodoList/TodoInput";
import TodoList from "../../components/Forms/TodoList/TodoList";
import { ITodo } from "../../components/Forms/TodoList/TodoInterfaces";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import styles from '../../components/Forms/TodoList/css/TodoList.module.css'

interface todoProps {
  id: number;
  todo: string;
  idDone: boolean;
}

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
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

   // console.log(result);
    //if drag task where no placeholder, goes back.
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = todos;
    let complete = completedTodos;
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
    setCompletedTodos(complete);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.TodoContent}>
      <h1 className={styles.AddTodoTitel}>TodoList</h1>
        <TodoInput todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default TodoForm;
