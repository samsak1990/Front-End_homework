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

  // function whereClick(event) {
  //   const elementClick = event.target.localName;
  //   switch (elementClick) {
  //     case "button":
  //       addNewRow();
  //       break;
  //     case "td":
  //       chooseCellForChanges(event);
  //       break;
  //     default:
  //       // console.log("Больше нового ничего не придумали:)");
  //       break;
  //   }
  // }

  function chooseCellForChanges(event) {
    const initialValue = event.target;
    //! более правильно будет назвать переменную initialValue
    const firstValue = initialValue.textContent;
    const typeInput = initialValue.dataset.type;
    initialValue.classList.add("editing");
    initialValue.innerHTML = `<input type=${typeInput} min="18" max="65">`;

    const inputTD = initialValue.querySelector("input"); // объявляю здеть, т.к. до этого момента input не существует

    inputTD.value = firstValue;
    inputTD.focus();

    inputTD.addEventListener("blur", makeChanges);
    inputTD.addEventListener("keydown", (e) =>
      e.key === "Enter" ? makeChanges() : false
    );

    //не придумал как сделать без вложенной функции, многовато аргументов нужно передавать при вызове в моем варианте
    //! можно оставить и так, либо передать в функцию объект со всеми нужными аргументами
    function makeChanges() {
      const secondValue = inputTD.value;
      const validateRusult = validateInput(typeInput, secondValue);
      if (validateRusult) {
        initialValue.textContent = firstValue;
        initialValue.classList.add("error-tooltip");
        setTimeout(() => {
          initialValue.classList.remove("error-tooltip");
        }, 2000);
      } else {
        initialValue.textContent = secondValue;
        //! если  здесь удаляешь класс, то вместо inputTD.focus() нужно было делать classList.add
        // initialValue.classList.remove("editing");

        //! здесь не нужно повторно добавлять обработчик событий — document будет отслеживать клики до тех пор, пока не будет использован removeEventListener
        // document.addEventListener("click", whereClick);
      }
      //! поскольку это действие необходимо выполнять в обоих случаях, его можно вынести за пределы ветви else и таким образом убрать дублирование
      initialValue.classList.remove("editing");
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

  //! лучше сделать следующим образом, названить обработчик события на таблицы и на кнопку btnAddRow
  // document.addEventListener("click", whereClick);
  tableBody.addEventListener("click", chooseCellForChanges);
  btnAddRow.addEventListener("click", addNewRow);
});
