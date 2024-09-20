function generateRandomString(length) {
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_+-=[]{}|;':\",.<>?/";

  // Проверяем, что длина достаточна для необходимых символов
  if (length < 4) {
    throw new Error("Длина должна быть не менее 4 для включения всех требуемых символов.");
  }

  const allCharacters = lowerCaseLetters + upperCaseLetters + numbers + specialCharacters;

  let result = [];
  let prevChar = '';
  let count = 0;

  // Обеспечиваем наличие хотя бы одного каждого символа
  result.push(lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]);
  result.push(upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]);
  result.push(numbers[Math.floor(Math.random() * numbers.length)]);
  result.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);

  // Заполняем оставшиеся символы
  for (let i = 4; i < length; i++) {
    let char = '';
    do {
      char = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    } while (prevChar.includes(char) && count >= 2); // Условие на повторение

    result.push(char);

    // Обновляем предыдущий символ и счетчик повторений
    if (prevChar.includes(char)) {
      count++;
    } else {
      prevChar += char;
      count = 1;
    }
  }

  // Вставляем символ разделителя после каждого 4 символа
  if (length > 4) {
    for (let i = 4; i < result.length; i += 5) {
      result.splice(i, 0, '-'); // Символ разделителя, можно изменить по необходимости
    }
  }

  console.log(result.join(''));
}

// Пример вызова функции
generateRandomString(100);