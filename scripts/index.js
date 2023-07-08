const play = document.querySelector('.play')
const stop = document.querySelector('.stop')
const add = document.querySelector('.more')
const less = document.querySelector('.less')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let Timeout


function countdown(){
    Timeout = setTimeout(() => {
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)

        if(minutes <= 0 && seconds <= 0){
            minutes = prompt("novo")
            updateDisplay(minutes , seconds)
            return
        }

        if(seconds <= 0){
            seconds = 6

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

function moreMinutes(){
        let minutes = Number(minutesDisplay.textContent) + 5
        seconds = 0

        if(minutes >= 100){
            minutes = 100
        }

        updateDisplay(minutes, seconds)
}

function lessMinutes(){
        let minutes = Number(minutesDisplay.textContent) - 5

    if(minutes < 0){
        minutes = 0
    }

    updateDisplay(minutes,0)
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
    // alert("add")
    moreMinutes()
})

less.addEventListener('click', function(){
    // alert("less")
    lessMinutes()
})