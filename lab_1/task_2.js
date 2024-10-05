function filterImages(filePaths) {
  // расширения файлов, которые являются изображениями
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp'];

  // проверка наличия кирилицы в пути к файлу
  function hasCyrillic(path) {
    let hasCyrillic = false;

    path.split('').forEach(char => {
      const charCode = char.charCodeAt(0);
      if (charCode >= 0x0410 && charCode <= 0x044F) { // Кириллица (А-Я, а-я)
        hasCyrillic = true;
        // нашли символ кирилицы - прерываем перебор
        return;
      }
    });

    return hasCyrillic;
  }

  // возвращаем отфильтрованный массив
  return filePaths.filter(path => {
    // если есть кирилица
    if (hasCyrillic(path)) return false;

    // если расширение файла - не изображение
    const hasImageExtension = imageExtensions.some(ext => path.endsWith(ext));
    if (!hasImageExtension) return false;

    // если нет символа '/', значит не является полным путем к файлу
    if (!path.includes('/')) return false;

    // если все условия соблюдены, проверяем, что файл лежит в папке img
    const pathParts = path.split('/');
    const folderBeforeFile = pathParts[pathParts.length - 2];

    return folderBeforeFile === 'img';
  });
}

// примеры путей
const filePaths = [
  '/home/user/img/file.jpg',
  '/var/data/img/photo.png',
  '/var/data/images/photo.jpeg', // не подходит: папка не 'img'
  '/usr/local/bin/img/graphic.svg',
  '/home/пользователь/img/file.jpg', // не подходит: кириллица в пути
  '/home/user/documents/file.txt', // не подходит: не изображение
  '/home/user/img/image.gif',
  '/usr/local/img/wallpaper.bmp',
  'C:/Users/Admin/img/picture.png', // не подходит: неполный путь
  '/tmp/img/snapshot.webp'
];

// вызов функции
console.log(filterImages(filePaths));