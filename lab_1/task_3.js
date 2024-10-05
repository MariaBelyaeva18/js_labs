function generateRandomString(length) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const lowerRusCaseLetters = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const upperRusCaseLetters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
  const numbers = '0123456789';
  const specialCharacters = '!@#$%^&*()_+-=[]{}|;:\'",.<>?/\\';

  if (length < 6) {
    throw new Error('Длина должна быть не менее 6 для включения всех требуемых символов.');
  }

  let result = [];
  let prevChar = '';
  let count = 0;

  const characters = [lowerCaseLetters, lowerRusCaseLetters, upperCaseLetters, upperRusCaseLetters, numbers, specialCharacters];
  const allCharacters = characters.join('');

  characters.forEach((el) => {
    result.push(el[Math.floor(Math.random() * el.length)]);
  })

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

  for (let i = 4; i < result.length; i += 5) {
    result.splice(i, 0, ' ');
  }

  console.log(result.join(''));
}

generateRandomString(100);