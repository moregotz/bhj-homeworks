const fontSizeBtns = document.querySelectorAll('.font-size');
const textColorBtns = document.querySelectorAll('[data-text-color]');
const bgColorBtns = document.querySelectorAll('[data-bg-color]');


const bookText = document.querySelectorAll('.book');

fontSizeBtns.forEach(btn => {
    btn.addEventListener('click', function (b) {

        b.preventDefault();

        fontSizeBtns.forEach(btn => btn.classList.remove('font-size_active'));

        btn.classList.add('font-size_active');

        const fontSize = btn.dataset.size;

        bookText.forEach(t => {
            t.classList.remove('book_fs-small', 'book_fs-big');

            if (fontSize === 'small') {
                t.classList.add('book_fs-small');
            } else if (fontSize === 'big') {
                t.classList.add('book_fs-big');
            }
        });
    });
})

textColorBtns.forEach(btn => {
    btn.addEventListener('click', function (b) {

        b.preventDefault();

        textColorBtns.forEach(btn => btn.classList.remove('color_active'));

        btn.classList.add('color_active');

        const color = btn.dataset.textColor;

        bookText.forEach(t => {
            t.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

            if (color === 'whitesmoke') {
                t.classList.add('book_color-whitesmoke');
            } else if (color === 'gray') {
                t.classList.add('book_color-gray');
            } else {
                t.classList.add('book_color-black');
            }
        });

    });
});

bgColorBtns.forEach(btn => {
    btn.addEventListener('click', function (b) {
        bgColorBtns.forEach(btn => btn.classList.remove('color_active'));

        btn.classList.add('color_active');

        b.preventDefault();

        const color = btn.dataset.bgColor;

        bookText.forEach(t => {
            t.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');

            if (color === 'white') {
                t.classList.add('book_bg-white');
            } else if (color === 'gray') {
                t.classList.add('book_bg-gray');
            } else {
                t.classList.add('book_bg-black');
            }
        });

    });
});

