let about = document.getElementById("about-button")
let greetings = document.getElementById("greetings")
console.log(about)
console.log(greetings)
about.addEventListener('click', function() {
    console.log("hi")
    greetings.classList.add("rotate-animation");
    setTimeout(()=>{
        greetings.classList.remove("rotate-animation");
    }, 1000)
})
