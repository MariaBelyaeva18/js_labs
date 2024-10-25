class ImageFilter {
    constructor() {
        this.maxSize = 2000;
        this.allowedFormats = ["jpg", "png", "svg"];
    }

    filterImages(images) {
        return images.filter(image => this.checkImage(image));
    }

    checkImage(image) {
        try {
            // Получаем размер изображения
            const { width, height } = image;

            // Проверяем размер
            if (width > this.maxSize || height > this.maxSize) {
                return false;
            }

            // Проверяем формат
            const format = image.type.toLowerCase();
            return this.allowedFormats.includes(format);


        } catch (error) {
            console.error(`Ошибка при проверке изображения: ${error}`);
            return false;
        }
    }
}

// Пример использования
const images = [
    { src: "image1.jpg", width: 1500, height: 1000, type: "jpg" },
    { src: "image2.png", width: 2500, height: 1800, type: "png" },
    { src: "image3.svg", width: 1000, height: 500, type: "svg" },
    { src: "image4.bmp", width: 800, height: 600, type: "bmp" },
];

const imageFilter = new ImageFilter();
const filteredImages = imageFilter.filterImages(images);

filteredImages.forEach(image => console.log(image.src));
