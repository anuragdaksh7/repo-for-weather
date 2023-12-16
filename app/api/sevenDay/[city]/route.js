function objConstructor (_obj) {
    var obj = new Object();
    obj.day = _obj.date;
    obj.icon = _obj.day.condition.icon;
    obj.summary = _obj.day.condition.text;
    obj.max = _obj.day.maxtemp_c
    obj.min = _obj.day.mintemp_c
    return obj;
}

export async function GET(request, context) {
    const { params } = context;
    const city = params["city"];
    const response = await fetch("https://api.weatherapi.com/v1/forecast.json?key="+process.env.API_KEY+"&q="+city+"&days=7&aqi=no&alerts=no")
    const data = await response.json();
    var newObj = Object();
    newObj.days = data.forecast.forecastday;
    const days = newObj["days"]
    // console.log(days.length)
    var Ar = Array();
    for (let i = 0; i< days.length; i++) {
        Ar.push(objConstructor(days[i]));
    }
    return new Response(JSON.stringify({Ar}));
}