const red = document.getElementById("red-light")
const amber = document.getElementById("amber-light")
const green = document.getElementById("green-light")
const stopBtn = document.getElementById("btn-stop")
const waitBtn = document.getElementById("btn-wait")
const goBtn = document.getElementById("btn-go")

stopBtn.addEventListener("click", function(){
    red.style.background = "rgba(255,0,0)"
    red.style.boxShadow = "0px 0px 50px 20px rgb(255,0,0)"
    amber.style.background = ("rgb(240, 163, 10)")
    amber.style.boxShadow = ""
    green.style.background = ("rgba(0, 255, 0, 0.2)")
    green.style.boxShadow = ""
})

waitBtn.addEventListener("click", function(){
    red.style.background = ("rgba(255, 0, 0, 0.5)")
    red.style.boxShadow = ""
    green.style.background = ("rgba(0, 255, 0, 0.2)")
    green.style.boxShadow = ""
    amber.style.background = "rgb(240, 163, 10)"
    amber.style.boxShadow = "0px 0px 50px 20px rgb(240, 163, 10)"
})

goBtn.addEventListener("click", function(){
    green.style.background = "rgba(0,255,0)"
    green.style.boxShadow = "0px 0px 50px 20px rgb(0,255,0)"
    red.style.background = ("rgba(255, 0, 0, 0.5)")
    red.style.boxShadow = ""
    amber.style.background = ("rgb(240, 163, 10)")
    amber.style.boxShadow = ""

})