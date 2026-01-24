const apiKey = "ad03dec0d8b40837ad6b8c932ce7d39d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const weathericon=document.querySelector(".weather-icon");
let searchbtn= document.querySelector(".search-cont");
async function chechWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data, data.name,data.main.temp,data.main.humidity,data.wind.speed);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main=="Clouds"){
        weathericon.src="Assets/clouds.png";
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="Assets/rain.png";
    }
    else if(data.weather[0].main=="humidity"){
        weathericon.src="Assets/humidity.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src="Assets/drizzle.png";
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src="Assets/clear.png";
    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src="Assets/mist.png";
    }
    else if(data.weather[0].main=="Snow"){
        weathericon.src="Assets/snow.png";
    } 
    else{
        weathericon.src="Assets/wind.png";
    }

}
searchbtn.addEventListener('click',()=>{
    
    chechWeather(searchbox.value);
})