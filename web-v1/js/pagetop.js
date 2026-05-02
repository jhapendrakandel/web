document.addEventListener('DOMContentLoaded', () => {
    const pageTop = document.getElementById('page-top');

    if (pageTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                pageTop.style.display = 'block';
            } else {
                pageTop.style.display = 'none';
            }
        });

        pageTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
