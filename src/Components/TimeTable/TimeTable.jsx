import { useEffect } from "react";
import { useState } from "react";


const TimeTable = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(()=>{
    const timer = setInterval(()=>{
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);

  },[])
  
  const formatTimeWithLeadingZero = (num) =>{
    return num < 10 ? `0${num}` : num;
  };

  const formatHour = (hour)=>{
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };

  const formatDate =(date)=>{
    const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
    return date.toLocaleDateString(undefined, options);
  }

  return (
    <div className="flex justify-center">
      <div className="w-[360px] h-[50px] flex flex-col md:flex-row lg:flex-row  items-center justify-between text-[#706F6F] text-[18px]">
        <div className="pl-4">{formatDate(currentTime)}</div>
        <div className="">{formatTimeWithLeadingZero(formatHour(currentTime.getHours()))} : {formatTimeWithLeadingZero(currentTime.getMinutes())} : {formatTimeWithLeadingZero(currentTime.getSeconds())} {currentTime.getHours() >= 12 ? "PM" : "AM"}</div>
      </div>
    </div>
  );
}

export default TimeTable;