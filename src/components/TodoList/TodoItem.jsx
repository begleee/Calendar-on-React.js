export default function TodoItem({todo, onComletedChange}) {
  return (
    <label className="m-1 flex gap-2 p-3 bg-indigo-500/40 border rounded-md">
        <input className="epp scale-125" onChange={(e) => onComletedChange(todo.id, e.target.checked)} checked={todo.completed} type="checkbox" />
        <p className={todo.completed ? "line-through text-gray-700" : "text-white"}>{todo.title}</p>
    </label>
  )
}