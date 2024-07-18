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

  form.addEventListener("change", (e) => {
    toggleActiveClass(e.target.name);
  });

  function validateStep(stepIndex) {
    switch (stepIndex) {
      case 0:
        nameStep = "gender";
        break;
      case 1:
        nameStep = "activity";
        break;
      default:
        break;
    }
    const isRadioSelect = document.querySelector(
      `input[name="${nameStep}"]:checked`
    );
    if (!isRadioSelect) {
      alert("Пожалуйста, сделайте выбор!");
    } else {
      goToNextStep(stepIndex);
    }
  }

  function goToNextStep(index) {
    try {
      steps[index].style.display = "none";
      steps[index + 1].style.display = "block";
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  function toggleActiveClass(selector) {
    const elements = document.querySelectorAll(`input[name='${selector}']`);
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
