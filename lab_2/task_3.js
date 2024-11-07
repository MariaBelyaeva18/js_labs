// Исходная структура данных
const events = [
    { date: '2019-12', event: 'name1' },
    { date: '2019-12', event: 'name2' },
    { date: '2019-11', event: 'name3' },
    { date: '2019-11', event: 'name4' },
    { date: '2020-10', event: 'name5' },
    { date: '2020-10', event: 'name6' },
    { date: '2020-11', event: 'name5' },
    { date: '2020-11', event: 'name6' },
    { date: '2020-12', event: 'name7' },
    { date: '2020-12', event: 'name8' },
    { date: '2020-12', event: 'name9' },
];

// Результатная структура данных
const result = {};

// Перебираем все события
events.forEach((event) => {
    const year = parseInt(event.date.split('-')[0]); // Год
    const month = parseInt(event.date.split('-')[1]); // Месяц
    if (!result[year]) result[year] = {};
    if (!result[year][month]) result[year][month] = [];

    result[year][month].push(event.event);
})

console.log(result);
