class Ladder {
  constructor(birthday) {
    this.birthday = new Date(birthday);
    this.today = new Date();
  }

  getCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return this.today.toLocaleDateString('ru-RU', options);
  }

  getCurrentDayOfWeek() {
    const options = { weekday: 'long' };
    return this.today.toLocaleDateString('ru-RU', options);
  }

  getDaysToNewYear() {
    const nextNewYear = new Date(this.today.getFullYear() + 1, 0, 1);
    const diff = nextNewYear.getTime() - this.today.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  getDaysToBirthday() {
    const nextBirthday = new Date(this.today.getFullYear(), this.birthday.getMonth(), this.birthday.getDate());
    if (nextBirthday < this.today) {
      nextBirthday.setFullYear(this.today.getFullYear() + 1);
    }
    const diff = nextBirthday.getTime() - this.today.getTime();
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

const birthday = new Date('2004-10-01');
const ladder = new Ladder(birthday);

console.log('Текущая дата:', ladder.getCurrentDate());
console.log('Текущий день недели:', ladder.getCurrentDayOfWeek());
console.log('Количество дней до нового года:', ladder.getDaysToNewYear());
console.log('Количество дней до дня рождения:', ladder.getDaysToBirthday());
console.log('Следующий високосный год:', ladder.getNextLeapYear());