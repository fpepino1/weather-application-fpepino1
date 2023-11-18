function refreshWeather(response) {
  let currentTemperatureElement = document.querySelector(
    "#current-temperature-value"
  );
  let currentTemperature = response.data.temperature.current;
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city.toUpperCase();
  currentTemperatureElement.innerHTML = Math.round(currentTemperature);

  let currentDay = document.querySelector("#current-day");
  let current;
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

// let now = new Date();

// let hour = now.getHours();
// let minute = now.getMinutes();

// let days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// let day = days[now.getDay()];

// let months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "Decemeber",
// ];

// let month = months[now.getMonth()];
// let fullYear = now.getFullYear();

//search - provide an apiurl
//change the temperature value unit and visual
//change the city when you search
//change the times
