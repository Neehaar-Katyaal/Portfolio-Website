// website load hone par photo ke loading effect ke liye
window.onload = function() {
    var loading_p = document.getElementById("loading-text");
    var loading_a = document.getElementById("loading-animation");
    var img = document.getElementById("profile-photo");

    let dots = 1;

    setInterval(() => {
        loading_p.innerHTML = "Loading Chad Face" + ".".repeat(dots);

        dots++;

        if(dots > 3) {
            dots = 0;
        }
    }, 400);

    setTimeout(() => {
        loading_p.style.display = "none";
        loading_a.style.display = "none";
        img.style.display = "block";
    }, 3000);
}

// menu me social anchor tag ke liye effect
const socials_anchor = document.getElementById("socials");
socials_anchor.addEventListener("click", () => {
    document.querySelector(".glow-effect").classList.add("light-effect");
    setTimeout(() => {
        document.querySelector(".glow-effect").classList.remove("light-effect");
    }, 2000);
    
})