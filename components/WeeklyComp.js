
function DailyCard(props){
    return (
        <div className="flex justify-between text-gray-400 py-6">
            <h1>Today</h1>
            <div className="flex ">
                <p className="text-gray-200 material-symbols-outlined mr-3">{props.icon}</p>
                <h3 className="text-gray-300">{props.text}</h3>
            </div>
            <p className="">{props.maxT}/ {props.minT}</p>

        </div>
    )
}

export default function WeeklyComp () {
    return (
        <div className="w-1/3">
            <div className="bg-[#212c3d] px-2 sm:px-8 mt-16 mx-2 py-6 rounded-lg">
                <h1 className="text-gray-400 text-sm font-semibold mb-8 mt-3">
                    7-DAY FORECAST
                </h1>
                <DailyCard maxT="12" minT="9" icon="sunny" text="sunny" />
                <DailyCard maxT="12" minT="9" icon="rainy" text="rainy" />
                <DailyCard maxT="12" minT="9" icon="cloudy" text="cloudy" />
                <DailyCard maxT="12" minT="9" icon="storm" text="storm" />
                <DailyCard maxT="12" minT="9" icon="air" text="air" />
                <DailyCard maxT="12" minT="9" icon="sunny" text="sunny" />
                <DailyCard maxT="12" minT="9" icon="sunny" text="sunny" />
            </div>
        </div>
    )
}