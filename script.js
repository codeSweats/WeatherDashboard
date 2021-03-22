var apiKey= "f378bc500cb54543e663edad40c0f683";
var houston= "houston";
var url= `https://api.openweathermap.org/data/2.5/weather?q=${houston}&appid=${apiKey}&units=imperial`;
var current = document.getElementById("current");
var windDiv = document.getElementById("wind");
var humidityDiv = document.getElementById("humidity");


// fetch(url).then(res=>console.log(res));

// fetch(url).then(function(response){
//     return response.json();
// })

async function getWeather() {
    var response = await axios.get(url);
    console.log(response.data);
    var currentTemp = response.data.main.temp;
    current.innerHTML = currentTemp;
    var wind = response.data.wind.speed;
    windDiv.innerHTML = wind;
    var humidity = response.data.main.humidity;
    console.log(humidity);
    humidityDiv.innerHTML = humidity;

}

getWeather();