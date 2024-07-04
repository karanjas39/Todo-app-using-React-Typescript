import { type ReactNode } from "react";
import "../styles/todoList.scss";
import AddTodo from "./AddTodo";

export default function TodoList({ children }: { children: ReactNode }) {
  return (
    <div className="todoList">
      <div>{children}</div>
      <AddTodo />
    </div>
  );
}
