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

// projects carousel working
var track = document.querySelector(".carousel-track");

var rightbtn = document.getElementById("right-btn");
var leftbtn = document.getElementById("left-btn");

const slideWidth = 400;
var index = 0;

rightbtn.addEventListener("click", () => {
    index++;

    if(index > 3) {
        index = 0;
    }

    track.style.transform = `translateX(-${index * slideWidth}px)`;
})

leftbtn.addEventListener("click", () => {
    index--;

    if (index < 0) {
        index = 3;
    }

    track.style.transform =
        `translateX(-${index * slideWidth}px)`;

});