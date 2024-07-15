document.addEventListener("DOMContentLoaded", () => {
  /*Step 1*/
  const blockGender = document.querySelector(".calculator-gender__items");
  //   const checkGender = document.querySelectorAll("input[name='gender']");
  //   console.log(checkGender);

  blockGender.addEventListener("click", (e) => {
    e.preventDefault();
    console.dir(e.target);
  });
});
