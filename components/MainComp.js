"use client"
import SearchBar from "./SearchBar"
import CityCard from "./CityCard"
import TodayCard from "./TodayCard"
import AirCondition from "./AirCondition"
import { useState } from "react"



export default function MainComp(props) {
    const [city,setCity] = useState(props.cityy);
    const [pageData,setPageData] = useState({
        "newObj": {
            "location": "New Delhi",
            "temp": 11,
            "feels": 10,
            "wind": 0.2,
            "uv": 3,
            "icon": "https://cdn.weatherapi.com/weather/64x64/night/113.png"
        }
    })
    const UpdatePage = async (city) => {
        const response = await fetch("/api/cityWeather/"+city);
        const data = await response.json();
        // console.log(data)
        setPageData(data);
        // console.log(pageData)
    }

    return (
        <div className="sm:w-2/3 mx-2">
            <div>
                <input className="w-full bg-[#212c3d] h-10 rounded-lg ps-4 outline-none text-md font-semibold text-gray-300" type="text" placeholder="Search for cities" value={city} onChange={(e)=>{
                    setCity(e.target.value);
                    
                    // console.log(props.cityy);
                }}
                onKeyDown={(e) => {
                    if(e.key == "Enter"){
                        props.setCityy(e.target.value);
                        UpdatePage(city);
                    }
                }} />
            </div>
            <CityCard city={pageData.newObj.location} temp={pageData.newObj.temp} icon={pageData.newObj.icon} />
            <TodayCard cityy={props.cityy} />
            <AirCondition feels={pageData.newObj.feels} wind={pageData.newObj.wind} uv={pageData.newObj.uv} />
        </div>
    )
}