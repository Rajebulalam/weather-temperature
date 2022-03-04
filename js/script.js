// API key
const API_KEY = `b6653b3f9b520214796e28359e383e65`;

// Search Temperature
const searchTemperature = () => {
    // Get Search value
    const cityName = document.getElementById('search-field');
    const searchText = cityName.value;
    cityName.value = '';

    // Search by Input Text
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}&units=metric`;
    console.log(url);
    if (searchText === '') {
        alert('Please!! Write Something To Display');
    }
    else {
        fetch(url)
            .then(res => res.json())
            .then(data => displayTemperature(data));
    }
}

// Get id and Set Inner Text
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

// Display Teperature Details
const displayTemperature = temperature => {
    console.log(temperature);
    // Load City Name
    if (temperature.cod == 404) {
        alert('Please!! Give The Correct Name');
    } else {
        setInnerText('city-name', temperature.name);
        // Load Temperature
        setInnerText('temp', temperature.main.temp);
        // Load Climate
        setInnerText('climate', temperature.weather[0].main);

        // Set Weather Icon
        const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
        const setImg = document.getElementById('img-icon');
        setImg.setAttribute('src', url);
    }
}