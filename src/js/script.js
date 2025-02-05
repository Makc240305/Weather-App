import sunCloud from "../img/Sun Cloud.png";
import sun from "../img/Sun.png";
import snowCloud from "../img/Snow Cloud.png";
import rainCloud from "../img/Rain Cloud.png";
import thunderCloud from "../img/Thunder Cloud.png";



const API_KEY = "550e65ef0483583d74d1cd184d21dc45";
const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input = document.querySelector("input");
const iconGeo = document.querySelector(".geo-icon");

async function checkWeather(city) {
  showLoader();
  try {
    const response = await fetch(API_URL + city + "&appid=" + API_KEY);

    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    const data = await response.json();

    document.querySelector(".weather").classList.remove("hidden");
    changeWeather(data);
    hideError();
  } catch (error) {
    document.querySelector(".weather").classList.add("hidden");
    showError("Write the correct name of the city");
    console.log(error);
  } finally {
    hideLoader();
  }
}

function showLoader() {
  document.querySelector(".loader").classList.remove("hidden");
}
function hideLoader() {
  document.querySelector(".loader").classList.add("hidden");
}

function showError(message = "Please try again") {
  const errorElement = document.querySelector(".error");
  errorElement.textContent = message;
  errorElement.classList.add("show");
}
function hideError() {
  document.querySelector(".error").classList.remove("show");
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
  }
});

iconGeo.addEventListener("click", () => {
  if (input.value) {
    checkWeather(input.value.trim());
  }
});

const weatherIcons = {
  Clouds: { src: sunCloud, alt: "Sun Cloud" },
  Clear: { src: sun, alt: "Sun" },
  Snow: { src: snowCloud, alt: "Snow" },
  Rain: { src: rainCloud, alt: "Rain" },
  Drizzle: { src: rainCloud, alt: "Rain" },
  Thunderstorm: { src: thunderCloud, alt: "Thunderstorm" }
};

function changeIcon(data) {
  const weatherIcon = document.querySelector(".weather-icon");
  const weatherCondition = data.weather[0].main;
  const icon = weatherIcons[weatherCondition] || weatherIcons["Clouds"]; 

  weatherIcon.setAttribute("src", icon.src);
  weatherIcon.setAttribute("alt", icon.alt);
}