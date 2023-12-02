

// Slide

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'fade',
        rewind: true,
    });

    splide.mount();
});


// menu

document.getElementById("menu-j").addEventListener("click", onclick)
let hadijan = 1
function onclick() {
    if (hadijan == 1) {
        document.getElementById("menu-show").classList.add("--show")
        hadijan = 2
    }
}
document.getElementById("menu-close").addEventListener("click", () => {
    document.getElementById("menu-show").classList.remove("--show")
    hadijan = 1
})
