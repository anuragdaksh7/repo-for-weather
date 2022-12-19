let weather = {
			apiKey: "enter ur api key",
			fetchWeather: function (city){
				fetch('https://api.openweathermap.org/data/2.5/weather?appid='+apiKey+'&q='+city)
				.then((response) => response.json())
				.then((data) => this.displayWeather(data));
			},
			displayWeather: function(data) {
				//console.log(data);
				var tmp = data['main']['temp']-273.16;
				tmp = Math.round(tmp);
				document.querySelector(".tmp").innerHTML = tmp+'°';
				var tmpMin = data['main']['temp_min']-273.16;
				var tmpMax = data['main']['temp_max']-273.16;
				tmpMin = Math.round(tmpMin);
				tmpMax = Math.round(tmpMax);
				document.querySelector("#minmax").innerHTML = tmpMax+'°/'+tmpMin+'°';
				var imgUrl = data['weather'][0]["icon"];
				document.querySelector(".imgg").src = 'https://openweathermap.org/img/wn/'+imgUrl+'@2x.png';
				document.querySelector("#gen").innerHTML = data['weather'][0]['main'];
				document.querySelector("#humidd").innerHTML = data['main']['humidity']+'%';
				document.querySelector("#visibilityy").innerHTML = Math.round(data['visibility']/1000)+ ' km';
				document.querySelector("#windspeed_").innerHTML = data['wind']['speed']+" km/hr "+direction(data['wind']['deg']);
				var dt = new Date();
				document.querySelector("#dt").innerHTML = dayFronNum(dt.getDay())+", "+ dt.getHours()+":"+dt.getMinutes();
				var dt = new Date(0);
				dt.setUTCSeconds(data.sys.sunrise);
				document.querySelector("#textrise").innerHTML = dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();
				var dt = new Date(0);
				dt.setUTCSeconds(data.sys.sunset);
				document.querySelector("#textset").innerHTML = dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();
				document.querySelector("#city").innerHTML = data.name;





			}


	}

	function update() {
		var city = document.getElementById("enter").value;
		weather.fetchWeather(city);
		//console.log(city);
	}


function dayFronNum(n)
{
	z = "Sun";
	switch (n)
	{
		case 1:
			z = "Mon";break;
		case 2:
			z = "Tue";break;
		case 3:
			z = "Wed";break;
		case 4:
			z = "Thur";break;
		case 5:
			z = "Fri";break;
		case 6:
			z = "Sat";break;
	}
	return z;
}



	function direction(deg) {
		const a = 11.25;
		var z = "N"
		//console.log(deg);

		if (deg >= a && deg < 3*a){
			z = "NNE";
		}

		if (deg >= 3*a && deg < 5*a){
			z = "NE";
		}

		if (deg >= 5*a && deg < 7*a){
			z = "ENE";
		}
		if (deg >= 7*a && deg < 9*a){
			z = "E";
		}
		if (deg >= 9*a && deg < 11*a){
			z = "ESE";
		}
		if (deg >= 11*a && deg < 13*a){
			z = "SE";
		}
		if (deg >= 13*a && deg < 15*a){
			z = "SSE";
		}
		if (deg >= 15*a && deg < 17*a){
			z = "S";
		}
		if (deg >= 17*a && deg < 19*a){
			z = "SSW";
		}
		if (deg >= 19*a && deg < 21*a){
			z = "SW";
		}
		if (deg >= 21*a && deg < 23*a){
			z = "WSW";
		}
		if (deg >= 33*a && deg < 25*a){
			z = "W";
		}
		if (deg >= 25*a && deg < 27*a){
			z = "WNW";
		}
		if (deg >= 27*a && deg < 29*a){
			z = "NW";
		}
		if (deg >= 29*a && deg < 31*a){
			z = "NNW";
		}

		console.log(deg);
		return z;

	}
