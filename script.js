const API_KEY = "550e65ef0483583d74d1cd184d21dc45";
const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input = document.querySelector("input");

async function checkWeather(city) {
  showLoader();
  try {
    const response = await fetch(API_URL + city + "&appid=" + API_KEY);

    if (!response.ok) throw new Error(`HTTP помилка: ${response.status}`);
    const data = await response.json();

    document.querySelector(".weather").classList.remove("hidden");

    changeWeather(data);

    hideError();
  } catch (error) {
    document.querySelector(".weather").classList.add("hidden");
    showError();
    console.log(error);
  } finally {
    hideLoader();
  }
}

function showLoader() {
  const loader = document.createElement("p");
  loader.className = "loader";
  loader.textContent = "Loading...";
  document.querySelector(".search-box").after(loader);
}
function hideLoader() {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.remove();
  }
}

function showError() {
  document.querySelector(".eror").classList.add("show");
}
function hideError() {
  document.querySelector(".eror").classList.remove("show");
}

function changeWeather(data) {
  changeIcon(data);
  document.querySelector(".city").textContent = data.name;
  document.querySelector(".temperature").textContent =
    Math.round(data.main.temp) + "°";

  document.querySelector(".humidity").textContent = data.main.humidity + "%";
  document.querySelector(".wind-speed").textContent =
    Math.round(data.wind.speed) + " km/h";

  document.querySelector(".realfeel").textContent =
    Math.round(data.main.feels_like) + "°";
  document.querySelector(".pressure").textContent =
    data.main.pressure / 1000 + "bar";
}

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && input.value) {
    checkWeather(input.value.trim());
    input.value = "";
  }
});

function changeIcon(data) {
  const weatherIcon = document.querySelector(".weather-icon");
  switch (data.weather[0].main) {
    case "Clouds":
      weatherIcon.setAttribute("src", "img/Sun Cloud.png");
      weatherIcon.setAttribute("alt", "Sun Cloud");
      break;

    case "Clear":
      weatherIcon.setAttribute("src", "img/sun.png");
      weatherIcon.setAttribute("alt", "Sun");
      break;

    case "Snow":
      weatherIcon.setAttribute("src", "img/Snow Cloud.png");
      weatherIcon.setAttribute("alt", "Snow");
      break;

    case "Rain":
      weatherIcon.setAttribute("src", "img/Rain Cloud.png");
      weatherIcon.setAttribute("alt", "Rain");
      break;

    case "Drizzle":
      weatherIcon.setAttribute("src", "img/Rain Cloud.png");
      weatherIcon.setAttribute("alt", "Rain");
      break;

    case "Thunderstorm":
      weatherIcon.setAttribute("src", "img/Thunder Cloud.png");
      weatherIcon.setAttribute("alt", "Thunderstorm");
      break;

    default:
      weatherIcon.setAttribute("src", "img/Sun Cloud.png");
      weatherIcon.setAttribute("alt", "Sun Cloud");
      break;
  }
}
