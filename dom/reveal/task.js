const elements = document.querySelectorAll(".reveal");

var isInViewport = function (el) {
    const viewportHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;

    return elementTop < viewportHeight && elementBottom > 0;
}

const setActive = function () {
    elements.forEach(el => {
        if (isInViewport(el)) {
            el.classList.add('reveal_active');
        } else {
            el.classList.remove('reveal_active');
        }
    });
}

window.addEventListener('scroll', setActive);