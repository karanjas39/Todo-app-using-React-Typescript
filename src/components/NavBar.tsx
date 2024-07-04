import { useTodo } from "../context/todoContext";
import "../styles/navBar.scss";

export default function NavBar() {
  const { resetTodo } = useTodo();

  return (
    <nav className="navbar">
      <h2>
        <img src="/icon.png" alt="Todo App icon" />
        <p>
          <span>Todo</span> App
        </p>
      </h2>
      <button onClick={resetTodo}>Reset Todos</button>
    </nav>
  );
}
