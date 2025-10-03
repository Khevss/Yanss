document.addEventListener('DOMContentLoaded', () => {
  let blowCount = 1;
  const blowButton = document.getElementById('blow-button');
  const blowText = document.getElementById('blow-count');
  const cakeContainer = document.getElementById('cake-container');
  const cardContainer = document.getElementById('card-container');
  const card = document.getElementById('card');
  const cardMessage = document.getElementById('card-message');
  const music = document.getElementById('bg-music');

  document.body.addEventListener('click', () => {
    music.play().catch(() => {});
  }, { once: true });

  blowButton.addEventListener('click', () => {
    blowCount++;
    blowText.textContent = `You blew ${blowCount} time(s)...`;

    if (blowCount === 3) {
      document.getElementById('candle-container').classList.add('hidden');
      cakeContainer.classList.remove('hidden');

      setTimeout(() => {
        cardContainer.classList.remove('hidden');
      }, 2000);
    }
  });

  card.addEventListener('click', () => {
    cardMessage.classList.toggle('hidden');
  });
});
