//! У вас есть массив объектов, представляющих заказы. Нужно отсортировать их по дате и посчитать общую сумму заказов по каждому клиенту.

const orders = [
  { client: "Alice", date: "2023-05-01", amount: 250 },
  { client: "Bob", date: "2023-05-03", amount: 150 },
  { client: "Alice", date: "2023-05-02", amount: 100 },
  { client: "Bob", date: "2023-05-04", amount: 200 },
];

function processOrders(orders) {
  return {
    sortedOrders: [
      ...orders.sort((a, b) => {
        return Date.parse(a.date) - Date.parse(b.date);
      }),
    ],
    totalAmounts: orders.reduce((acc, item) => {
      if (!acc[item.client]) {
        acc[item.client] = 0;
      }
      acc[item.client] += item.amount;
      return acc;
    }, {}),
  };

  // const multyObj = {};

  // for (let person of orders) {
  //   if (multyObj[person.client]) {
  //     multyObj[person.client] += person.amount;
  //   } else {
  //     multyObj[person.client] = person.amount;
  //   }
  // }

  // return {
  //   sortedOrders: orders.sort((a, b) => {
  //     return Date.parse(a.date) - Date.parse(b.date);
  //   }),
  //   totalAmounts: multyObj,
  // };
}

console.log("---------------FIRST TASK------------------------");
console.log(processOrders(orders));

// Output:
// {
//     "sortedOrders": [
//       {
//           "client": "Alice",
//           "date": "2023-05-01",
//           "amount": 250
//       },
//       {
//           "client": "Alice",
//           "date": "2023-05-02",
//           "amount": 100
//       },
//       {
//           "client": "Bob",
//           "date": "2023-05-03",
//           "amount": 150
//       },
//       {
//           "client": "Bob",
//           "date": "2023-05-04",
//           "amount": 200
//       }
//   ],
//   "totalAmounts": {
//       "Alice": 350,
//       "Bob": 350
//   }
// }

//! У вас есть два массива объектов, представляющих пользователей и их заказы. Нужно объединить эти данные по ID пользователей.

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const orders2 = [
  { userId: 1, product: "Laptop" },
  { userId: 2, product: "Phone" },
  { userId: 1, product: "Keyboard" },
];

function mergeUserData(users, orders2) {
  return users.map((user) => {
    return {
      ...user,
      order: orders2.filter((order) => {
        return order["userId"] === user.id;
      }),
    };
  });
  // const joinList = [];
  // for (let person of users)
  //   joinList.push({
  //     ...person,
  //     orders: orders2.filter((elem) => {
  //       return elem.userId === person.id;
  //     }),
  //   });
  // }
  // return joinList;
}

console.log("---------------TASK TWO------------------------");
console.log(mergeUserData(users, orders2));

// Output:
// [
//   {
//       "id": 1,
//       "name": "Alice",
//       "orders": [
//           {
//               "userId": 1,
//               "product": "Laptop"
//           },
//           {
//               "userId": 1,
//               "product": "Keyboard"
//           }
//       ]
//   },
//   {
//       "id": 2,
//       "name": "Bob",
//       "orders": [
//           {
//               "userId": 2,
//               "product": "Phone"
//           }
//       ]
//   }
// ]

//! Написать функцию, которая принимает массив объектов и возвращает объект, где ключи — это категории продуктов, а значения — массивы продуктов в каждой категории.

const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Banana", category: "Fruit" },
  { name: "Broccoli", category: "Vegetable" },
];

function groupByCategory(items) {
  return items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item.name);
    return acc;
  }, {});

  // const newObj = {};
  // items.forEach((elem) => {
  //   if (newObj[elem.category]) {
  //     newObj[elem.category].push({ name: elem.name });
  //   } else {
  //     newObj[elem.category] = [{ name: elem.name }];
  //   }
  // });
  // return newObj;
}

console.log("---------------TASK TREE------------------------");
console.log(groupByCategory(items));
// Output: { Fruit: [{ name: 'Apple' }, { name: 'Banana' }], Vegetable: [{ name: 'Carrot' }, { name: 'Broccoli' }] }

// ! Для практики работы с DOM попробуй сделать копию этого сайта: https://keycode.info/ в скрине показано, что ненужно делать (тема события клавиатуры)

const btn_cngTheme = document.querySelector(".chg_theme");
const container = document.querySelector(".container");
const key = document.querySelector(".body_key");
const loc = document.querySelector(".body_location");
const which = document.querySelector(".body_which");
const code = document.querySelector(".body_code");
const big_num = document.querySelector(".main__num");

let click_theme_flag = false;

btn_cngTheme.addEventListener("click", () => {
  container.classList.toggle("dark");
  btn_cngTheme.classList.toggle("light");
  if (click_theme_flag) {
    click_theme_flag = false;
    btn_cngTheme.innerText = "Dark theme";
  } else {
    click_theme_flag = true;
    btn_cngTheme.innerText = "Light theme";
  }
});

document.addEventListener("keydown", (e) => {
  key.innerText = e.key;
  loc.innerText = e.location;
  big_num.innerText = which.innerText = e.which;
  code.innerText = e.code;
});
