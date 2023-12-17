function objConstructor (_obj) {
    let obj = new Object();
    obj.day = _obj.time.split(" ")[1];
    obj.icon = _obj.condition.icon;
    obj.temp = _obj.temp_c
    return obj;
}

export async function GET(request, context) {
    const { params } = context;
    const city = params["city"];
    const response = await fetch("https://api.weatherapi.com/v1/forecast.json?key="+process.env.API_KEY+"&q="+city+"&days=1&aqi=no&alerts=no")
    const data = await response.json();
    const d = data.forecast.forecastday[0].hour;
    let arr = Array();
    for (let i = 0; i < d.length; i++) {
        (i%4 == 2)?arr.push(d[i]):"";
    }
    let newAr = Array();
    for (let i = 0; i < arr.length; i++) {
        newAr.push(objConstructor(arr[i]));
    }
    return new Response(JSON.stringify({newAr}));
}