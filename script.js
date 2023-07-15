const productContainers = [...document.querySelectorAll('.container_box')];
const nxtBtn = [...document.querySelectorAll('.next_button')];
const preBtn = [...document.querySelectorAll('.prev_button')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft-= containerWidth;
    })
})

const productContainer = [...document.querySelectorAll('.box_galery')];
const nextBtn = [...document.querySelectorAll('.nexti_button')];
const prveBtn = [...document.querySelectorAll('.previ_button')];

productContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    prveBtn[i].addEventListener('click', () => {
        item.scrollLeft-= containerWidth;
    })
})