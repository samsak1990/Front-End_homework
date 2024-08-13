//! Папка assets в проектах используется для хранения статических ресурсов, которые необходимы для работы приложения или сайта, изображения, шрифты и т.п. Папки js, css и undex.html должны быть на одном уровне с assets
"use strict";

document.addEventListener("DOMContentLoaded", async function () {
  const searchBox = document.querySelector(".box-input");
  const searchInput = document.querySelector("#input");
  const imgaWeather = document.querySelector(".box-info__image-box");
  const viewCity = document.querySelector(".image-box__city");
  const viewTemp = document.querySelector(".image-box__temp span");
  const minTemp = document.querySelector(".min span");
  const maxTemp = document.querySelector(".max span");
  const humidity = document.querySelector(".humidity span");
  const wind = document.querySelector(".wind span");

  const resultCountry = await getGeolocation();

  searchInput.addEventListener("keydown", async (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && value.trim()) {
      if (searchBox.classList.contains("error-input")) {
        searchBox.classList.remove("error-input");
      }
      searchInput.blur();
      displayData(value);
      searchInput.value = "";
    }
  });

  function sendRequestToServer(value) {
    return fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=09bba95c8ea54c5cb0393715241208&q=${value}&days=1&aqi=no&alerts=no`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Ошибка запроса.");
        }
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err.toString();
      });
  }

  function getGeolocation() {
    return fetch("https://ipinfo.io/json?token=9181ed5b893027")
      .then((response) => response.json())
      .then((jsonResponse) => {
        return jsonResponse.city;
      });
  }

  async function displayData(city) {
    const resultWeather = await sendRequestToServer(city);
    if (resultWeather && typeof resultWeather === "object") {
      imgaWeather.classList.remove("cold", "hot");
      if (resultWeather.current.temp_c < 10) {
        imgaWeather.classList.add("cold");
      } else {
        imgaWeather.classList.add("hot");
      }
      viewCity.innerText = resultWeather.location.name;
      viewTemp.innerText = Math.floor(resultWeather.current.temp_c);
      minTemp.innerText = Math.floor(
        resultWeather.forecast.forecastday[0].day.mintemp_c
      );
      maxTemp.innerText = Math.floor(
        resultWeather.forecast.forecastday[0].day.maxtemp_c
      );
      humidity.innerText = Math.floor(resultWeather.current.humidity);
      wind.innerHTML = Math.floor(resultWeather.current.wind_kph);
    } else {
      searchBox.classList.add("error-input");
    }
  }

  displayData(resultCountry);
});
