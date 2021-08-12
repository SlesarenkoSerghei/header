// $(document).ready(function () {
//     $('.header__burger').click(function (event) {
//         $('.header__burger,.header__menu').toggleClass('active');
//         $('body').toggleClass('lock');
//     });
// });

let burger = document.body.querySelector('.header__burger').onclick = function(event) {
    console.log(this);
    this.classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.body.classList.toggle('lock');

    function toggleActive(elem) {
        elem.classList.toggle('active');
    }
};


