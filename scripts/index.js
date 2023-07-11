// Coutdows
const play = document.querySelector('.play')
const stop = document.querySelector('.stop')
const add = document.querySelector('.more')
const less = document.querySelector('.less')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let Timeout 

// Button
const forest = document.querySelector('.forest')
const rain = document.querySelector('.rain')
const coffe = document.querySelector('.coffeshop')
const fire = document.querySelector('.fireplace')

function remo(btn,color){
    btn.style.backgroundColor = color
}


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

        if(minutes >= 100){
            minutes = 100
        }

        updateDisplay(minutes, 0)
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

forest.addEventListener('click', () =>{
    forest.classList.add('active')
    rain.classList.remove('active')
    coffe.classList.remove('active')
    fire.classList.remove('active')
    remo(forest, '#029D53')
    rain.style.backgroundColor = '#E1E1E6'
    coffe.style.backgroundColor = '#E1E1E6'
    fire.style.backgroundColor = '#E1E1E6'
} )

rain.addEventListener('click', () =>{
    forest.classList.remove('active')
    rain.classList.add('active')
    coffe.classList.remove('active')
    fire.classList.remove('active')
    remo(rain,'#02789D')
    forest.style.backgroundColor = '#E1E1E6'
    coffe.style.backgroundColor = '#E1E1E6'
    fire.style.backgroundColor = '#E1E1E6'
} )

coffe.addEventListener('click', () =>{
    forest.classList.remove('active')
    rain.classList.remove('active')
    coffe.classList.add('active')
    fire.classList.remove('active')
    remo(coffe,'#9D3A02')
    forest.style.backgroundColor = '#E1E1E6'
    rain.style.backgroundColor = '#E1E1E6'
    fire.style.backgroundColor = '#E1E1E6'
} )

fire.addEventListener('click', () =>{
    forest.classList.remove('active')
    rain.classList.remove('active')
    coffe.classList.remove('active')
    fire.classList.add('active')
    remo(fire,'#9D0B02')
    rain.style.backgroundColor = '#E1E1E6'
    coffe.style.backgroundColor = '#E1E1E6'
    forest.style.backgroundColor = '#E1E1E6'
} )

