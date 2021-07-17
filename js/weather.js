const API_KEY = "9783526af43328a05d8b7cd604bebcfc";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())    
        .then((data) => {
            const weatherContainer = document.querySelector("#weather span:nth-child(1)");
            const cityContainer = document.querySelector("#weather span:nth-child(2)");
            const cityTempContainer = document.querySelector("#weather span:nth-child(3)");
            weatherContainer.innerText = data.name;
            cityContainer.innerText = data.weather[0].main;
            cityTempContainer.innerText = data.main.temp+"°";
        });
}

function onGeoError(){
    alert("Can't find you");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);