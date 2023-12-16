import TempCard from "./TempCard"

function SmallCard(props){
    return (
        <div className="flex">
            <span className="material-symbols-outlined text-gray-400 mr-2">
                {props.icon}
            </span>
            <div>
                <h1 className="text-gray-400 font-semibold text-sm">{props.text}</h1>
                <h1 className="mt-1 text-gray-300 font-bold text-xl">{props.val}</h1>
            </div>
        </div>
    )
}

export default function AirCondition (props) {
    return (
        <div className="bg-[#212c3d] px-2 sm:px-6 mt-8 py-6 rounded-lg">

            <h1 className="text-gray-400 text-sm font-semibold">AIR CONDITIONS</h1>


            <div className="flex justify-between mt-4">
                <div className="w-1/2">
                    <SmallCard text="Real Feel" val="10°" icon="thermometer" />
                    <br />
                    <SmallCard text="Chance of rain" val="0%" icon="water_drop" />
                </div>
                <div className="w-1/2">
                    <SmallCard text="Wind" val="0.2 km/h" icon="air" />
                    <br />
                    <SmallCard text="UV Index" val="3" icon="brightness_high" />
                </div>
                {/* <TempCard weather="cloud" time = "6"/>
                <TempCard weather="rainy" time = "7"/>
                <TempCard weather="thunderstorm" time = "8"/>
                <TempCard weather="snowing" time = "9"/>
                <TempCard weather="sunny" time = "10"/>
                <TempCard weather="air" time = "11"/> */}
            </div>
        </div>
    )
}