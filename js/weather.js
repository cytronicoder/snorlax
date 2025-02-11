async function fetchWeather() {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=0c68efb636d040d9acd115710221206&q=auto:ip');
    const data = await response.json();
    document.getElementById('weatherWidget').textContent = `${data.location.name}: ${data.current.temp_c}°C, ${data.current.condition.text}`;
}

fetchWeather();
