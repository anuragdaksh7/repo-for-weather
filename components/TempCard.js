export default function TempCard(props){
    return(
        <div className="">
            <h1 className=" text-center sm:text-left text-sm font-bold text-gray-400">{props.time}:00 {(props.time<12)?"AM":"PM"}</h1>
            <div className="flex justify-center mt-2">
                <p className="material-symbols-outlined flex items-center text-gray-300">{props.weather}</p>
            </div>
            <p className="text-xl font-bold text-gray-200 text-center mt-2">25°</p>
        </div>
    )
}