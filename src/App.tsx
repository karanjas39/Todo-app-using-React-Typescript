import NavBar from "./components/NavBar";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import { useTodo } from "./context/todoContext";
import "./styles/app.scss";

export default function App() {
  const { todos } = useTodo();

  return (
    <main className="app">
      <NavBar />

      <TodoList>
        {todos.length != 0
          ? todos.map((todo) => <Todo key={todo.id} {...todo} />)
          : "No new todo is added. Let's add some for today!!"}
      </TodoList>
    </main>
  );
}
