const navBar = document.querySelector('.header__nav')

const links = navBar.querySelectorAll('a')

links.forEach((link) => {
    link.addEventListener('click', (target) => {
        target.preventDefault()
        console.log(seamless)
        const section = document.querySelector(link.getAttribute('href'))

        if (section) {
            // Использование библиотеки npmjs seamless-scroll-polyfill
            // для обеспечения кроссбраузерности функции скроллинга
            seamless.scrollIntoView(section, {
                behavior: 'smooth',
                block: 'start',
                inline: 'center',
            })
            // // Если не использовать библиотеки:
            // section.scrollIntoView({
            //     block: 'start',
            //     behavior: 'smooth',
            // })
        }
    })
})
