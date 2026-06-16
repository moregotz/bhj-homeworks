let dropdownValue = document.querySelector('.dropdown__value');
let dropdownList = document.querySelector('.dropdown__list');
let dropdownItems = document.querySelectorAll('.dropdown__link');

dropdownValue.addEventListener('click', function () {
    dropdownList.classList.toggle('dropdown__list_active');
});

dropdownItems.forEach(function (link) {
    link.addEventListener('click', function (click) {
        click.preventDefault();
    })
});

dropdownItems.forEach(function (item) {
    item.addEventListener('click', function () {
        dropdownValue.textContent = item.textContent;
    })
})

document.addEventListener('click', function (click) {
    if (click.target !== dropdownList && click.target !== dropdownItems && click.target !== dropdownValue) {
        dropdownList.classList.remove('dropdown__list_active');
    }
});