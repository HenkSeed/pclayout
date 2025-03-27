const modalBtn = document.querySelector('.modal__button')
const courseBtn = document.querySelector('.course__button')

const modal = document.querySelector('.modal')
const modalInner = document.querySelector('.modal__inner')

const addCross = () => {
    modalInner.style.position = 'relative'
    modalInner.insertAdjacentHTML(
        'afterbegin',
        `
    <span style="position:absolute;top:10px;right:10px;font-size:20px;cursor:pointer;" class="modal__cross">X</span>
    `
    )
}

const revoveCross = () => {
    modalInner.removeChild(modalInner.querySelector('.modal__cross'))
    modalInner.style.position = ''
}

// // Если кликнули на крестик, то закрываем модальное окно
// modalInner.addEventListener('click', (event) => {
//     if (event.target.classList.contains('modal__cross')) {
//         closeModal()
//     }
// })

// Открываем модальное окно при клике на кнопку
modalBtn.addEventListener('click', () => {
    addCross()
    modal.style.display = 'flex'
})

// Открываем модальное окно при клике на кнопку
courseBtn.addEventListener('click', () => {
    addCross()
    modal.style.display = 'flex'
})

// Функция закрытия модального окна
const closeModal = () => {
    revoveCross()
    // Скрываем модальное окно
    modal.style.display = ''
}

// Если кликнули за пределами модального окна,
// или если кликнули на крестик,
// то закрываем модальное окно
modal.addEventListener('click', (event) => {
    if (
        !event.target.closest('.modal__inner') ||
        event.target.classList.contains('modal__cross')
    ) {
        closeModal()
    }
})
