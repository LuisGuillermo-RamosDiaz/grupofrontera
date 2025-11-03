document.addEventListener("DOMContentLoaded", function () {
    let userScrolled = false;

    window.addEventListener('scroll', function () {
        userScrolled = true;
    });

    setTimeout(() => {
        if (!userScrolled) {
            window.scrollTo({
                top: document.body.scrollHeight,
            });
        }
    }, 3000);
});
