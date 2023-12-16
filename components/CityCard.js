export default function CityCard(props){
    return (
        <div className="flex justify-between px-8 text-white mt-8 items-center">
            <div className="">
                <h1 className="text-3xl font-bold">{props.city}</h1>
                <h1 className="mt-16 text-6xl font-bold">{props.temp}°</h1>
            </div>
            <div className="">
            <span className="material-symbols-outlined pe-8 select-none text-yellow-400">
                sunny
            </span>
            </div>
        </div>
    )
}