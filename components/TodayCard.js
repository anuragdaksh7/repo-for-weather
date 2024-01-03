import TempCard from "./TempCard";
import { useState, useEffect } from "react";


export default function TodayCard(props) {
    const [obj, setObj] = useState(
        [
            {
                "day": "02:00",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
                "temp": 7
            },
            {
                "day": "06:00",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/119.png",
                "temp": 7.4
            },
            {
                "day": "10:00",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/296.png",
                "temp": 6
            },
            {
                "day": "14:00",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/296.png",
                "temp": 5.8
            },
            {
                "day": "18:00",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/296.png",
                "temp": 6.5
            },
            {
                "day": "22:00",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/122.png",
                "temp": 6.3
            }
        ]
    );


    const handleUpdate = async (city) => {
        const response = await fetch("/api/today/" + city);
        const data = await response.json();
        console.log(data);
        setObj(data.newAr);
    }

    useEffect(() => {
        try {
            handleUpdate(props.cityy);
        } catch (e) {
            console.log()
        }

    }, [props.cityy]);

    return (
        <div className="bg-[#212c3d] px-2 sm:px-6 mt-8 py-6 rounded-lg">
            <h1 className="text-gray-400 text-center sm:text-left text-sm font-semibold">TODAY'S FORECAST</h1>
            <div className=" sm:flex justify-around mt-4">
                {
                    obj.map((data, index) => (
                        <TempCard key={index} time={data.day} icon={data.icon} temp={data.temp} />
                    ))
                }
                {/* <TempCard weather="cloud" time="6" />
                <TempCard weather="rainy" time="7" />
                <TempCard weather="thunderstorm" time="8" />
                <TempCard weather="snowing" time="9" />
                <TempCard weather="sunny" time="10" />
                <TempCard weather="air" time="11" /> */}
            </div>
        </div>
    )
}