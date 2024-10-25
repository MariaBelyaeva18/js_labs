const files = [
    "file1.txt",
];

const fileData = [];

files.forEach((file) => {
    const reader = new FileReader();
    const test = new File([], file)

    reader.onload = function(e) {
        const content = e.target.result;
        const words = content.trim().split(/\s+/).length;
        const sentences = content.match(/\.|\?|\!/g)?.length || 0;
        const letters = content.replace(/[^a-zA-Z]/g, "").length;
        const sizeKB = Math.round((e.target.result.length / 1024) * 100) / 100; // размер в КБ

        fileData.push({
            name: file,
            words,
            sentences,
            letters,
            sizeKB,
        });

        // Проверка, все ли файлы обработаны
        if (fileData.length === files.length) {
            // Сортируем файлы по убыванию размера
            fileData.sort((a, b) => b.sizeKB - a.sizeKB);

            // Выводим информацию о файлах
            console.log("Информация о файлах:");
            fileData.forEach(data => {
                console.log(`
          Имя файла: ${data.name}
          Количество слов: ${data.words}
          Количество предложений: ${data.sentences}
          Количество букв: ${data.letters}
          Размер файла: ${data.sizeKB} КБ
        `);
            });
        }
    };

    reader.onerror = function(e) {
        console.error(`Ошибка чтения файла ${file}: ${e}`);
    };

    // Загружаем содержимое файла
    reader.readAsText(test);
});
