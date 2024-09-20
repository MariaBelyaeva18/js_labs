function func(number) {
  const units = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять", "десять", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];
  const tens = ["", "", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
  const hundreds = ["", "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"];

  if (number === 0) {
    return "ноль";
  }

  let result = "";

  if (number >= 100) {
    result += hundreds[Math.floor(number / 100)] + " ";
    number %= 100;
  }

  if (number >= 20) {
    result += tens[Math.floor(number / 10)] + " ";
    number %= 10;
  } else if (number >= 10) {
    result += units[number] + " ";
    number = 0;
  }

  if (number > 0) {
    result += units[number] + " ";
  }

  return result.trim();
}

console.log(func(123)); // 'сто двадцать три'
console.log(func(456)); // 'четыреста пятьдесят шесть'
console.log(func(789)); // 'семьсот восемьдесят девять'
console.log(func(0)); // 'ноль'