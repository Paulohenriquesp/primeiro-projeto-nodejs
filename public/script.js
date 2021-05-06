const modalOverlay = document.querySelector(`.modal-overlay`);
const cards = document.querySelectorAll(`.card`);

for (let card of cards) {
  card.addEventListener(`click`, function () {
    const videoId = card.getAttribute("Id");
    window.location.href = `video?id=${videoId}`;
  });
}
