document.addEventListener("DOMContentLoaded", function () {
    fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://blog.cytronicoder.com/rss.xml"
    )
        .then((response) => response.json())
        .then((data) => {
            const container = document.getElementById("rssContent");
            container.innerHTML = "";
            data.items.slice(0, 5).forEach((item) => {
                const entry = document.createElement("div");
                const date = new Date(item.pubDate);
                entry.className = "rss-entry";
                entry.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a> - ${date.toLocaleDateString()}`;
                container.appendChild(entry);
            });
        })
        .catch((error) => {
            document.getElementById("rssContent").innerHTML =
                "Error loading feed.";
            console.error("Error fetching RSS feed:", error);
        });
});
