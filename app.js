document.addEventListener('DOMContentLoaded', () => {
  const scroll = document.getElementById('phaseScroll');
  const dots = document.getElementById('phaseDots');
  if (!scroll || !dots) return;

  const dotBtns = [...dots.querySelectorAll('.phase-dot')];
  const cards = [...scroll.querySelectorAll('.phase-card')];

  const setActive = (index) => {
    dotBtns.forEach((d, i) => d.classList.toggle('active', i === index));
  };

  dotBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const i = Number(btn.dataset.index);
      const card = cards[i];
      if (card) scroll.scrollTo({ left: card.offsetLeft - scroll.offsetLeft, behavior: 'smooth' });
    });
  });

  scroll.addEventListener('scroll', () => {
    const center = scroll.scrollLeft + scroll.clientWidth / 2;
    let nearest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(center - cardCenter);
      if (dist < minDist) { minDist = dist; nearest = i; }
    });
    setActive(nearest);
  }, { passive: true });
});
