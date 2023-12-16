import SearchBar from "./SearchBar"
import CityCard from "./CityCard"
import TodayCard from "./TodayCard"
import AirCondition from "./AirCondition"

export default function MainComp() {
    return (
        <div className="sm:w-2/3 mx-2">
            <SearchBar />
            <CityCard city="Delhi" temp="11" icon="" />
            <TodayCard />
            <AirCondition />
        </div>
    )
}