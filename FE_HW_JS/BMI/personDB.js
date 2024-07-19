document.addEventListener("DOMContentLoaded", () => {
  /*Step 1*/
  const stepsBtn = document.querySelectorAll(".calculator-btn");
  const steps = document.querySelectorAll(".step");
  const form = document.getElementById("calculator-form");
  const blockError = document.querySelector(".calculator__error");
  let inputValues = document.querySelectorAll('input[type="number"]');
  const resBMI = document.querySelector("#imt-value");
  const resDCI = document.querySelector("#nc");

  stepsBtn.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const userProp = validateStep(index);
      if (userProp) {
        const BMI = calculateBMI(userProp);
        resBMI.textContent = `${BMI[1]} (${BMI[0]})`;
        resKkal.textContent = BMI[1] * 100;
      }
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

  function calculateBMI(props) {
    let BMI = (props.weight / (props.growth / 100) ** 2).toFixed(2);
    let res;
    if (18.5 <= BMI && BMI < 25) {
      res = "Нормальный вес";
    } else if (25 <= BMI && BMI < 30) {
      res = "Избыточный вес";
    } else if (30 <= BMI && BMI < 35) {
      res = "Ожирение I степени";
    } else if (35 <= BMI && BMI < 40) {
      res = "Ожирение II степени";
    } else if (BMI > 40) {
      res = "Ожирение III степени";
    }
    return [res, BMI];
  }

  function calculateDCI() {
    /*continue this*/
  }

  function validateStep(stepIndex) {
    switch (stepIndex) {
      case 0:
        nameStep = "gender";
        break;
      case 1:
        nameStep = "activity";
        break;
      case 2:
        const userData = setUserData();
        if (typeof userData === "object" && form.checkValidity()) {
          console.log("sent");
          goToNextStep(stepIndex);
          return userData;
        } else {
          blockError.textContent = "Форма заполнена неверно";
          blockError.classList.add("active_error");
          return false;
        }
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

  function setUserData() {
    const userData = [...inputValues].reduce((result, input) => {
      return {
        ...result,
        [input.name]: +input.value,
      };
    }, {});
    return userData;
  }

  function goToNextStep(index) {
    steps[index].style.display = "none";
    steps[index + 1].style.display = "block";
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
