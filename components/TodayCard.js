import TempCard from "./TempCard";

export default function TodayCard(props) {
    return (
        <div className="bg-[#212c3d] px-2 sm:px-6 mt-8 py-6 rounded-lg">
            <h1 className="text-gray-400 text-sm font-semibold">TODAY'S FORECAST</h1>
            <div className=" sm:flex justify-around mt-4">
                <TempCard weather="cloud" time = "6"/>
                <TempCard weather="rainy" time = "7"/>
                <TempCard weather="thunderstorm" time = "8"/>
                <TempCard weather="snowing" time = "9"/>
                <TempCard weather="sunny" time = "10"/>
                <TempCard weather="air" time = "11"/>
            </div>
        </div>
    )
}