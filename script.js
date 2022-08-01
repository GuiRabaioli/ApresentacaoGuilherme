
//ScroolBar

const progressBar =  document.getElementById("progressBar");

let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100; 
    progressBar.style.height = progressHeight + "%"
}

//Efect Parallax

const stars = document.getElementById("stars")
const moon = document.getElementById("moon")
const mountains_behind = document.getElementById("mountains_behind")
const text = document.getElementById("text")
const btn = document.getElementById("btn")
const mountains_front = document.getElementById("mountains_front")
const header = document.querySelector("header")

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + "px"
    moon.style.top = value * 0.7  + "px"
    mountains_behind.style.top = value * 0.5 + "px"
    mountains_front.style.top = value * 0 + "px"
    text.style.marginRight = value * 4 + "px"
    text.style.marginTop = value * 0.2 + "px"
    btn.style.marginTop = value * 1.1 + "px"
    header.style.top = value * 0.5 + "px"

})
