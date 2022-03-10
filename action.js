// functions

function showNcards(n) {
    const mainContainer = document.querySelector(`${mainContainerClass}`);
    const sliderContainer = document.querySelector(`${sliderContainerClass}`);
    const slides = document.querySelectorAll(`${slideClass}`);

    if (n > slides.length) {
        n = slides.length;
    }

    if (n < 1) {
        n = 1;
    }

    const mainContainerWidth = mainContainer.offsetWidth;

    // if (n * slides[0].offsetWidth > mainContainerWidth) {
    //     while (n * slides[0].offsetWidth > mainContainerWidth) {
    //         n -= 1;

    //         if (n < 1) {
    //             n = 1;
    //             break;
    //         }
    //     }
    // }

    const slideWidth = mainContainerWidth / n;
    const slideContainerWidth = slideWidth * slides.length;

    sliderContainer.style.width = `${slideContainerWidth}px`;

}

function moveSlide(direction, numVisibleSlides=numVisibleCards) {
    const sliderContainer = document.querySelector(`${sliderContainerClass}`);
    const slides = document.querySelectorAll(`${slideClass}`);

    const slideWidth = slides[0].offsetWidth;
    const sliderContainerWidth = sliderContainer.offsetWidth;

    const totalSlides = slides.length;
    const currentSlideIndex = Math.round(Math.abs(currentXdisplacement) / slideWidth);

    if (direction === 'left' && currentSlideIndex < totalSlides - numVisibleSlides) {
        sliderContainer.style.transform = `translateX(${currentXdisplacement - slideWidth}px)`;
        currentXdisplacement -= slideWidth;
        updateSlideStatus(slideClass, currentXdisplacement, numVisibleSlides, 'left');
    } else if (direction === 'right' && currentSlideIndex > 0) {
        sliderContainer.style.transform = `translateX(${currentXdisplacement + slideWidth}px)`;
        currentXdisplacement += slideWidth;
        updateSlideStatus(slideClass, currentXdisplacement, numVisibleSlides, 'right');
    } else {
        console.log('Move to nowhere');
    }

    console.log(`X displacement: ${currentXdisplacement}`);
    console.log(`slide width: ${slideWidth}`);
    console.log(`slider container width: ${sliderContainerWidth}`);
    console.log(`diff: ${Math.abs(currentXdisplacement) < sliderContainerWidth - (slideWidth * numVisibleSlides)}`);
}

async function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}

function getActiveSlideIndex(slides) {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].dataset.active === 'true') {
            return i + 1;
        }
    }
}

function updateSlideStatus(slideSelector, currentXdisplacement, numVisibleSlides, slideDirection='left') {
    const slides = document.querySelectorAll(`${slideSelector}`);

    let activeFirstSlideIndex = Math.round(Math.abs(currentXdisplacement) / slides[0].offsetWidth);

    let prevSlideIndex = slideDirection == 'left' ? activeFirstSlideIndex - 1 : activeFirstSlideIndex + numVisibleSlides;

    const activeSlideIndexes = [];

    for (let i = 0; i < numVisibleSlides; i++) {
        activeSlideIndexes.push(activeFirstSlideIndex + i);
    }

    if (prevSlideIndex >= 0) {
        slides[prevSlideIndex].dataset.active = false;
        slides[prevSlideIndex].dataset.visited = true;
    }

    for (let i of activeSlideIndexes) {
        slides[i].dataset.active = true;
    }
}

async function move2NthSlide(slideIndex, slideSelector) {
    const slides = document.querySelectorAll(`${slideSelector}`);
    const activeSlideIndex = getActiveSlideIndex(slides);

    const gap = slideIndex - activeSlideIndex;

    if (gap > 0) {
        for (let i = 0; i < gap; i++) {
            const prevSlide = slides[activeSlideIndex + i - 1];
            prevSlide.dataset.active = false;
            prevSlide.dataset.visited = true;
            const nextSlide = slides[activeSlideIndex + i];
            nextSlide.dataset.active = true;
            syncPaginationNSlides(slideSelector, paginationCirclesClass);
            moveSlide('left');
            await sleep(0.5);
        }
    } else if (gap === 0) {
        return;
    } else {
        for (let i = 0; i < Math.abs(gap); i++) {
            const prevSlide = slides[activeSlideIndex - i - 1];
            prevSlide.dataset.active = false;
            prevSlide.dataset.visited = true;
            const nextSlide = slides[activeSlideIndex - i - 2];
            nextSlide.dataset.active = true;
            syncPaginationNSlides(slideSelector, paginationCirclesClass);
            moveSlide('right');
            await sleep(0.5);
        }
    }

}

// fade out animation
function fadeOut(element, direction, duration, delay = 0) {
    if (direction === 'left') {
        element.style.animation = `fadeOutLeft ${duration}ms ease-in-out forwards`;
        element.style.animationDelay = `${delay}ms`;
    } else if (direction === 'right') {
        element.style.animation = `fadeOutRight ${duration}ms ease-in-out forwards`;
        element.style.animationDelay = `${delay}ms`;
    } else if (direction === 'top') {
        element.style.animation = `fadeOutTop ${duration}ms ease-in-out forwards`;
        element.style.animationDelay = `${delay}ms`;
    } else if (direction === 'bottom') {
        element.style.animation = `fadeOutBottom ${duration}ms ease-in-out forwards`;
        element.style.animationDelay = `${delay}ms`;
    }
}

// fade in animation
function fadeIn(element, direction, duration, delay = 0) {
    if (direction === 'left') {
        element.style.animation = `fadeInLeft ${duration}ms ease-in-out forwards`;
        element.style.animationDelay = `${delay}ms`;
    } else if (direction === 'right') {
        element.style.animation = `fadeInRight ${duration}ms ease-in-out forwards`;
        element.style.animationDelay = `${delay}ms`;
    } else if (direction === 'top') {
        element.style.animation = `fadeInTop ${duration}ms ease-in-out forwards`;
        element.style.animationDelay = `${delay}ms`;
    } else if (direction === 'bottom') {
        element.style.animation = `fadeInBottom ${duration}ms ease-in-out forwards`;
        element.style.animationDelay = `${delay}ms`;
    }
}

async function fadeAll(elementSelector, fadeType, direction, duration, delay = 0) {
    const elements = document.querySelectorAll(`${elementSelector} *[data-fade]`);
    for (let i = elements.length - 1; i >= 0; i--) {
        let element = elements[i];
        if (fadeType === 'in') {
            element.dataset.fade = 'in';
            fadeIn(element, direction, duration, delay < duration * 0.5 ? delay += duration * 0.1 : duration * 0.5);
        } else if (fadeType === 'out') {
            element.dataset.fade = 'out';
            fadeOut(element, direction, duration, delay < duration * 0.5 ? delay += duration * 0.1 : duration * 0.5);
        }
    }

    await sleep(duration * 1.5 / 1000);
    return;
}

// variables

const mainContainerClass = '.personality-type--input-main-container';
const sliderContainerClass = '.personality-type--input-main-container .slider-container';
const slideContainerClass = '.personality-type--input-main-container .slide-container';
const slideClass = '.personality-type--input-main-container .slide';
const paginationClass = '.personality-type--input-main-container .pagination-container';
const paginationCirclesClass = '.personality-type--input-main-container .pagination-container .pagination-circle';

let currentXdisplacement = 0;
let score = 0;
let quesScores = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0
}

let numVisibleCards = 2;

// run functions

showNcards(numVisibleCards);

const sliderMainContainer = document.querySelector(mainContainerClass);

const sliderResizeListener = new ResizeObserver(entries => {
    entries.forEach(entry => {
        showNcards(numVisibleCards);
    });
});

sliderResizeListener.observe(sliderMainContainer);
