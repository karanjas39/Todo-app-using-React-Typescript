import { useTodo } from "../context/todoContext";
import "../styles/todo.scss";

export default function Todo({ isCompleted, title, id }: TodoType) {
  const { deleteTodo, todoCompletion } = useTodo();
  return (
    <article className="todo">
      <p className={isCompleted ? "cross" : "notcross"}>{title}</p>
      <div>
        <button onClick={() => todoCompletion(id)}>
          {isCompleted ? "Mark not completed" : "Mark completed"}
        </button>
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </div>
    </article>
  );
}
