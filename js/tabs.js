const tabButtonS = document.querySelectorAll('.design-list__item');
const tabDesckriptions = document.querySelectorAll('.design__descr');
const tabImg = document.querySelectorAll('.design-images');

const changeContent = (array, value) => {
    array.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            elem.classList.remove('hidden')
        } else {
            elem.classList.add('hidden')
        }
    })
}

tabButtonS.forEach((oneParametr) => {

    oneParametr.addEventListener('click', (event) => {
        const dataValue = oneParametr.dataset.tabsHandler;

        changeContent(tabImg, dataValue);
        changeContent(tabDesckriptions, dataValue);

        tabButtonS.forEach((btn) => {
           if (btn === event.target) {
            btn.classList.add('design-list__item_active')
           } else {
            btn.classList.remove('design-list__item_active')
           }
        })
    })
})

