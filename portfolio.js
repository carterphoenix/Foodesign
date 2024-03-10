// carousel for the portfolio.html

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;

            // Toggle the collapsed class
            this.parentNode.classList.toggle('collapsed');

            // Toggle the icon rotation
            const icon = this.querySelector('.accordion-icon');
            icon.textContent = this.parentNode.classList.contains('collapsed') ? '+' : '-';
            
            // Toggle the content max-height
            content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
        });
    });
});
