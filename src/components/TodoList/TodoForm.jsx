import { useState } from "react"

export default function TodoForm({onSubmit}) {
    const [input, setInput] = useState("");
    let handleSubmit = (e) => {
        e.preventDefault();

        if(!input.trim()) return;

        onSubmit(input);
        setInput("");
    }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 items-center p-1">
        <input value={input} onChange={(e) => setInput(e.target.value)} className="h-10 p-4 w-52 rounded-md focus:outline-none" placeholder="Type your task" type="text" />
        <button className="p-2 bg-indigo-500 w-52 text-white rounded-md" type="submit">Add</button>
    </form>
  )
}