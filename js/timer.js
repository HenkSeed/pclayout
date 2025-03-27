const hoursBlock = document.querySelector('.timer__hours')
const minutesBlock = document.querySelector('.timer__minutes')
const secondsBlock = document.querySelector('.timer__seconds')
const daysBlock = document.querySelector('.timer__days')

let interval

const seconsdWords = ['Секунда', 'Секунды', 'Секунд']
const minuteWords = ['Минута', 'Минуты', 'Минут']
const hourWords = ['Час', 'Часа', 'Часов']
const dayWords = ['День', 'Дня', 'Дней']

const wordsRender = (value, words) => {
    // Убираем случайный минус и берём только два последних разряда (от них зависит окончание)
    value = Math.abs(value) % 100
    if (value >= 11 && value <= 19) return words[2]

    const lastDigit = value % 10

    if (lastDigit === 1) return words[0]
    if (lastDigit >= 2 && lastDigit <= 4) return words[1]
    return words[2]
}

const updateTimer = () => {
    const date = new Date()
    const dateDeadline = new Date(2025, 2, 28, 15, 41)

    const timeRemaining = (dateDeadline - date) / 1000

    const seconds = Math.floor(timeRemaining % 60)
    const minutes = Math.floor(timeRemaining / 60) % 60
    const hours = Math.floor(timeRemaining / 60 / 60) % 24
    const days = Math.floor(timeRemaining / 60 / 60 / 24)

    // Форматированные значения (добавляется в начало ноль, если величина одноразрядная)
    const fSeconds = seconds < 10 ? '0' + seconds : seconds
    const fMinuts = minutes < 10 ? '0' + minutes : minutes
    const fHours = hours < 10 ? '0' + hours : hours
    const fDays = days < 10 ? '0' + days : days

    // Выводим результат на страницу
    secondsBlock.textContent = fSeconds
    minutesBlock.textContent = fMinuts
    hoursBlock.textContent = fHours
    daysBlock.textContent = fDays

    // Выводим слово "Секунды" под количеством секунд в требуемом склонении
    secondsBlock.nextElementSibling.textContent = wordsRender(
        seconds,
        seconsdWords
    )

    // Слово "Минуты"
    minutesBlock.nextElementSibling.textContent = wordsRender(
        minutes,
        minuteWords
    )

    // Слово "Часы"
    hoursBlock.nextElementSibling.textContent = wordsRender(hours, hourWords)

    // Слово "Дни"
    daysBlock.nextElementSibling.textContent = wordsRender(days, dayWords)

    // Если время вышло, то останавливаем таймер и "обнуляем" значения
    if (timeRemaining <= 0) {
        clearInterval(interval)
        daysBlock.textContent = '00'
        hoursBlock.textContent = '00'
        minutesBlock.textContent = '00'
        secondsBlock.textContent = '00'

        // Делаем числа таймера красными при остановке таймера
        daysBlock.style.color = '#FF0000'
        hoursBlock.style.color = '#FF0000'
        minutesBlock.style.color = '#FF0000'
        secondsBlock.style.color = '#FF0000'
    }
}

updateTimer()
interval = setInterval(updateTimer, 500)
