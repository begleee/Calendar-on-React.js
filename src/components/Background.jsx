import { showWeeksDay } from "../functions/showWeeksDay";
import { showTimesPeriod } from "../functions/showTimesPeriod";

export default function Background() {
  return (
    <div className="flex flex-col justify-evenly items-center size-full text-indigo-900 blur-sm">
        <h1 className="text-9xl font-black tracking-widest ">{showWeeksDay()}</h1>
        <h1 className="text-9xl font-black tracking-widest">{showTimesPeriod()}</h1>
    </div>
  )
}