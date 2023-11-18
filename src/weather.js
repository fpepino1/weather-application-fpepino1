function refreshWeather(response) {
  let currentTemperatureElement = document.querySelector(
    "#current-temperature-value"
  );
  let currentTemperature = response.data.temperature.current;
  let currentCityElement = document.querySelector("#current-city");
  currentCityElement.innerHTML = response.data.city.toUpperCase();
  currentTemperatureElement.innerHTML = Math.round(currentTemperature);

  let currentHumidityElement = document.querySelector("#current-humidity");
  currentHumidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  let currentWindElement = document.querySelector("#current-wind");
  currentWindElement.innerHTML = `${response.data.wind.speed} km/h`;
  let currentConditionElement = document.querySelector("#current-condition");
  currentConditionElement.innerHTML = response.data.condition.description;

  let currentDateElement = document.querySelector("#current-date");
  let date = new Date(response.data.time * 1000);

  let months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  let month = months[date.getMonth()];
  let noDate = date.getDate();
  let fullYear = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  console.log(response);
  currentDateElement.innerHTML = `${month} ${noDate} ${fullYear}`;
  let currentDayTimeElement = document.querySelector("#current-day-time");
  currentDayTimeElement.innerHTML = `${day} ${hour}:${minute}`;

}

function searchCity(city) {
  let apiKey = "010at9ca97fd6359640c0357507fb1co";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchCityInput = document.querySelector("#search-city-input");
  searchCity(searchCityInput.value);
}

let searchCityFormElement = document.querySelector("#search-city-form");
searchCityFormElement.addEventListener("submit", handleSearchSubmit);
