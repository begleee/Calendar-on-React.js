import { useState, useEffect } from "react";

export default function Clocks() {
    const [date, setDate] = useState(new Date());
  
    useEffect(() => {
        const intervalId = setInterval(() => {
        setDate(new Date());
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])
  return (
    <div className="bg-indigo-500/40 rounded-xl border border-violet-200">
        <div className="border-b border-violet-200 h-7"></div>
        <p className="text-white font-bold text-6xl p-8">{date.toLocaleTimeString()}</p>
        <div className="border-t border-violet-200 h-7"></div>
    </div>
  )
}