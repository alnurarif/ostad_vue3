let location_input = document.getElementById('locationInput');
let location_form = document.getElementById('search_location_form');
let weather_error_text = document.getElementById('weather_error_text');
let weather_information_to_show = document.getElementById('weather_information_to_show');
let temp = document.getElementById('temp');
let temp_max = document.getElementById('temp_max');
let temp_min = document.getElementById('temp_min');
let feels_like = document.getElementById('feels_like');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let sea_level = document.getElementById('sea_level');
let name = document.getElementById('name');
let sunrise = document.getElementById('sunrise');
let sunset = document.getElementById('sunset');
let timezone = document.getElementById('timezone');
let visibility = document.getElementById('visibility');
let lon = document.getElementById('lon');
let lat = document.getElementById('lat');
let deg = document.getElementById('deg');
let gust = document.getElementById('gust');
let speed = document.getElementById('speed');

let locationApi="https://geocode.maps.co/search";
let weatherApiKey = "2e7af7dfdde06cec74589354dbe9588c";
let weatherApi="https://api.openweathermap.org/data/2.5/weather";

weather_error_text.style.display = 'none';
weather_information_to_show.style.display = "none";


location_form.addEventListener('submit',(e) => {
    e.preventDefault();
    weather_error_text.style.display = 'none';
    weather_information_to_show.style.display = "none";
    getWeatherData(location_input.value);
});

const getWeatherData = async (location) => {

    axios({
        method: 'get',
        url: `${weatherApi}?q=${location}&appid=${weatherApiKey}`,
    })
    .then((response) => {
        let data = response.data;
        temp.innerText = `${(data.main.temp - 273.15).toFixed(2)} C`;
        temp_max.innerText = `${(data.main.temp_max - 273.15).toFixed(2)} C`;
        temp_min.innerText = `${(data.main.temp_min - 273.15).toFixed(2)} C`;
        feels_like.innerText = `${(data.main.feels_like - 273.15).toFixed(2)} C`;
        humidity.innerText = `${(data.main.humidity).toFixed(2)} %`;
        pressure.innerText = data.main.pressure;
        name.innerText = data.name;
        sunrise.innerText = data.sys.sunrise;
        sunset.innerText = data.sys.sunset;
        timezone.innerText = data.timezone;
        visibility.innerText = data.visibility;
        lon.innerText = data.coord.lon;
        lat.innerText = data.coord.lat;
        deg.innerText = data.wind.deg;
        speed.innerText = data.wind.speed;
        weather_information_to_show.style.display = "block";
    })
    .catch((err) => {
        weather_error_text.innerText = err.response.data.message.toUpperCase();
        weather_error_text.style.display = "block";
    });
        
}
