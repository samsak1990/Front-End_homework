/* CALL, APPLY, BIND */

const airline1 = {
  name: "Airline One",
  code: "A1",
  bookings: [],
};

const airline2 = {
  name: "Airline Two",
  code: "A2",
  bookings: [],
};

function booking(flightNum, passengerName) {
  const reserve = {
    flight: `${this.code}${flightNum}`,
    name: passengerName,
  };
  this.bookings.push(reserve);
  console.log(
    `${passengerName} booked a seat on ${this.name} flight ${this.code}${flightNum}`
  );
}

// Забронируйте рейс на airline1 используя функцию booking

booking.call(airline1, 747, "Pavel");

// Забронируйте рейс на airline2 используя метод функцию и метод apply

booking.apply(airline2, [257, "George"]);

// Создайте новую функцию, которая навсегда связана с функцией booking из airline1, и забронируйте рейс

const reservationForAirlene1 = booking.bind(airline1);

reservationForAirlene1(852, "Anastasia");

// Создайте новую функцию, которая связавает функцию booking и airline2, и так предустановленным номером рейса, и забронируйте рейс

const reservationForAirlene2Flight354 = booking.bind(airline2, 354);

reservationForAirlene2Flight354("Bob");
