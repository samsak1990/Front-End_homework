"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const searchCity = document.querySelector("#input");
  const imgaWeather = document.querySelector(".box-info__image-box");
  const viewCity = document.querySelector(".image-box__city");
  const viewTemp = document.querySelector(".image-box__temp span");
  const minTemp = document.querySelector(".min span");
  const maxTemp = document.querySelector(".max span");
  const humidity = document.querySelector(".humidity span");
  const wind = document.querySelector(".wind span");

  searchCity.addEventListener("keydown", async (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && value.trim()) {
      const result = await sendRequestToServer(value);
      if (result) {
        imgaWeather.classList.remove("cold");
        imgaWeather.classList.remove("hot");
        if (result.current.temp_c < 10) {
          imgaWeather.classList.add("cold");
        } else {
          imgaWeather.classList.add("hot");
        }
        viewCity.innerText = result.location.name;
        viewTemp.innerText = Math.floor(result.current.temp_c);
        minTemp.innerText = Math.floor(
          result.current.temp_c - 5
        ); /*Сервис погоды у меня перестал открываться, поэтому не смог поискать как получить такие данные, и написал так, примерно */
        maxTemp.innerText = Math.floor(result.current.temp_c);
        humidity.innerText = Math.floor(result.current.humidity);
        wind.innerHTML = Math.floor(result.current.wind_kph);
      } else {
        alert("Введены некорректные данные для посика");
      }
      searchCity.value = "";
    }
  });

  function sendRequestToServer(value) {
    return fetch(
      `http://api.weatherapi.com/v1/current.json?key=09bba95c8ea54c5cb0393715241208&q=${value}&aqi=no`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
