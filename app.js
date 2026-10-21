// Toxa Ta'lim Interactive Script
function showToast(msg) {
  const toast = document.getElementById('eduToast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

function enrollCourse(title) {
  showToast(title + ' kursiga muvaffaqiyatli yozildingiz! Xush kelibsiz.');
}

document.addEventListener('DOMContentLoaded', () => {
  const pills = document.querySelectorAll('.pill');
  const cards = document.querySelectorAll('.course-card');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const cat = pill.getAttribute('data-cat');
      cards.forEach(card => {
        if (cat === 'all' || card.getAttribute('data-cat') === cat) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  const formTrial = document.getElementById('formTrial');
  if (formTrial) {
    formTrial.addEventListener('submit', e => {
      e.preventDefault();
      showToast('Tabriklaymiz! Birinchi bepul dars uchun profilingiz faollashtirildi.');
      formTrial.reset();
    });
  }
});