const adCases = document.querySelectorAll('.rotator__case');

if (adCases.length > 0) {
    let i = 0;

    const rotateAdCase = function () {
        adCases[i].classList.remove('rotator__case_active');

        i = (i + 1) % adCases.length;

        adCases[i].classList.add('rotator__case_active');

        const adCaseSpeed = adCases[i].dataset.speed;
        const adCaseColor = adCases[i].dataset.color;

        if (adCaseColor) {
            adCases[i].style.color = adCaseColor;
        }
        setTimeout(rotateAdCase, adCases[i].dataset.speed);
    };

    setTimeout(rotateAdCase, adCases[0].dataset.speed);
}