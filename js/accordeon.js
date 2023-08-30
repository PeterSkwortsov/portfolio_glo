const accordeon = document.querySelector('.feature-list');
const accordeonBtns = accordeon.querySelectorAll('.feature__link');
const accordeonText = accordeon.querySelectorAll('.feature-sub');

accordeonBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        accordeonBtns.forEach((buttons) => {
            buttons.classList.remove('feature__link_active');
            buttons.nextElementSibling.classList.add('hidden')
        })

        btn.classList.toggle('feature__link_active');
        btn.nextElementSibling.classList.toggle('hidden')
    })
})

