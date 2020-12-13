window.onload = function () {
    let img = document.querySelector('.image');
    let percent = document.querySelector('.percent');

    let loading = 0;
    let int = setInterval(blurring, 30);

    function blurring() {
        loading++;

        if (loading > 99) {
            clearInterval(int)
        }

        let x = 100 - loading;

        img.style.filter = `blur(${x}px)`;
        percent.innerText = `${loading}%`;
        percent.style.opacity = 1 - loading / 100;
    }
};
