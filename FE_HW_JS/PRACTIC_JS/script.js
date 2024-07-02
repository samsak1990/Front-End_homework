//! У вас есть массив объектов, представляющих заказы. Нужно отсортировать их по дате и посчитать общую сумму заказов по каждому клиенту.

// const orders = [
//   { client: "Alice", date: "2023-05-01", amount: 250 },
//   { client: "Bob", date: "2023-05-03", amount: 150 },
//   { client: "Alice", date: "2023-05-02", amount: 100 },
//   { client: "Bob", date: "2023-05-04", amount: 200 },
// ];

// function processOrders(orders) {
//   const multyObj = {};

//   for (let person of orders) {
//     if (multyObj[person.client]) {
//       multyObj[person.client] += person.amount;
//     } else {
//       multyObj[person.client] = person.amount;
//     }
//   }

//   return {
//     sortedOrders: orders.sort((a, b) => {
//       return Date.parse(a.date) - Date.parse(b.date);
//     }),
//     totalAmounts: multyObj,
//   };
// }

// console.log("---------------FIRST TASK------------------------");
// console.log(processOrders(orders));

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

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
// ];

// const orders2 = [
//   { userId: 1, product: "Laptop" },
//   { userId: 2, product: "Phone" },
//   { userId: 1, product: "Keyboard" },
// ];

// function mergeUserData(users, orders2) {
//   const joinList = [];

//   for (let person of users) {
//     joinList.push({
//       ...person,
//       orders: orders2.filter((elem) => {
//         return elem.userId === person.id;
//       }),
//     });
//   }

//   return joinList;
// }
// console.log("---------------TASK TWO------------------------");
// console.log(mergeUserData(users, orders2));

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
  const newObj = {};
  for (let elem of items) {
    newObj[elem.category] = items.filter((item) => {
      return elem.category === item.category;
    }).forEach(element => {
      
    });;
  }
  return newObj;
}

console.log("---------------TASK TWO------------------------");
console.log(groupByCategory(items));
// Output: { Fruit: [{ name: 'Apple' }, { name: 'Banana' }], Vegetable: [{ name: 'Carrot' }, { name: 'Broccoli' }] }

// ! Для практики работы с DOM попробуй сделать копию этого сайта: https://keycode.info/ в скрине показано, что ненужно делать (тема события клавиатуры)
