"use strict";

// Elements
const shoes = document.querySelectorAll(".shoes");
const mainImg = document.querySelector(".main-img");

const plusNumberOfShoes = document.querySelector(".plus");
const minusNumberOfShoes = document.querySelector(".minus");
const numberOfShoes = document.querySelector(".number");

const avatarBtn = document.querySelector(".avatar");
const body = document.querySelector(".container");

const cart = document.querySelector(".cart");
const addToCart = document.querySelector(".add-to-cart");
const emptyCart = document.querySelector(".empty-cart");
const cartInfo = document.querySelector(".cart-info");

// cart info cal element
const normalPrice = document.querySelector(".normal-price");
const numOfItemCart = document.querySelector(".num-of-item-cart");
const totalPrice = document.querySelector(".total-price");
const deleteCartInfo = document.querySelector(".delete");

const cartNumDiv = document.querySelector(".cart-num");
const cartNumIndex = document.querySelector(".cart-num-index");

// Changes main image
shoes.forEach((shoe) =>
  shoe.addEventListener("click", function () {
    const shoeSrc = shoe.getAttribute("src");
    mainImg.setAttribute("src", shoeSrc);
  })
);

// number of shoe
plusNumberOfShoes.addEventListener("click", function () {
  numberOfShoes.textContent++;
  totalPrice.textContent = totalPriceCal(
    normalPrice.textContent,
    numberOfShoes.textContent
  );

  numOfItemCart.textContent = numberOfShoes.textContent;
});

minusNumberOfShoes.addEventListener("click", function () {
  if (numberOfShoes.textContent >= 2) numberOfShoes.textContent--;

  totalPrice.textContent = totalPriceCal(
    normalPrice.textContent,
    numberOfShoes.textContent
  );

  numOfItemCart.textContent = numberOfShoes.textContent;
});

// cart
avatarBtn.addEventListener("click", function () {
  if (cart.style.display === "none") {
    cart.style.display = "flex";
  } else {
    cart.style.display = "none";
  }
});

let html = "<p>swnxn</p>";

// Add to cart
addToCart.addEventListener("click", function () {
  emptyCart.style.display = "none";
  cartInfo.style.opacity = "100";
  cartNumIndex.textContent = numberOfShoes.textContent;
  cartNumDiv.style.display = "flex";
});

// cart info cal
const totalPriceCal = function (normalPrice, numberOfShoes) {
  const total = normalPrice * numberOfShoes;
  return total;
};

deleteCartInfo.addEventListener("click", function () {
  emptyCart.style.display = "flex";
  cartInfo.style.opacity = "0";
  cartNumDiv.style.display = "none";
});
