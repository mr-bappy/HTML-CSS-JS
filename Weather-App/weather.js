let cityInput = 'bhiwandi';

// search functionality
const searchData = () => {
    cityInput = document.querySelector('.city-value').value;
    showData();
}

const showData = async () => {
    if(cityInput === ""){
        return document.querySelector(".error").textContent = '*Please enter a city*';
    } 

    const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=745921c20fa0677949a3f0b696ffa933`;

    try{
        const res = await fetch(weatherAPI);
        const data = await res.json();
        console.log(data);

        const {name, sys, main, weather, wind} = data;

        const locale = new Intl.DisplayNames(['en'], { type: 'region'});
        console.log(locale.of(sys.country));

        document.querySelector('.city-name').textContent = `${name}, ${locale.of(sys.country)}`;
        document.querySelector('.city-weather').textContent = weather[0].main;
        document.querySelector('.image-weather').src =`https://openweathermap.org/img/wn/${ weather[0].icon}@4x.png`;
        document.querySelector('.temp').innerHTML = `${Math.floor((main.temp - 273.15))}\u00B0 C`;
        document.querySelector('.humidity').innerHTML = `${main.humidity}%`;
        document.querySelector('.pressure').innerHTML = `${main.pressure} hPa`;
        document.querySelector('.wind-speed').innerHTML = `${wind.speed} m/s`;
    }catch(err){
        return document.querySelector(".error").textContent = '*Please enter a valid city*';
    }

    
}
showData();