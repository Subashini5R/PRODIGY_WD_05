document.getElementById('fetch-weather').addEventListener('click', () => {
    const location = document.getElementById('location-input').value;
    if (location) {
        getWeather(location);
    }
});

function getWeather(location) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
}

function displayWeather(data) {
    const locationName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    document.getElementById('location-name').innerText = locationName;
    document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
    document.getElementById('description').innerText = `Conditions: ${description}`;

    document.getElementById('weather-info').style.display = 'block';
}
