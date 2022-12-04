let animationInited = false;

// Анимация 5000+
const INCREASE_NUMBER_ANIMATION_SPEED = 100;

function increaseNumberAnimationStep(i, element, endNumber) {
    if (i <= endNumber) {
        if (i === endNumber) element.innerText = i + '+';
        else element.innerText = i;
    };
    i += 100;
    setTimeout(increaseNumberAnimationStep, INCREASE_NUMBER_ANIMATION_SPEED, i, element, endNumber);
}

function initIncreaseNumberAnimation() {
    let element = document.querySelector('.features__clients-count');
    increaseNumberAnimationStep(0, element, 5000)
}
// initIncreaseNumberAnimation();

// Работаем над формой
document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
    if (event.target.value === 'other') {
        const formContainer = document.createElement('div');
        formContainer.classList.add('form__group');
        formContainer.classList.add('form__other-input');

        const input = document.createElement('input');
        input.placeholder = 'Введите ваш вариант';
        input.type = 'text';

        formContainer.appendChild(input);
        document.querySelector('.form form').insertBefore(formContainer, document.querySelector('.form__submit'))
    }

    const otherInput = document.querySelector('.form__other-input');
    if (event.target.value !== 'other' && otherInput) {
        document.querySelector('.form form').removeChild(otherInput)
    }
});

// Работаем над шапкой
function updateScroll() {
    if (window.scrollY > 0) {
        document.querySelector('header').classList.add('header__scrolled');
    } else {
        document.querySelector('header').classList.remove('header__scrolled');
    }
    // Для анимации 5000+
    let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
    let windowBottomPosition = window.scrollY + window.innerHeight;
    if (windowBottomPosition >= countElementPosition && !animationInited) {
        animationInited = true;
        initIncreaseNumberAnimation();
    }
}
window.addEventListener('scroll', updateScroll);

// Работаем над скроллом якоря
function addSmoothScroll(link) {
    link.addEventListener('click', onLinkClick);
}

function onLinkClick(event) {
    event.preventDefault();
    document.querySelector(event.target.getAttribute('href')).scrollIntoView({behavior: 'smooth'})
}
document.querySelectorAll('a[href^="#"]').forEach(a => addSmoothScroll(a));
addSmoothScroll(document.querySelector('.more-button'));