var apiKey= "f378bc500cb54543e663edad40c0f683";
var houston= "houston";
// Back ticks needed for interpolated data
var url= `https://api.openweathermap.org/data/2.5/onecall?lat=30.020630&lon=-95.424186&units=imperial&exclude=minutely,hourly,alerts&appid=${apiKey}`;
var current = document.getElementById("current");
var windDiv = document.getElementById("wind");
var humidityDiv = document.getElementById("humidity");


// fetch(url).then(res=>console.log(res));

async function getWeather() {
    var response = await axios.get(url);
    console.log(response.data);
    var currentTemp = response.data.current.temp;
    current.innerHTML = currentTemp;
    var wind = response.data.current.wind_speed;
    windDiv.innerHTML = wind;
    var humidity = response.data.current.humidity;
    console.log(humidity);
    humidityDiv.innerHTML = humidity;

}

getWeather();