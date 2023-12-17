"use client"
import { useEffect, useState } from "react"

function DailyCard(props) {
    return (
        <div className="flex justify-between items-center text-gray-400 py-3">
            <h1>{props.day}</h1>
            <div className="flex items-center">
                {/* <p className="text-gray-200 material-symbols-outlined mr-3">{props.icon}</p> */}
                <img width={48} src={props.icon} alt="" />
                <h3 className="text-gray-300 text-sm">{props.text}</h3>
            </div>
            <p className="">{props.maxT}/ {props.minT}</p>

        </div>
    )
}



export default function WeeklyComp(props) {
    const [obj, setObj] = useState([]);
    const handleUpdate = async (city) => {
        const response = await fetch("/api/sevenDay/" + city);
        const data = await response.json();
        // console.log(data);
        // const {des} = data;
        setObj(data.Ar);

    }

    useEffect(() => {
        // Perform actions when city changes
        // console.log('City changed:', props.cityy);
        try {
            handleUpdate(props.cityy);
        } catch (e) {
            console.log()
        }

    }, [props.cityy]);

    return (
        <div className="w-1/3">
            <div className="bg-[#212c3d] px-2 sm:px-8 mt-16 mx-2 py-6 rounded-lg">
                <h1 className="text-gray-400 text-sm font-semibold mb-8 mt-3">
                    7-DAY FORECAST
                </h1>
                {
                    obj.map((data, index) => (
                        <DailyCard day={(index == 0) ? "Today" : data.day} key={index} maxT={data.max} minT={data.min} icon={data.icon} text={data.summary} />
                    ))
                }
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