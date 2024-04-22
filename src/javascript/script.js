$(document).ready(function() {
    $('#botao_mobile').on('click', function () {
        $('#menu_mobile').toggleClass('ativo');
        $('#botao_mobile').find('i').toggleClass('fa-x');
    });
});

window.addEventListener('scroll', function () {
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 500);
})