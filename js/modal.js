const modalBtn = document.querySelector('.modal__button')
const courseBtn = document.querySelector('.course__button')

const modal = document.querySelector('.modal')
const modalInner = document.querySelector('.modal__inner')

modalInner.insertAdjacentHTML(
    'afterbegin',
    `
    <span style="position:absolute;top:10px;right:10px;font-size:20px;cursor:pointer;">X</span>
    `
)

modalInner.style.position = 'relative'

const cross = modalInner.querySelector('span')
cross.addEventListener('click', () => {
    modal.style.display = ''
})

modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
})

courseBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
})

modal.addEventListener('click', (event) => {
    if (!event.target.closest('.modal__inner')) {
        modal.style.display = ''
    }
})
