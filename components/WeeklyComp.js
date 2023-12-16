"use client"
import { useEffect, useState } from "react"

function DailyCard(props){
    return (
        <div className="flex justify-between items-center text-gray-400 py-2">
            <h1>Today</h1>
            <div className="flex items-center">
                {/* <p className="text-gray-200 material-symbols-outlined mr-3">{props.icon}</p> */}
                <img width={48} src={props.icon} alt="" />
                <h3 className="text-gray-300 text-sm">{props.text}</h3>
            </div>
            <p className="">{props.maxT}/ {props.minT}</p>

        </div>
    )
}



export default function WeeklyComp (props) {
    const [obj,setObj] = useState([
        {
            "day": "2023-12-16",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
            "summary": "Partly cloudy",
            "max": 7.1,
            "min": 4.4
        },
        {
            "day": "2023-12-17",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
            "summary": "Patchy rain possible",
            "max": 7.8,
            "min": 6.2
        },
        {
            "day": "2023-12-18",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
            "summary": "Patchy rain possible",
            "max": 5.8,
            "min": -2
        },
        {
            "day": "2023-12-19",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/332.png",
            "summary": "Moderate snow",
            "max": -0.6,
            "min": -4.3
        },
        {
            "day": "2023-12-20",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
            "summary": "Partly cloudy",
            "max": 3.8,
            "min": -1.1
        },
        {
            "day": "2023-12-21",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
            "summary": "Partly cloudy",
            "max": 3.7,
            "min": 1.3
        },
        {
            "day": "2023-12-22",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
            "summary": "Patchy rain possible",
            "max": 3.1,
            "min": 2
        }
    ]);
    const handleUpdate = async (city) => {
        const response = await fetch("/api/sevenDay/"+city);
        const data = await response.json();
        console.log(data);
        // const {des} = data;
        setObj(data.Ar);

    }

    useEffect(() => {
        // Perform actions when city changes
        // console.log('City changed:', props.cityy);
        try{
            handleUpdate(props.cityy);
        }catch(e){
            console.log()
        }
    
    }, [props.cityy]);

    return (
        <div className="w-1/3">
            <div className="bg-[#212c3d] px-2 sm:px-8 mt-16 mx-2 py-6 rounded-lg">
                <h1 className="text-gray-400 text-sm font-semibold mb-8 mt-3">
                    7-DAY FORECAST
                </h1>
                {obj.map((data, index) => (
                    // console.log(data)
                    <DailyCard key={index} maxT={data.max} minT={data.min} icon={data.icon} text={data.summary} />
                ))}
                {/* <DailyCard maxT="12" minT="9" icon="sunny" text="sunny" />
                <DailyCard maxT="12" minT="9" icon="rainy" text="rainy" />
                <DailyCard maxT="12" minT="9" icon="cloudy" text="cloudy" />
                <DailyCard maxT="12" minT="9" icon="storm" text="storm" />
                <DailyCard maxT="12" minT="9" icon="air" text="air" />
                <DailyCard maxT="12" minT="9" icon="sunny" text="sunny" />
                <DailyCard maxT="12" minT="9" icon="sunny" text="sunny" /> */}
            </div>
        </div>
    )
}