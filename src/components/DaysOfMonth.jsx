import { getDaysOfMonth } from "../functions/getDaysOfMonth";
import { getWeekDayOfFirst } from '../functions/getWeekDayOfFirst';

export default function DaysOfMonth() {
    var date = new Date();
    var days = [];
    getDaysOfMonth(days, date.getMonth(), date.getFullYear());
    

    let shortWeekDays = ["Mn", "Tu", "Wn", "Th", "Fr", "St", "Sn"];
  return (
    <div className="bg-indigo-500/25 p-4 rounded-xl border-l">
        <ul className="grid grid-cols-7">
            {
                shortWeekDays.map((shortDays) => 
                    <li key={shortDays} className="cursor-pointer"><p className="font-bold text-white">{shortDays}</p></li>)
            }
        </ul>
        <ul className="grid grid-cols-7">
        {
            days.map((day) => {
                if(day.getDate() == new Date().getDate()) {
                    return <li className="bg-indigo-600 rounded-2xl cursor-pointer" key={day.getDate()}><p className="text-slate-50">{day.getDate()}</p></li>
                } else {
                    if(day.getDate() == 1) {
                        return <li className={`col-start-${getWeekDayOfFirst()} cursor-pointer`} key={day.getDate()}><p className="text-white">{day.getDate()}</p></li>
                    } else {
                        return <li key={day.getDate()}><p className="text-white cursor-pointer">{day.getDate()}</p></li>
                    }
                }
            })
        }
        </ul>
    </div>
  )
}