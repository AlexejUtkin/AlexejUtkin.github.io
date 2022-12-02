
// Бургер меню
const burger = document.querySelector('.burger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
})

// Автозаполнение прогресса
const counters = document.querySelectorAll('.skills__progress-interest'),
      lines = document.querySelectorAll('.skills__progress-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

