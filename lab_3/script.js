const API_KEY = '6726e910a353bc50210a683bdaebd1dc';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Элементы DOM
const cityInput = document.getElementById('city-input');
const getWeatherBtn = document.getElementById('get-weather-btn');
const weatherResult = document.getElementById('weather-result');
const hotCitiesBlock = document.getElementById('hot-cities');
const russiaCitiesBlock = document.getElementById('russia-cities');

// Функция для получения данных о погоде
async function fetchWeather(city) {
    try {
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error(`City not found: ${city}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

// Функция для отображения данных о погоде
function displayWeather(data, container) {
    if (!data) {
        container.innerHTML = '<p class="error">City not found or an error occurred.</p>';
        return;
    }
    container.innerHTML = `
        <div class="weather-block">
            <h3>${data.name}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Condition: ${data.weather[0].description}</p>
        </div>
    `;
}

// Обработчик кнопки "Get Weather"
getWeatherBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if (city) {
        const data = await fetchWeather(city);
        displayWeather(data, weatherResult);
    }
});

// Функция для отображения данных о популярных курортных городах
async function displayHotCities() {
    const hotCities = ['Dubai', 'Cancun', 'Maldives', 'Bali', 'Phuket'];
    hotCitiesBlock.innerHTML = '<p>Loading...</p>';
    hotCitiesBlock.innerHTML = ''; // Очистить перед добавлением
    for (const city of hotCities) {
        const data = await fetchWeather(city);
        if (data) {
            hotCitiesBlock.innerHTML += `
                <div class="weather-block">
                    <h3>${city}</h3>
                    <p>Temperature: ${data.main.temp}°C</p>
                </div>
            `;
        }
    }
}

// Функция для отображения данных о крупных городах России
async function displayRussiaCities() {
    const russiaCities = ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Kazan'];
    russiaCitiesBlock.innerHTML = '<p>Loading...</p>';
    russiaCitiesBlock.innerHTML = ''; // Очистить перед добавлением
    for (const city of russiaCities) {
        const data = await fetchWeather(city);
        if (data) {
            russiaCitiesBlock.innerHTML += `
                <div class="weather-block">
                    <h3>${city}</h3>
                    <p>Temperature: ${data.main.temp}°C</p>
                </div>
            `;
        }
    }
}

// Инициализация данных при загрузке страницы
displayHotCities();
displayRussiaCities();
