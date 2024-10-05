class Ladder {
  // вводим переменные, которые сохраняются в свойствах класса
  constructor(birthday) {
    this.birthday = new Date(birthday);
    this.today = new Date();
  }

  // получение текущей даты
  getCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return this.today.toLocaleDateString('ru-RU', options);
  }

  // получение текущего дня недели
  getCurrentDayOfWeek() {
    const options = { weekday: 'long' };
    return this.today.toLocaleDateString('ru-RU', options);
  }

  // получение кол-ва дней до нового года
  getDaysToNewYear() {
    const nextNewYear = new Date(this.today.getFullYear() + 1, 0, 1);
    const diff = nextNewYear.getTime() - this.today.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  // получение кол-ва дней до дня рождения
  getDaysToBirthday() {
    const nextBirthday = new Date(this.today.getFullYear(), this.birthday.getMonth(), this.birthday.getDate());
    if (nextBirthday < this.today) {
      nextBirthday.setFullYear(this.today.getFullYear() + 1);
    }
    const diff = nextBirthday.getTime() - this.today.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  // получение следующего високосного года
  getNextLeapYear() {
    let year = new Date().getFullYear();
    while (true) {
      year++;
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return year;
      }
    }
  }
}

// задаем дату рождения
const birthday = new Date('2004-10-01');
// создаем объект из класса Ladder и присваиваем переменной
const ladder = new Ladder(birthday);

// вызов функций из свойств объекта
console.log('Текущая дата:', ladder.getCurrentDate());
console.log('Текущий день недели:', ladder.getCurrentDayOfWeek());
console.log('Количество дней до нового года:', ladder.getDaysToNewYear());
console.log('Количество дней до дня рождения:', ladder.getDaysToBirthday());
console.log('Следующий високосный год:', ladder.getNextLeapYear());