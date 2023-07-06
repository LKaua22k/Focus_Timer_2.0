const play = document.querySelector('.play')
const stop = document.querySelector('.stop')
const add = document.querySelector('.more')
const less = document.querySelector('.less')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let Timeout


function countdown(){
    Timeout = setTimeout(() => {
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)

        if(seconds <= 0){
            seconds = 10

            --minutes
        }

        updateDisplay(minutes,String(seconds -1))
        countdown()
    },1000) 
}

function updateDisplay(minutes , seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

play.addEventListener('click', function(){
    alert("play")
    countdown()
})

stop.addEventListener('click', function(){
    alert("Stop")
    clearInterval(Timeout)
})

add.addEventListener('click', function(){
    alert("add")
})

less.addEventListener('click', function(){
    alert("less")
})