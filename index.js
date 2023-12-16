const apiKey = "6a42bc84d5f45fc6329aa0826640b7ec";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
    }
    else{
        document.querySelector(".error").style.display ="none";
    
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".weather-temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    // icon change
    if(data.weather[0].main =="clouds"){
        weatherIcon.src ="/resources/clouds.png"
    }
    else if(data.weather[0].main =="Clear"){
        weatherIcon.src = "/resources/Clear.png"
    }
    else if(data.weather[0].main =="Rain"){
        weatherIcon.src = "/resources/rain.png"
    }
    else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src = "/resources/drizzle.png"
    }
    else if(data.weather[0].main =="Mist"){
        weatherIcon.src = "/resources/mist.png"
    }
}}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)
})
