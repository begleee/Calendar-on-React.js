import Calendar from "./Calendar";
import Clocks from "./Clocks";
import TodoList from "./TodoList/TodoList";

export default function Face() {
  return (
    <div className='container xl absolute inset-0 flex items-center justify-center self-center m-auto'>
        <div className="grid grid-cols-3 container xl gap-10">
            <div className="col-span-2 flex flex-col gap-5">
                <Calendar/>
                <Clocks/>
            </div>
            <TodoList/>
        </div>
    </div>
  )
}