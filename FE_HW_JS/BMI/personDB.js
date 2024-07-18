document.addEventListener("DOMContentLoaded", () => {
  /*Step 1*/
  const stepsBtn = document.querySelectorAll(".calculator-btn");
  const steps = document.querySelectorAll(".step");
  const form = document.getElementById("calculator-form");
  const blockError = document.querySelector(".calculator__error");
  let inputValues = document.querySelectorAll('input[type="number"]');

  stepsBtn.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      let resVal = validateStep(index);
    });
  });

  form.addEventListener("change", (e) => {
    const isVisibleError = document.querySelector(".active_error");
    if (isVisibleError) isVisibleError.classList.remove("active_error");
    toggleActiveClass(e.target.name);
  });

  inputValues.forEach((input) => {
    input.addEventListener("input", (e) => {
      const age = +document.querySelector("input#age").value;
      const growt = +document.querySelector("input#growth").value;
      const weight = +document.querySelector("input#weight").value;
      if (age && growt && weight) {
        document
          .querySelector(".calculator-btn[id='step-result']")
          .removeAttribute("disabled");
      } else {
        document
          .querySelector(".calculator-btn[id='step-result']")
          .setAttribute("disabled", "true");
      }
    });
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
        const userData = calculateBMI();
        if (typeof userData === "object") {
          console.log("sent");
        } else {
          blockError.innerHTML = "Форма заполнена неверно";
          blockError.classList.add("active_error");
        }
        return;
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

  function calculateBMI() {
    const userData = [...inputValues].reduce((result, input) => {
      return {
        ...result,
        [input.name]: +input.value,
      };
    }, {});
    return userData;
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
