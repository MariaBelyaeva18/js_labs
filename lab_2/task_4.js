function func(number, singular, genitive, plural) {
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return number + ' ' + plural;
    } else if (lastDigit === 1) {
        return number + ' ' + singular;
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return number + ' ' + genitive;
    } else {
        return number + ' ' + plural;
    }
}


// Примеры использования
console.log(func(1, 'яблоко', 'яблока', 'яблок')); // Вывод: 1 яблоко
console.log(func(2, 'яблоко', 'яблока', 'яблок')); // Вывод: 2 яблока
console.log(func(3, 'яблоко', 'яблока', 'яблок')); // Вывод: 3 яблока
console.log(func(4, 'яблоко', 'яблока', 'яблок')); // Вывод: 4 яблока
console.log(func(5, 'яблоко', 'яблока', 'яблок')); // Вывод: 5 яблок
console.log(func(11, 'яблоко', 'яблока', 'яблок')); // Вывод: 11 яблок
console.log(func(12, 'яблоко', 'яблока', 'яблок')); // Вывод: 12 яблок
console.log(func(21, 'яблоко', 'яблока', 'яблок')); // Вывод: 21 яблоко
console.log(func(23, 'яблоко', 'яблока', 'яблок')); // Вывод: 23 яблока
console.log(func(1223421, 'яблоко', 'яблока', 'яблок')); // Вывод: 1223421 яблоко