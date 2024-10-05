function filterImages(filePaths) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp'];

  function hasCyrillic(path) {
    let hasCyrillic = false;

    path.split('').forEach(char => {
      const charCode = char.charCodeAt(0);
      if (charCode >= 0x0410 && charCode <= 0x044F) { // Кириллица (А-Я, а-я)
        hasCyrillic = true;
        return;
      }
    });

    return hasCyrillic;
  }

  return filePaths.filter(path => {
    if (hasCyrillic(path)) return false;

    const hasImageExtension = imageExtensions.some(ext => path.endsWith(ext));
    if (!hasImageExtension) return false;

    if (!path.includes('/')) return false;

    const pathParts = path.split('/');
    const folderBeforeFile = pathParts[pathParts.length - 2];

    if (folderBeforeFile !== 'img') return false;

    return true;
  });
}

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

const validImagePaths = filterImages(filePaths);
console.log(validImagePaths);