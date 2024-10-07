// import { useState } from "react";
import { dummyData } from "../../data"
import { useState } from "react"
import TodoForm from "./TodoForm"
import Todos from "./Todos"

export default function TodoList() {
  const [todos, setTodos] = useState(dummyData);
  let setTodoCompleted = (id, completed) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? {...todo, completed} : todo)));
  }

  let addTodo = (title) => {
    setTodos(prevTodos => [
      {
        id: prevTodos.length + 1,
        title,
        completed: false,
      },
      ...prevTodos,
    ])
  }

  return (
    <div className="w-72 bg-indigo-500/40 rounded-xl border border-violet-200 flex flex-col gap-2 h-96 overflow-auto">
        <p className="p-1 border-b text-white font-bold sticky top-0 bg-indigo-500/40">Todos</p>
        <TodoForm onSubmit={addTodo}/>
        <Todos todos={todos} onCompletedChange={setTodoCompleted}/>
    </div>
  )
}