import OPEN_WEATHER_APP_ID from "./js/keys.js";
const dataFilePath = 'data/city.list.json';
let cityMap = {};
var city;
let cityInput = document.getElementById('cityInput');
let submitButton = document.getElementById('submitButton');

function handleInput() {
    // Enable the submit button only if the entered city is in the cityMap
    submitButton.disabled = !cityMap[cityInput.value];
}

function submitForm(e) {
    e.preventDefault();
    city = cityInput.value;
    console.log(city);
    fetchWeatherData(city);
    getToken()
        .then(token => {
            document.getElementById("current").innerText = "Current city: " + city;
            fetchWeatherData(city);
            renderMap(city, token);
        })
        .catch(error => {
            console.error('Error fetching Mapbox token:', error);
        });
}

function fetchCityData() {
    return fetch(dataFilePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${dataFilePath}`);
            }
            return response.json();
        })
        .then(data => {
            for (let city of data) {
                cityMap[city.name] = city.coord;
            }
        });
}

function fetchWeatherData(cityName) {
    if (!cityMap[cityName]) {
        console.error(`City "${cityName}" not found in cityMap.`);
        return;
    }

    let filteredForecast;

    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${cityMap[cityName].lat}&lon=${cityMap[cityName].lon}&appid=${OPEN_WEATHER_APP_ID}` +
        `&units=imperial`)
        .then(data => data.json())
        .then(fiveDayForecast => {
            const groupedForecast = groupForecastByDay(fiveDayForecast.list);
            filteredForecast = Object.values(groupedForecast);
            appendForecastCards(filteredForecast);
        })
        .catch(error => {
            console.error(error);
        });
}

function groupForecastByDay(forecastData) {
    return forecastData.reduce((groupedData, item) => {
        const date = new Date(item.dt * 1000).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        });
        groupedData[date] = groupedData[date] || item;
        return groupedData;
    }, {});
}


function appendForecastCards(filteredForecast) {
    const forecastCardsContainer = document.querySelector('.forecast-cards');
    forecastCardsContainer.innerHTML = '';

    filteredForecast.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');
        cardHeader.textContent = new Date(item.dt * 1000).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.innerHTML = `
            <p>Temperature: ${item.main.temp} F</p>
            <p>Description: ${item.weather[0].description}</p>
            <p>Humidity: ${item.main.humidity} %</p>
            <p>Wind: ${item.wind.speed} m/s</p>
            <p>Pressure: ${item.main.pressure} hPa</p>
        `;

        card.appendChild(cardHeader);
        card.appendChild(cardBody);

        forecastCardsContainer.appendChild(card);
    });
}

function renderMap(cityName, token) {
    mapboxgl.accessToken = token;
    geocode(cityName, token).then(result => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: result,
            zoom: 9,
        });

        console.log("result", result);
        const marker = new mapboxgl.Marker({draggable: true})
            .setLngLat(result)
            .addTo(map);

        marker.on('dragend', function () {
            const newLngLat = marker.getLngLat();
            const arr = newLngLat.toArray();
            const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${arr[0]},${arr[1]}.json?access_token=${token}`;
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.features && data.features.length > 0) {
                        const placeName = data.features[0].place_name;
                        const components = placeName.split(',');
                        const parsedCity = components[components.length - 3].trim();
                        console.log(parsedCity);
                        city = parsedCity;
                        document.getElementById("current").innerText = "Current city: " + city;
                        fetchWeatherData(city);

                    } else {
                        throw new Error('No features found for the given coordinates.');
                    }
                })
                .catch(error => {
                    console.error('Error during reverse geocoding:', error);
                    throw error;
                });
        });
    });
}

function getToken() {
    return fetch('api_config.json')
        .then(response => response.json())
        .then(data => {
            return data.mapbox_token;
        })
        .catch(error => {
            console.error('Error reading JSON file:', error);
            throw error; // Propagate the error to the next catch
        });
}

fetchCityData()
    .then(() => {
        getToken()
            .then(token => {
                city = "Dallas"
                document.getElementById("current").innerText = "Current city: " + city;
                fetchWeatherData(city);
                renderMap(city, token);
            })
            .catch(error => {
                console.error('Error fetching Mapbox token:', error);
            });
    })
    .catch(error => {
        console.error('Error fetching city data:', error);
    });
