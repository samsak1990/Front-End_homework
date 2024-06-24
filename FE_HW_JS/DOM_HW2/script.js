const bodyTag = document.body;

// Создайте кнопку и абзац в html. При нажатии на кнопку изменяйте содержимое абзаца
const div1 = document.createElement("div");
const newBtn1 = document.createElement("button");
const newParag1 = document.createElement("p");

newBtn1.innerText = "Изменить текст";
newParag1.innerText = "Старый контент этого параграфа!";

newBtn1.addEventListener("click", () => {
  newParag1.innerText = "А вот и новый текст!";
});

bodyTag.append(div1);
div1.append(newParag1, newBtn1);

// Создайте кнопку и список в html. При нажатии на кнопку добавляйте новый элемент в конец списка

const div2 = document.createElement("div");
const newBtn2 = document.createElement("button");
const newUl = document.createElement("ul");
let count = 0;

newBtn2.innerText = "Добавить элемент списка";

newBtn2.addEventListener("click", () => {
  count += 1;
  const newLi = document.createElement("li");
  newLi.innerText = `Элемент # ${count}`;
  newUl.appendChild(newLi);
});

bodyTag.append(div2);
div2.append(newBtn2, newUl);

// Создайте кнопку и абзац в html. При нажатии на кнопку добавляйте новый абзац перед существующим
const div3 = document.createElement("div");
const newBtn3 = document.createElement("button");
let flag = 0;

div3.classList.add("threeDiv");
newBtn3.innerText = "Добавить абзац";

bodyTag.append(div3);
div3.append(newBtn3);

newBtn3.addEventListener("click", () => {
  flag += 1;
  const addP = document.createElement("p");
  addP.innerText = `Абзац # ${flag}`;
  div3.insertAdjacentElement("afterbegin", addP);
});

// Создайте кнопку и абзац в html. При нажатии на кнопку изменяйте стиль абзаца (например, цвет текста и фон)

const div4 = document.createElement("div");
const newBtn4 = document.createElement("button");
const newParag4 = document.createElement("p");

newParag4.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere tempore corrupti debitis sit hic, quis sed, expedita nostrum ea, reprehenderit numquam. A quia asperiores iusto sint exercitationem quidem cum numquam!`;

newBtn4.innerText = "Изменить стиль абзаца";

newBtn4.addEventListener("click", () => {
  newParag4.style.cssText = `color: blue; 
    font-weight: bold; 
    text-decoration: underline;`;
});

bodyTag.append(div4);
div4.append(newParag4, newBtn4);

// Создайте кнопку и абзац в html. При нажатии на кнопку применяйте к абзацу несколько стилей

const div5 = document.createElement("div");
const newBtn5 = document.createElement("button");
const newParag5 = document.createElement("p");

newBtn5.innerText = "Добавить стили";

newParag5.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere tempore corrupti debitis sit hic, quis sed, expedita nostrum ea, reprehenderit numquam. A quia asperiores iusto sint exercitationem quidem cum numquam!`;

newBtn5.addEventListener("click", () => {
  newParag5.classList.add("boldColorSize");
});

bodyTag.append(div5);
div5.append(newParag5, newBtn5);

// Создайте кнопку и абзац в html. При нажатии на кнопку вставляйте HTML-код рядом с абзацем с использованием insertAdjacentHTML
const div6 = document.createElement("div");
const newBtn6 = document.createElement("button");
const newParag6 = document.createElement("p");

newBtn6.innerText = "Добавить HTML рядом";

newParag6.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`;

const mover = () => {
  newParag6.style.cssText = `
    display: inline-block;
    border: 1px solid green;
  `;
  newParag6.insertAdjacentHTML(
    "afterend",
    '<img src="cat.jpg" weight=3500px height=150px><br/> <br/>'
  );
  newBtn6.removeEventListener("click", mover);
};

newBtn6.addEventListener("click", mover);

bodyTag.append(div6);
div6.append(newParag6, newBtn6);

// Создайте кнопку и абзац в html. Для абзаца задайте стили в css файле. При нажатии на кнопку выводите в консоль значение стиля (например, цвет текста) абзаца с использованием getComputedStyle

const div7 = document.createElement("div");
const newBtn7 = document.createElement("button");
const newParag7 = document.createElement("p");

newParag7.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`;
newParag7.classList.add("forParagrapgSeven");

newBtn7.innerText = "Получить стили абзаца";

newBtn7.addEventListener("click", () => {
  console.log(getComputedStyle(newParag7).color);
});

bodyTag.append(div7);
div7.append(newParag7, newBtn7);

/*-----------------------------------------*/
const divAll = document.querySelectorAll("div");

divAll.forEach((element) => {
  element.style.border = "1px";
  element.style.borderColor = "black";
  element.style.borderStyle = "solid";
  element.style.padding = "10px";
});
