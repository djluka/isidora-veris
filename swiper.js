  const slider = document.querySelector('.klijenti-slider');
  const nextBtn = document.querySelector('.nxt-btn');
  const prevBtn = document.querySelector('.pre-btn');

  const card = document.querySelector('.klijenti-card');
  const cardStyle = getComputedStyle(card);
  const cardMargin = parseInt(cardStyle.marginLeft) + parseInt(cardStyle.marginRight);
  const cardWidth = card.offsetWidth + cardMargin;

  nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: cardWidth * 3, behavior: 'smooth' });
        console.log(cardWidth)

  });

  prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -cardWidth * 3, behavior: 'smooth' });
        console.log(slider.scrollBy)
  });

