window.RufflePlayer = window.RufflePlayer || {};
window.RufflePlayer.config = {
    splashScreen: false,
};

let player;

function play() {
    document.getElementById("consent").classList.add("hidden");
    player.play();
    document.getElementById("game").classList.remove("hidden");
}

window.addEventListener("DOMContentLoaded", () => {
    let ruffle = window.RufflePlayer.newest();
    player = ruffle.createPlayer();
    player.style.width = 1024;
    player.style.height = 768;
    let container = document.getElementById("container");
    container.appendChild(player);
    player.addEventListener("loadeddata", () => {
        document.getElementById("loading").remove();
        document
            .getElementById("desktop")
            .classList.remove("loading");
        document.getElementById("desktop").classList.add("pointer");

        document
            .getElementById("consent")
            .classList.remove("hidden");
    });
    player
        .ruffle()
        .load(
            "https://dl.dropboxusercontent.com/scl/fi/66iozbsxmoulprjk36e8q/plosinovka.swf?rlkey=szl9rsuv2pbrz2eeb7ut5wksz&st=v5jwhfko&dl=1",
        );
});