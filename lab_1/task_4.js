class Ladder {
  constructor(birthday) {
    this.birthday = new Date(birthday);
  }

  getCurrentDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('ru-RU', options);
  }

  getCurrentDayOfWeek() {
    const today = new Date();
    const options = { weekday: 'long' };
    return today.toLocaleDateString('ru-RU', options);
  }

  getDaysToNewYear() {
    const today = new Date();
    const nextNewYear = new Date(today.getFullYear() + 1, 0, 1);
    const diff = nextNewYear.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  getDaysToBirthday() {
    const today = new Date();
    const nextBirthday = new Date(today.getFullYear(), this.birthday.getMonth(), this.birthday.getDate());
    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const diff = nextBirthday.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

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

// Пример использования
const birthday = new Date("2004-10-01"); // Ваш день рождения
const ladder = new Ladder(birthday);

console.log("Текущая дата:", ladder.getCurrentDate());
console.log("Текущий день недели:", ladder.getCurrentDayOfWeek());
console.log("Количество дней до нового года:", ladder.getDaysToNewYear());
console.log("Количество дней до дня рождения:", ladder.getDaysToBirthday());
console.log("Следующий високосный год:", ladder.getNextLeapYear());