document.addEventListener('DOMContentLoaded', () => {
  const images = [
    { "front": "images/front1.jpeg", "back": "images/back1.jpeg" },
    { "front": "images/front2.jpeg", "back": "images/back2.jpeg" },
    // Add more images as needed
  ];

  const cards = [
    { "front": "Front 1", "back": "Back 1" },
    { "front": "Front 2", "back": "Back 2" },
    { "front": "Front 3", "back": "Back 3" },
    { "front": "Front 4", "back": "Back 4" },
    { "front": "Front 5", "back": "Back 5" },
    { "front": "Front 6", "back": "Back 6" },
    { "front": "Front 7", "back": "Back 7" },
    { "front": "Front 8", "back": "Back 8" },
    { "front": "Front 9", "back": "Back 9" },
    { "front": "Front 10", "back": "Back 10" }
  ];

  let currentMode = "image"; // Default mode

  const flipbook = document.querySelector('.flipbook');
  const imageBtn = document.getElementById('imageMode');
  const cardBtn = document.getElementById('cardMode');

  function createImagePage(imageData) {
    const page = document.createElement('div');
    page.classList.add('page');

    // Create front face with front image
    const frontFace = document.createElement('div');
    frontFace.classList.add('image-face', 'front');
    const frontImg = document.createElement('img');
    frontImg.src = imageData.front;
    frontImg.alt = "Front Image";
    frontFace.appendChild(frontImg);

    // Create back face with back image
    const backFace = document.createElement('div');
    backFace.classList.add('image-face', 'back');
    const backImg = document.createElement('img');
    backImg.src = imageData.back;
    backImg.alt = "Back Image";
    backFace.appendChild(backImg);

    // Add both faces to the page
    page.appendChild(frontFace);
    page.appendChild(backFace);
    flipbook.appendChild(page);

    addFlipEffect(page);
  }

  function createCardPage(frontText, backText, index) {
    const page = document.createElement('div');
    page.classList.add('page', `color-${index % 5}`); // Different colors for each card

    const front = document.createElement('div');
    front.classList.add('card-face', 'front');
    front.textContent = frontText;

    const back = document.createElement('div');
    back.classList.add('card-face', 'back');
    back.textContent = backText;

    page.appendChild(front);
    page.appendChild(back);
    flipbook.appendChild(page);

    addFlipEffect(page);
  }

  function addFlipEffect(page) {
    page.addEventListener('mouseenter', () => page.classList.add('flipped'));
    page.addEventListener('mouseleave', () => page.classList.remove('flipped'));
  }

  function loadFlipbook() {
    flipbook.innerHTML = ""; // Clear existing content

    if (currentMode === "image") {
      images.forEach(img => createImagePage(img));
    } else {
      cards.forEach((card, index) => createCardPage(card.front, card.back, index));
    }
  }

  // Mode switching
  imageBtn.addEventListener('click', () => {
    currentMode = "image";
    loadFlipbook();
  });

  cardBtn.addEventListener('click', () => {
    currentMode = "card";
    loadFlipbook();
  });

  loadFlipbook(); // Load default mode
});