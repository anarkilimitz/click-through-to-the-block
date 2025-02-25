"use strict";
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Удаляем класс active у всех кнопок
      document.querySelectorAll('.nav-button').forEach(btn => {
        btn.classList.remove('active');
      });

      // Добавляем класс active текущей кнопке
      this.classList.add('active');
    }
  });
});
