import SingleTodo from "./SingleTodo";
import styles from "../../../styles/forms/TodoList.module.css";
import { ITodo } from "./TodoInterfaces";
import { Droppable } from "react-beautiful-dnd";

interface props {
  todos: Array<ITodo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<ITodo>>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Array<ITodo>>>;
  completedTodos: Array<ITodo>;
  
}

const TodoList: React.FC<props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className={styles.TodoListContent}>
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
          ref={provided.innerRef}
            {...provided.droppableProps}
            className={` ${styles.TodoListTodo} + ${ snapshot.isDraggingOver ? styles.dragactive : ""}`}
          >
            <span className={styles.TodoListHeading}>Tasks:</span>
            {todos?.map(( todo, index ) => (
              <SingleTodo
                index={index}
                todos={todos}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`${styles.TodoListTodo} + ${snapshot.isDraggingOver ? styles.dragcomplete : styles.remove }`}
          >
            <span className={styles.TodoListHeading}> Done:</span>
            {completedTodos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={completedTodos}
                todo={todo}
                key={todo.id}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
