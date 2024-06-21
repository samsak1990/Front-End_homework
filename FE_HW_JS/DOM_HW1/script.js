/* Task 1 - get element by ID */

const elementID = document.getElementById("changeColorButton");
console.log(elementID);

/* Task 2 - get element by Class */

const elementsClass = document.getElementsByClassName("text");
console.log(elementsClass);

/* Task 3 - get element by Tag name */

const elementsTags = document.getElementsByTagName("li");
console.log(elementsTags);

/* Task 4 - changing the color of paragraphs by clicking on the button */

const button = document.querySelector("#changeColorButton");
const parag = document.querySelectorAll("p.text");

button.addEventListener("click", (event) => {
  event.preventDefault();
  parag.forEach((item) => {
    item.classList.toggle("highlight");
  });
});

/* Task 5 - changing the text into li */

const listLi = document.querySelectorAll("li");

listLi.forEach((val, index) => {
  val.innerText = "Изменённый элемент списка " + index;
});

/* Task 6 - create a new element */

const container = document.querySelector("#container");

const newP = document.createElement("p");
newP.innerHTML = "Новый параграф";

container.append(newP);

/* Task 7 - search elements */

const firstP = document.querySelector("p");
const allP = document.querySelectorAll("p");

console.log("The first paragraph - " + firstP);
console.log("All paragraphs - " + allP);
