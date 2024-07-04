//! Написать функцию, которая принимает строку и возвращает новую строку, в которой каждое слово начинается с заглавной буквы (аналог функции capitalize).

function capitalizeWords(str) {
  let newStr = str.split(" ").map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return newStr.join(" ");
}

console.log(capitalizeWords("hello world from javascript"));
// Output: 'Hello World From Javascript'

//! В html есть input и button, по клику на кнопку нужно получить текст из input и применить к тексту функцию capitalizeWords и вывести результат параграфа с id="result". нужно учесть следующее условие: если ничего не ведено в input и лишен введена пустая строка, то есть пробелы показывать параграфа с классом error, если пользователь ввел корректный текст скрывать этот параграф

const input = document.querySelector("#input-string");
const result = document.querySelector("#result");
const btn = document.querySelector("button");
const error = document.querySelector(".error");

btn.addEventListener("click", (e) => {
  let inputValue = input.value;
  if (inputValue === "" || inputValue === " ") {
    error.style.display = "inline-block";
  } else {
    if (error.style.display === "inline-block") error.style.display = "none";
    result.innerText = capitalizeWords(inputValue);
  }

  input.value = "";
});

//! Реализовать функцию, которая принимает массив объектов (например, список товаров) и возвращает новый массив, отсортированный по цене по возрастанию, и только те товары, у которых есть в наличии (inStock: true).

const blockProducts = document.querySelector("#forProducts");
const newList = document.createElement("ol");

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 600, inStock: false },
  { name: "Tablet", price: 400, inStock: true },
  { name: "Monitor", price: 200, inStock: true },
];

const sortedList = filterAndSortProducts(products);

function filterAndSortProducts(products) {
  return products
    .filter((item) => {
      return item.inStock === true;
    })
    .sort((a, b) => {
      return a.price - b.price;
    });
}

for (let item of sortedList) {
  const itemList = document.createElement("li");
  itemList.innerText = `${item.name} - ${item.price}`;
  newList.append(itemList);
}

blockProducts.append(newList);

// Output: [{ name: 'Monitor', price: 200, inStock: true }, { name: 'Tablet', price: 400, inStock: true }, { name: 'Laptop', price: 1000, inStock: true }]

//! Результат функции filterAndSortProducts нужно вывести на страницу в виде списка

// function displayProducts(products) {}

// const sortedProducts = filterAndSortProducts(products)
// displayProducts(sortedProducts)

// Output HTML:
{
  /* <ol>
  <li>Monitor - 200</li>
  ....
</ol> */
}

// ! из каждого объекта в массиве library необходимо извлечь поле genre (метод map). Из полученного массива жанров нужно удалить повторяющиеся значения. Полученный массив вывести на страницу в виде списка. По клику на элементы списка должны отображаться книги которая соответствует этому жанру (то есть отфильтровать массив library по выбранному жанру).
//? проитерировать массив (forEach), создать строку html ниже пример и поместить ее в контейнер(id="forBooks") с помощью insertAdjacentHTML

// html для карточки книги

const library = [
  {
    author: "Айзек Азимов",
    title: "Я, робот",
    year: 1950,
    genre: "Научная фантастика",
    theme: "Искусственный интеллект и робототехника",
    rating: 4.5,
    src: "https://s4-goods.ozstatic.by/2000/827/802/10/10802827_0.jpg",
  },
  {
    author: "Джордж Оруэлл",
    title: "1984",
    year: 1949,
    genre: "Дистопия",
    theme: "Контроль и тоталитаризм",
    rating: 4.8,
    src: "https://s5-goods.ozstatic.by/2000/449/348/10/10348449_0.jpg",
  },
  {
    author: "Джейн Остин",
    title: "Гордость и предубеждение",
    year: 1813,
    genre: "Роман",
    theme: "Социальные отношения и мораль",
    rating: 4.7,
    src: "https://cdn1.ozone.ru/s3/multimedia-1/6006289741.jpg",
  },
  {
    author: "Федор Достоевский",
    title: "Преступление и наказание",
    year: 1866,
    genre: "Роман",
    theme: "Психология преступника и наказание",
    rating: 4.9,
    src: "https://s5-goods.ozstatic.by/2000/639/913/10/10913639_0.jpg",
  },
  {
    author: "Маргарет Атвуд",
    title: "Рассказ служанки",
    year: 1985,
    genre: "Дистопия",
    theme: "Женские права и политика",
    rating: 4.6,
    src: "https://img4.labirint.ru/rc/7ef98f652c2db36f9bcaa0d8e352f893/363x561q80/books75/740978/cover.jpg?1583303163",
  },
  {
    author: "Эрнест Хемингуэй",
    title: "Старик и море",
    year: 1952,
    genre: "Рассказ",
    theme: "Символизм и борьба человека с природой",
    rating: 4.4,
    src: "https://s2-goods.ozstatic.by/2000/643/113/10/10113643_0.jpg",
  },
  {
    author: "Уильям Шекспир",
    title: "Гамлет",
    year: 1600,
    genre: "Трагедия",
    theme: "Моральная деградация и смысл жизни",
    rating: 4.8,
    src: "https://ir-3.ozone.ru/s3/multimedia-c/c1000/6025562136.jpg",
  },
  {
    author: "Лев Толстой",
    title: "Война и мир",
    year: 1869,
    genre: "Роман",
    theme: "Война и мир в русском обществе",
    rating: 4.7,
    src: "https://covers.storytel.com/jpg-640/9785604916872.b2d8279e-c561-42ec-ae88-dd3a8e750d4d?optimize=high&quality=70",
  },
  {
    author: "Дж. К. Роулинг",
    title: "Гарри Поттер и Философский камень",
    year: 1997,
    genre: "Фэнтези",
    theme: "Приключения и дружба",
    rating: 4.9,
    src: "https://s2-goods.ozstatic.by/2000/403/506/10/10506403_0.jpg",
  },
  {
    author: "Джордж Мартин",
    title: "Игра престолов",
    year: 1996,
    genre: "Фэнтези",
    theme: "Власть и интриги",
    rating: 4.7,
    src: "https://s4-goods.ozstatic.by/2000/27/823/10/10823027_0.jpg",
  },
  {
    author: "Луи Сахар",
    title: "Зеленая миля",
    year: 1996,
    genre: "Драма",
    theme: "Божественное в человеческом",
    rating: 4.8,
    src: "https://cdn1.ozone.ru/s3/multimedia-g/6841872808.jpg",
  },
  {
    author: "Джек Лондон",
    title: "Белый Клык",
    year: 1906,
    genre: "Приключения",
    theme: "Дружба и выживание в дикой природе",
    rating: 4.6,
    src: "https://s4-goods.ozstatic.by/2000/647/18/1/1018647_0.jpg",
  },
  {
    author: "Жюль Верн",
    title: "Двадцать тысяч лье под водой",
    year: 1870,
    genre: "Приключения",
    theme: "Подводные открытия и приключения",
    rating: 4.5,
    src: "https://allbook.by/wp-content/uploads/2018/11/p_7_3_0_3_7303-dvadcatx-tysqch-lxe-pod-vodoj.jpg",
  },
  {
    author: "Оскар Уайльд",
    title: "Портрет Дориана Грея",
    year: 1890,
    genre: "Роман",
    theme: "Искусство и нравственность",
    rating: 4.6,
    src: "https://s4-goods.ozstatic.by/1000/946/652/10/10652946_0.jpg",
  },
  {
    author: "Рей Брэдбери",
    title: "451° по Фаренгейту",
    year: 1953,
    genre: "Научная фантастика",
    theme: "Цензура и свобода мысли",
    rating: 4.7,
    src: "https://s5-goods.ozstatic.by/2000/938/15/1/1015938_0.jpg",
  },
  {
    author: "Габриэль Гарсиа Маркес",
    title: "Сто лет одиночества",
    year: 1967,
    genre: "Магический реализм",
    theme: "Колониальное наследие и семейная история",
    rating: 4.9,
    src: "https://s1-goods.ozstatic.by/1000/770/440/10/10440770_0.jpg",
  },
  {
    author: "Харуки Мураками",
    title: "Кафка на пляже",
    year: 2002,
    genre: "Магический реализм",
    theme: "Мистика и философия",
    rating: 4.5,
    src: "https://www.litres.ru/pub/c/cover/125379.jpg",
  },
  {
    author: "Донна Таррт",
    title: "Тайная история",
    year: 1992,
    genre: "Реализм",
    theme: "Дружба и тайны",
    rating: 4.2,
    src: "https://s5-goods.ozstatic.by/1000/498/406/10/10406498_0.jpg",
  },
];

const blockLib = document.querySelector("#forBooks");
const blockGenre = document.querySelector("#genre");
const listGenre = document.createElement("ol");
const cardBook = document.querySelector(".card-books");

const genreList = new Set(
  library.map((book) => {
    return book.genre;
  })
);

for (let genre of genreList) {
  let bookLi = document.createElement("li");
  bookLi.innerText = genre;
  listGenre.append(bookLi);
}

blockGenre.append(listGenre);

listGenre.addEventListener("click", (e) => {
  document.querySelectorAll("ol li").forEach((li) => {
    li.classList.remove("bold-li");
  });
  e.target.classList.add("bold-li");
  if (cardBook.childNodes.length > 0) {
    cardBook.replaceChildren();
  }
  const selectBookByGenre = library.filter((book) => {
    return book.genre == e.target.innerText;
  });

  for (let book of selectBookByGenre) {
    const template = `      
    <div class="book-card">
      <img
        src=${book.src}
        alt=${book.title}
      />
      <div class="book-details">
        <h2>${book.title}</h2>
        <p><strong>Автор:</strong> ${book.author}</p>
        <p><strong>Год издания:</strong> ${book.year}</p>
        <p><strong>Жанр:</strong> ${book.genre}</p>
        <p><strong>Тема:</strong> ${book.theme}</p>
        <p><strong>Рейтинг:</strong> ${book.rating}</p>
      </div>
    </div>
      `;
    cardBook.insertAdjacentHTML("beforeend", template);
  }

  // const template = cardBook.append(selectGenre);
});
