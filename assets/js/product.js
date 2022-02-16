let promo1 = document.querySelector(".promo1");
let promo2 = document.querySelector(".promo2");
let promo3 = document.querySelector(".promo3");
let grande = document.querySelector(".bebida");

promo1.addEventListener("click", () => {
  grande.src = promo1.src;
});

promo2.addEventListener("click", () => {
  grande.src = promo2.src;
});

promo3.addEventListener("click", () => {
  grande.src = promo3.src;
});
