import SingleTodo from './SingleTodo'
import styles from './TodoList.module.css'
import { ITodo } from './Interfaces';

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
         <span className={styles.TodoListTodo}><h3>Tasks:</h3></span>
            {todos?.map((todo) => (
              <SingleTodo
               // index={index}
                todos={todos}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
           {/*{provided.placeholder}*/}
           <span className={styles.TodoListDone}> <h3>Done</h3></span>
            {completedTodos?.map((todo) => (
              <SingleTodo
                //index={index}
                todos={completedTodos}
                todo={todo}
                key={todo.id}
                setTodos={setCompletedTodos}
              />
            ))}
           {/*{provided.placeholder}*/}
    </div>
  )
}

export default TodoList