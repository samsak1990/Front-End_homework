document.addEventListener("DOMContentLoaded", () => {
  /*Step 1*/
  const stepsBtn = document.querySelectorAll(".calculator-btn");
  const steps = document.querySelectorAll(".step");
  const whoGender = document.querySelectorAll(".calculator-gender__item");
  const form = document.getElementById("calculator-form");

  stepsBtn.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      if (index === stepsBtn.length - 1) {
      } else {
        validateStep(index);
      }
    });
  });

  form.addEventListener("change", () => {
    toggleActiveClass();
  });

  function validateStep(stepIndex) {
    if (stepIndex === 0) {
      const isGenderSelect = document.querySelector(
        'input[name="gender"]:checked'
      );
      if (!isGenderSelect) {
        alert("Вы не выбрали Ваш пол.");
      } else {
        goToNextStep(stepIndex);
      }
    }
  }

  function goToNextStep(index) {
    steps[index].style.display = "none";
    steps[index + 1].style.display = "block";
  }

  function toggleActiveClass(selector) {
    const elements = document.querySelectorAll(`input[name='gender']`);
    elements.forEach((elem) => {
      elem.parentElement.classList.remove("active");
      if (elem.checked) {
        elem.parentElement.classList.add("active");
      }
    });
  }
});

/*ДЗ:

1. Сделать красивый вывод об ошибке: ничего не выбрано.
2. Универсальная валидация последней формы

*/
