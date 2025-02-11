document.getElementById('googleSearchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = document.getElementById('googleSearchInput').value;
    window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query);
});
