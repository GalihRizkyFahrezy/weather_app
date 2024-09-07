const apiKey = "3dd07ef5f6ce91162a960afaff26fa66";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector("weather-icon");



async function checkWeateher(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    document.querySelector(".weather-icon").src = "images/"+data.weather[0].main+".png";
}
checkWeateher("pamulang");


searchBtn.addEventListener("click", ()=>{
    checkWeateher(searchBox.value);
})
