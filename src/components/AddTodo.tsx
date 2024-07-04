import { FormEvent, useState } from "react";
import { useTodo } from "../context/todoContext";
import "../styles/addTodo.scss";

export default function AddTodo() {
  const [title, setTitle] = useState<string>("");
  const { addTodo } = useTodo();

  function handleAddTodo(e: FormEvent) {
    e.preventDefault();
    if (!title) return;
    const newTodo: TodoType = {
      title,
      id: Math.floor(Math.random() * 10000 + 1),
      isCompleted: false,
    };
    addTodo(newTodo);
    setTitle("");
  }

  return (
    <form className="addTodo" onSubmit={handleAddTodo}>
      <label htmlFor="addTodo">Add new Todo</label>
      <input
        type="text"
        id="addTodo"
        placeholder="Write new todos here..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}
