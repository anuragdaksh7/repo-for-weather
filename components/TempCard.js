export default function TempCard(props){
    return(
        <div className="flex md:block justify-between items-center px-4">
            <h1 className=" text-center sm:text-left text-sm font-bold text-gray-400">{props.time}</h1>
            <div className="flex justify-center mt-1">
                {/* <p className="material-symbols-outlined flex items-center text-gray-300">{props.weather}</p> */}
                <img width={30} src={props.icon} alt="" />
            </div>
            <p className="text-xl font-bold text-gray-200 text-center mt-1">{props.temp}°</p>
        </div>
    )
}