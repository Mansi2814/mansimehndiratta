let about = document.getElementById("about-button")
let greetings = document.getElementById("greetings")
about.addEventListener('click', function() {
    greetings.classList.add("rotate-animation");
    setTimeout(()=>{
        greetings.classList.remove("rotate-animation");
    }, 1000)
})
