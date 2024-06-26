/*
Ввод данных(получаем данные через prompt): 
    Поля для ввода веса в килограммах (целое или дробное число).
    Поля для ввода роста в сантиметрах (целое число).
    
Валидация данных:
    Проверка, что введенные данные являются числовыми.
    Проверка, что вес находится в диапазоне от 20 кг до 300 кг.
    Проверка, что рост находится в диапазоне от 50 см до 300 см.
    Если введены некорректные данные, отображать соответствующее сообщение об ошибке.(Выводим сообщение, через alert)

Вычисление ИМТ:
    Формула для расчета ИМТ: ИМТ = вес (кг) / (рост (м) * рост (м)).
    Преобразование роста из сантиметров в метры для вычисления ИМТ.

Вывод результата:
    Отображение рассчитанного ИМТ с точностью до одного знака после запятой.(у чисел тоже есть методы, поищите каким образом можно ограничить количество знаком посое запятой)
    Отображение интерпретации результата на основе следующих значений (Выводим сообщение, через alert):
            ИМТ >= 18.5 И < 25:Нормальный вес
            ИМТ >= 25 И < 30:Избыточный вес
            ИМТ >= 30 И < 35:Ожирение I степени
            ИМТ >= 35 И < 40:Ожирение II степени
            ИМТ >= 40:Ожирение III степени

*/

const inputWeight = document.querySelector("#youWeight");
const inputHeight = document.querySelector("#youHeight");
const btnSend = document.querySelector(".form__button");

btnSend.addEventListener("click", () => {
  const weight = Number(inputWeight.value),
    height = Number(inputHeight.value);

  if (20 <= weight && weight <= 300 && 50 <= height && height <= 300) {
    const heightMetre = height / 100;
    const resultIMT = calcIMT(weight, heightMetre);
    alert(resultIMT);
  } else {
    alert("Введены некорректные данные");
  }
});

function calcIMT(w, h) {
  const IMT = (w / h ** 2).toFixed(1);
  let res;
  if (18.5 <= IMT && IMT < 25) {
    res = "Нормальный вес";
  } else if (25 <= IMT && IMT < 30) {
    res = "Избыточный вес";
  } else if (30 <= IMT && IMT < 35) {
    res = "Ожирение I степени";
  } else if (35 <= IMT && IMT < 40) {
    res = "Ожирение II степени";
  } else if (IMT > 40) {
    res = "Ожирение III степени";
  }
  return res;
}
