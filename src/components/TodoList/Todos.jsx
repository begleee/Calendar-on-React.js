import TodoItem from "./TodoItem";

export default function Todos({todos, onCompletedChange}) {
  return (
    <span className="flex flex-col gap-2">
      {
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} onComletedChange={onCompletedChange}/>)
      }
    </span>
  )
}
