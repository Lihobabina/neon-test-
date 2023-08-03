// Инициализация слайдера
var swiper = new Swiper('.swiper-container', {
    // Настройки слайдера
    allowTouchMove: true,
    loop: false,
    // Другие настройки, если есть
    slidesPerView: 1,
    // Обработчики событий после инициализации слайдера
    on: {
      init: function () {
        // Найти все кнопки "Предыдущий" и добавить обработчик клика
        var prevButtons = document.querySelectorAll('.custom-button-prev');
        prevButtons.forEach(function (button) {
          button.addEventListener('click', function () {
            swiper.slidePrev();
          });
        });
  
        // Найти все кнопки "Следующий" и добавить обработчик клика
        var nextButtons = document.querySelectorAll('.custom-button-next');
        nextButtons.forEach(function (button) {
          button.addEventListener('click', function () {
            swiper.slideNext();
          });
        });
      },
    },
  });
  