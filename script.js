const basket = document.getElementById("basket");
const scoreText = document.getElementById("score");

let basketX = 100;
let score = 0;

// USER moves basket (mouse)
document.addEventListener("mousemove", (e) => {
  basketX = e.clientX - 30;
  basket.style.left = basketX + "px";
});

// USER moves basket (keyboard)
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") basketX -= 40;
  if (e.key === "ArrowRight") basketX += 40;
  basket.style.left = basketX + "px";
});

// Falling hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(heart);

  let y = 0;
  const fall = setInterval(() => {
    y += 6;
    heart.style.top = y + "px";

    const b = basket.getBoundingClientRect();
    const h = heart.getBoundingClientRect();

    if (h.bottom >= b.top && h.left >= b.left && h.right <= b.right) {
      score++;
      scoreText.innerText = "Score: " + score;
      heart.remove();
      clearInterval(fall);
    }

    if (y > window.innerHeight) {
      heart.remove();
      clearInterval(fall);
    }
  }, 30);
}

setInterval(createHeart, 800);
