let timer;

document.getElementById("socials").addEventListener("click", () => {
    document.querySelector(".socials-popup").style.right = "5px";
    startTimer();
})

document.querySelector(".socials-popup").addEventListener("mouseenter", () => {
    clearTimeout(timer);
})

document.querySelector(".socials-popup").addEventListener("mouseleave", () => {
    startTimer();
})

function startTimer() {
    timer = setTimeout(() => {
        document.querySelector(".socials-popup").style.right = "-50px";
    }, 2000)
}
