const tabButtonS = document.querySelectorAll('.design-list__item');
const tabDesckriptions = document.querySelectorAll('.design__descr')
const tabImg = document.querySelectorAll('.design-images')

tabButtonS.forEach((oneParametr) => {

    oneParametr.addEventListener('click', (event) => {
        const dataValue = oneParametr.dataset.tabsHandler;

        tabDesckriptions.forEach((descr) => {
            if (descr.dataset.tabsField === dataValue) {
                descr.classList.remove('hidden')
            } else {
                descr.classList.add('hidden')
            }
        })

        tabImg.forEach((image) => {
            if (image.dataset.tabsField === dataValue) {
                image.classList.remove('hidden')
            } else {
                image.classList.add('hidden')
            }
        })

        tabButtonS.forEach((res) => {
           if (res === event.target) {
            res.classList.add('design-list__item_active')
           } else {
            res.classList.remove('design-list__item_active')
           }
        })
    })
})

