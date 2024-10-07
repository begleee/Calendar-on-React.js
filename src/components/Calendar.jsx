import { showCurrentMonth } from "../functions/showCurrentMonth";
import { showWeeksDay } from "../functions/showWeeksDay";
import DaysOfMonth from "./DaysOfMonth";

export default function Calendar() {
    let date = new Date();
    let currYear = date.getFullYear();

    return (
    <div className="grid grid-cols-2 bg-indigo-500/40 rounded-xl border border-violet-200">
        <div className="flex flex-col justify-between p-1">
            <div className="flex justify-evenly border-b border-violet-200 p-1">
                <p className="font-bold text-xl text-white">{showCurrentMonth()}</p>
                <p className="font-bold text-xl text-white">{currYear}</p>
            </div>
            <p className="text-8xl font-bold text-white">{date.getDate()}</p>
            <p className="font-bold text-white border-t border-violet-200 p-1">{showWeeksDay()}</p>
        </div>
        <DaysOfMonth/>
    </div>  
    )
}