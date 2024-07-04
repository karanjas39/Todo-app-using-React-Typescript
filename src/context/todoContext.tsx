import { createContext, useContext, useState, type ReactNode } from "react";

type TodoContextType = {
  todos: TodoType[];
  addTodo: (todo: TodoType) => void;
  deleteTodo: (id: TodoType["id"]) => void;
  todoCompletion: (id: TodoType["id"]) => void;
  resetTodo: () => void;
};

const TodoContext = createContext<TodoContextType | null>(null);

export default function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<TodoType[]>([]);

  function addTodo(t: TodoType) {
    setTodos((prevTodos) => [t, ...prevTodos]);
  }

  function deleteTodo(id: TodoType["id"]) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function todoCompletion(id: TodoType["id"]) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) return { ...todo, isCompleted: !todo.isCompleted };
        return todo;
      })
    );
  }

  function resetTodo() {
    setTodos([]);
  }

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, todoCompletion, resetTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo(): TodoContextType {
  const context = useContext(TodoContext);
  if (!context) throw new Error("Context is not appropriate.");
  return context;
}
