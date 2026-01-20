const apikey ="ad03dec0d8b40837ad6b8c932ce7d39d";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");  

async function checkweather(city){
    const response=await fetch(apiurl+city+ `&appid=${apikey}`);
    
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }else{
    
    var data= await response.json();
    


    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp") .innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    if(data.weather[0].main="Clouds"){
        weathericon.src="images/clouds.png";
    }

    if(data.weather[0].main="clouds"){
        weathericon.src="images/clouds.png";
    }

    if(data.weather[0].main="clear"){
        weathericon.src="images/clear.png";
    }

    if(data.weather[0].main="Rain"){
        weathericon.src="images/Rain.png";
    }

    if(data.weather[0].main="Drizzle"){
        weathericon.src="images/Drizzle.png";
    }

    if(data.weather[0].main="Mist"){
        weathericon.src="images/Mist.png";
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
}

}



searchBtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})
checkweather("pune");