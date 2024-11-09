import { useState } from "react";


export const DateTime = () => {

    const [date, setDate] = useState('');

 const date$Time = () => {
    setInterval(() => {
        let normalDate = new Date();
        let curDate = normalDate.toLocaleDateString();
        let curTime = normalDate.toLocaleTimeString();
        return setDate(`${curTime} - ${curDate}`);
    }, 1000);

}
date$Time()

    return(
        <div className="date-time">{date}</div>
    )
}
