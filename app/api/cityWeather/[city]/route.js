export async function GET(request, context) {
    const { params } = context;
    const city = params["city"];
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key="+process.env.API_KEY+"&q="+city)
    const data = await response.json();
    var newObj = Object();
    newObj.location = data.location.name;
    newObj.temp = data.current.temp_c;
    newObj.feels = data.current.feelslike_c
    newObj.wind = data.current.wind_kph
    newObj.uv = data.current.uv
    newObj.icon = data.current.condition.icon;
    
    return new Response(JSON.stringify({newObj}));
}