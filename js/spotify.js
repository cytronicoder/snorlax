document.addEventListener("DOMContentLoaded", function () {
    const spotifyIframe = document.querySelector("#spotifySection iframe");

    const snorlaxPlaylist = "https://open.spotify.com/embed/playlist/1jsCNxo2yjibsgN2PSAaom";
    const dittoPlaylist = "https://open.spotify.com/embed/playlist/59QPuNDQmYQgqjCMLkMEFz";

    function updateSpotifyPlaylist() {
        const savedTheme = localStorage.getItem('theme') || 'snorlax';
        if (savedTheme === 'snorlax') {
            spotifyIframe.src = snorlaxPlaylist;
        } else if (savedTheme === 'ditto') {
            spotifyIframe.src = dittoPlaylist;
        }
    }

    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === "attributes" && mutation.attributeName === "class") {
                updateSpotifyPlaylist();
            }
        }
    });

    observer.observe(document.body, { attributes: true });
    updateSpotifyPlaylist();
});
