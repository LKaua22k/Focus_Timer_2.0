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
        let minutes = Number(minutesDisplay.textContent)
        seconds = 0

        updateDisplay(String(minutes + 5),seconds)


}

function lessMinutes(){
        let minutes = Number(minutesDisplay.textContent)

        if(minutes <=0 && seconds <= 0){
            updateDisplay(minutes,seconds)
            return
        }

        seconds = 0

        updateDisplay(String(minutes - 5),seconds)

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