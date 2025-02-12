async function fetchWeather() {
    const _0xkey = "\x30\x63\x36\x38\x65\x66\x62\x36\x33\x36\x64\x30\x34\x30\x64\x39\x61\x63\x64\x31\x31\x35\x37\x31\x30\x32\x32\x31\x32\x30\x36";
    const _0xurl = "https://api.weatherapi.com/v1/current.json?key=" + _0xkey + "&q=auto:ip";
    const _0xresp = await fetch(_0xurl);
    const _0xdata = await _0xresp.json();
    document.getElementById('weatherWidget').textContent =
        _0xdata.location.name + ": " + _0xdata.current.temp_c + "°C, " + _0xdata.current.condition.text;
}

fetchWeather();
