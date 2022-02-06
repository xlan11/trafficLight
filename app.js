const red = document.getElementById("red-light")
const amber = document.getElementById("amber-light")
const green = document.getElementById("green-light")
const stopBtn = document.getElementById("btn-stop")
const waitBtn = document.getElementById("btn-wait")
const goBtn = document.getElementById("btn-go")

function lightsOff(){
    //clear red light
    red.style.background = ("rgba(255, 0, 0, 0.5)")
    red.style.boxShadow = ""
    //clear amber light
    amber.style.background = ("rgba(240, 163, 10, 0.5)")
    amber.style.boxShadow = ""
    // clear green light
    green.style.boxShadow = ""
    green.style.background = ("rgba(0, 255, 0, 0.2)")
}

stopBtn.addEventListener("click", function(){
    lightsOff()
    red.style.background = "rgba(255,0,0)"
    red.style.boxShadow = "0px 0px 50px 20px rgb(255,0,0)"
})

waitBtn.addEventListener("click", function(){
    lightsOff()
    amber.style.background = "rgb(240, 163, 10)"
    amber.style.boxShadow = "0px 0px 50px 20px rgb(240, 163, 10)"
})

goBtn.addEventListener("click", function(){
    lightsOff()
    green.style.background = "rgba(0,255,0)"
    green.style.boxShadow = "0px 0px 50px 20px rgb(0,255,0)"
})