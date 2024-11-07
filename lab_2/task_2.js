const fileData = [];
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.multiple = true; // разрешить выбор нескольких файлов

fileInput.addEventListener('change', (event) => {
    const selectedFiles = event.target.files;
    if (selectedFiles.length > 0) {
        for (let i = 0; i < selectedFiles.length; i++) {
            const file = selectedFiles[i];
            const reader = new FileReader();

            reader.onload = function (e) {
                const content = e.target.result;
                const words = content.trim().split(/\s+/).length;
                const sentences = content.match(/\.|\?|\!/g)?.length || 0;
                const letters = content.replace(/[^a-zA-Z]/g, "").length;
                const sizeKB = Math.round((e.target.result.length / 1024) * 100) / 100; // размер в КБ

                fileData.push({
                    name: file.name, // используем имя файла
                    words,
                    sentences,
                    letters,
                    sizeKB,
                });

                // Проверка, все ли файлы обработаны
                if (fileData.length === selectedFiles.length) {
                    // Сортируем файлы по убыванию размера
                    fileData.sort((a, b) => b.sizeKB - a.sizeKB);

                    // Выводим информацию о файлах
                    console.log("Информация о файлах:");
                    fileData.forEach((data) => {
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

            reader.onerror = function (e) {
                console.error(`Ошибка чтения файла ${file.name}: ${e}`);
            };

            // Загружаем содержимое файла
            reader.readAsText(file);
        }
    }
});

// добавляем элемент input в DOM
document.body.appendChild(fileInput);

// вызываем событие change, чтобы открыть диалог выбора файлов
fileInput.click();
