function generateRandomString(length) {
  // список допустимых символов
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const lowerRusCaseLetters = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const upperRusCaseLetters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
  const numbers = '0123456789';
  const specialCharacters = '!@#$%^&*()_+-=[]{}|;:\'",.<>?/\\';

  // проверка вводимой длины
  if (length < 6) {
    throw new Error('Длина должна быть не менее 6 для включения всех требуемых символов.');
  }

  let result = [];
  let prevChar = '';
  let count = 0;

  const characters = [lowerCaseLetters, lowerRusCaseLetters, upperCaseLetters, upperRusCaseLetters, numbers, specialCharacters];
  const allCharacters = characters.join('');

  // генерируем первые 6 символов
  characters.forEach((el) => {
    result.push(el[Math.floor(Math.random() * el.length)]);
  })

  // генерируем новые символы и проверяем, что они повторились не более 3 раз
  for (let i = 6; i < length; i++) {
    let char = '';
    do {
      char = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    } while (prevChar.includes(char) && count > 2);

    result.push(char);

    if (prevChar.includes(char)) {
      count++;
    } else {
      prevChar += char;
      count = 1;
    }
  }

  // добавляем разделитель после каждого 4 символа
  for (let i = 4; i < result.length; i += 5) {
    result.splice(i, 0, ' ');
  }

  // вывод результата
  console.log(result.join(''));
}

// вызов функции
generateRandomString(100);