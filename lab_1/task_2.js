function filterImages(filePaths) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp'];

  function hasCyrillic(path) {
    path.forEach((el) => {
      const charCode = path.charCodeAt(el);
      if (charCode >= 0x0410 && charCode <= 0x044F) { // Кириллица (А-Я, а-я)
        return true;
      }
    })
    return false;
  }

  // Основной фильтр массива
  return filePaths.filter(path => {
    // Проверка на отсутствие кириллицы
    if (hasCyrillic(path)) return false;

    // Проверка, является ли файл изображением (расширение файла)
    let hasImageExtension = imageExtensions.some(ext => path.endsWith(ext));
    if (!hasImageExtension) return false;

    // Проверка, что путь содержит символ '/'
    if (!path.includes('/')) return false;

    // Проверка, что конечная папка перед файлом — 'img'
    let pathParts = path.split('/'); // Разделяем путь по "/"
    let fileName = pathParts[pathParts.length - 1]; // Имя файла — последний элемент
    let folderBeforeFile = pathParts[pathParts.length - 2]; // Папка перед файлом

    if (folderBeforeFile !== 'img') return false;

    // Если все условия выполнены, путь подходит
    return true;
  });
}

// Пример массива путей к файлам
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

// Вызов функции фильтрации
const validImagePaths = filterImages(filePaths);
console.log(validImagePaths);