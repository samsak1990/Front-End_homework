"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".wrapper");
  const inputSearch = document.querySelector("#userCountry");
  const btnSearch = document.querySelector("#search");
  const headerMain = document.querySelector("h1");
  const modal = document.querySelector(".modal");

  btnSearch.addEventListener("click", async () => {
    srartExecutionProcedure();
  });

  inputSearch.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      srartExecutionProcedure();
    }
  });

  async function srartExecutionProcedure() {
    const inputSearchVal = document.querySelector("#userCountry").value;
    if (inputSearchVal) {
      const req = await getInfoAboutCountry(inputSearchVal);
      if (typeof req === "string") {
        modal.classList.add("active");
        setTimeout(() => {
          modal.classList.remove("active");
        }, 3000);
      } else {
        showInfoAboutCountry(req[0]);
      }
    } else {
      modal.innerText = "Вы ничего не ввели!";
      modal.classList.add("active");
      setTimeout(() => {
        modal.classList.remove("active");
      }, 3000);
    }
    inputSearch.blur();
    inputSearch.value = "";
  }

  function getInfoAboutCountry(country) {
    return fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка сервера");
        }
        return response.json();
      })
      .then((data) => data)
      .catch((error) => error.toString());
  }

  function showInfoAboutCountry(obj) {
    const contentBox = document.querySelector(".content");
    wrapper.classList.add("toTop_wrap");
    headerMain.classList.add("toTop_h1");
    inputSearch.classList.add("toTop_input");
    contentBox.style.display = "block";
    contentBox.innerHTML = `
    <div class='boxL'>  
        <img src="${obj.flags.svg}" alt="Флаг" class="content__flag"/>
        <div>
            <h2 class="content__name">Название страны: ${obj.name.common}</h2>
            <h3 class="content__region">Расположена в регионе: ${
              obj.region
            }</h3>
        </div>
    </div>
    <div class='boxR'>
      <p class="content__population">Численность населения: ${
        obj.population
      }</p>
      <p class="content__languages">Национальные языки: ${Object.values(
        obj.languages
      )}</p>
      <p class="content__currencies">Национальная валюта: ${
        Object.values(obj.currencies)[0].name
      } (${Object.values(obj.currencies)[0].symbol})</p>
    </div>   
      `;
  }
});
