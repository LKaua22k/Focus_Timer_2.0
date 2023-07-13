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

// Audio
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
const timerEnd = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
const forestSong = new Audio('./audio/Floresta.wav');
const rainSong = new Audio('./audio/Chuva.wav');
const coffeSong = new Audio('./audio/Cafeteria.wav');
const fireSong = new Audio('./audio/Lareira.wav');

function remo(btn,color){
    btn.style.backgroundColor = color
}

function countdown(){
    Timeout = setTimeout(() => {
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)

        if(minutes <= 0 && seconds <= 0){
            timerEnd.play()
            minutes = prompt("novo")
            updateDisplay(minutes , seconds)
            return
        }

        if(seconds <= 0){
            seconds = 60

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
        countdown()
        buttonPressAudio.play()
})

stop.addEventListener('click', function(){
    clearInterval(Timeout)
    buttonPressAudio.play()
    rain.style.backgroundColor = '#E1E1E6'
    forest.style.backgroundColor = '#E1E1E6'
    coffe.style.backgroundColor = '#E1E1E6'
    fire.style.backgroundColor = '#E1E1E6'
    rainSong.pause()
    forestSong.pause()
    coffeSong.pause()
    fireSong.pause()
})

add.addEventListener('click', function(){
    moreMinutes()
    buttonPressAudio.play()
})

less.addEventListener('click', function(){
    lessMinutes()
    buttonPressAudio.play()
})

forest.addEventListener('click', () =>{
    forest.classList.add('active')
    rain.classList.remove('active')
    coffe.classList.remove('active')
    fire.classList.remove('active')
    remo(forest, '#029D53')
    forestSong.play()
    rainSong.pause()
    coffeSong.pause()
    fireSong.pause()
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
    rainSong.play()
    forestSong.pause()
    coffeSong.pause()
    fireSong.pause()
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
    coffeSong.play()
    rainSong.pause()
    forestSong.pause()
    fireSong.pause()
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
    fireSong.play()
    rainSong.pause()
    forestSong.pause()
    coffeSong.pause()
    rain.style.backgroundColor = '#E1E1E6'
    coffe.style.backgroundColor = '#E1E1E6'
    forest.style.backgroundColor = '#E1E1E6'
} )

