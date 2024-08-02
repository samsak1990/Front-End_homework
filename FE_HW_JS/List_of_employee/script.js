"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("#editable-table tbody");
  const btnAddRow = document.querySelector(".add-row-button");

  //Add row
  function addNewRow() {
    tableBody.innerHTML += `<tr>
          <td class="editable" data-type="text"></td>
          <td class="editable" data-type="number"></td>
          <td class="editable" data-type="text"></td>
        </tr>`;
  }

  function whereClick(event) {
    const elementClick = event.target.localName;
    switch (elementClick) {
      case "button":
        addNewRow();
        break;
      case "td":
        chooseCellForChanges(event);
        break;
      default:
        // console.log("Больше нового ничего не придумали:)");
        break;
    }
  }

  function chooseCellForChanges(event) {
    const clickedTd = event.target;
    const firstValue = clickedTd.textContent;
    const typeInput = clickedTd.dataset.type;
    clickedTd.classList.add("editing");
    clickedTd.innerHTML = `<input type=${typeInput} min="18" max="65">`;

    const inputTD = clickedTd.querySelector("input"); // объявляю здеть, т.к. до этого момента input не существует

    inputTD.value = firstValue;
    inputTD.focus();

    inputTD.addEventListener("blur", makeChanges);
    inputTD.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        makeChanges();
      }
    });

    //не придумал как сделать без вложенной функции, многовато аргументов нужно передавать при вызове в моем варианте
    function makeChanges() {
      const secondValue = inputTD.value;
      const validateRusult = validateInput(typeInput, secondValue);
      if (validateRusult) {
        clickedTd.textContent = firstValue;
        clickedTd.classList.add("error-tooltip");
        setTimeout(() => {
          clickedTd.classList.remove("error-tooltip");
        }, 2000);
      } else {
        clickedTd.textContent = secondValue;
        clickedTd.classList.remove("editing");
        document.addEventListener("click", whereClick);
      }
      clickedTd.classList.remove("editing");
    }
  }

  function validateInput(type, value) {
    if (
      (type === "text" && (/\d/.test(value) || value == "")) ||
      (type === "number" && (value <= 18 || value > 65))
    ) {
      return true;
    } else {
      return false;
    }
  }

  document.addEventListener("click", whereClick);
});
