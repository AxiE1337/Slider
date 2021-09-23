
const btnLeft = document.querySelector('#btn-left')
const btnRight = document.querySelector('#btn-right')
const img = document.querySelector('#img')

const imgData = [
    'imgs/pexels-andrei-tanase-1271620.jpg',
    'imgs/pexels-lachlan-ross-6510344.jpg',
    'imgs/pexels-luca-paul-dross-4129849.jpg',
    'imgs/pexels-todd-trapani-2754200.jpg',
    'imgs/pexels-matt-hardy-2308893.jpg',
    'imgs/pexels-tatiana-614500.jpg',
]
setInterval(nextImgRight, 8000)
btnRight.addEventListener('click', nextImgLeft)
btnLeft.addEventListener('click', nextImgRight)

let imgIndex = 0

function nextImgLeft () {
    imgIndex++
    if (imgData[imgIndex] === undefined) {
        img.src = imgData[imgIndex = 0]
    }
    img.src = imgData[imgIndex]
}

function nextImgRight () {
    imgIndex--
    if (imgData[imgIndex] === undefined) {
        img.src = imgData[imgIndex = imgData.length - 1]
    } else img.src = imgData[imgIndex]
    
}