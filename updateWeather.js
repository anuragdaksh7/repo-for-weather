
apiKey = require("./key.js");

// async function fetchWeather(city,apiKey){
fetchWeather = async (city, apiKeyy = apiKey) => {
    r = await fetch('https://api.openweathermap.org/data/2.5/weather?appid='+apiKey+'&q='+city)
    .then((response) => response.json())
    .then((data) =>  (data));
    // console.log(r);
    return r;
}

module.exports = fetchWeather;