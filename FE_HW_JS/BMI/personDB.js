document.addEventListener("DOMContentLoaded", () => {
  /*Step 1*/
  const stepsBtn = document.querySelectorAll(".calculator-btn");
  const steps = document.querySelectorAll(".step");
  const form = document.getElementById("calculator-form");
  const blockError = document.querySelector(".calculator__error");
  const inputValues = document.querySelectorAll('input[type="number"]');

  stepsBtn.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      validateStep(index);
    });
  });

  form.addEventListener("change", (e) => {
    const isVisibleError = document.querySelector(".active_error");
    if (isVisibleError) isVisibleError.classList.remove("active_error");
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
      case 2:
        validateStepTree(); /* <--- this continue */
        return true;
    }
    const isRadioSelect = document.querySelector(
      `input[name="${nameStep}"]:checked`
    );
    if (!isRadioSelect) {
      blockError.classList.add("active_error");
    } else {
      blockError.classList.remove("active_error");
      goToNextStep(stepIndex);
    }
  }

  inputValues.forEach((input) => {
    input.addEventListener("input", (e) => {
      console.log("input");
    });
  });

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


2. Универсальная валидация последней формы

*/
