// add to cart

let productsCountEl = document.getElementById("product-count");
let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");

// addToCartBtns.addEventListener("click", function () {
// alert("hello world");
// });
// addToCartBtns.addEventListener("click", function () {
//   alert("hello world 2222");
// });

addToCartBtns.forEach((item) =>
  item.addEventListener("click", function () {
    // let prevProductsCount = +productsCountEl.textContent;
    // productsCountEl.textContent = prevProductsCount + 1;
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  })
);

// **********************************************************************************************************

// // change like state

let likeBtns = document.querySelectorAll(".like");
console.log(likeBtns);

likeBtns.forEach((item) =>
  item.addEventListener("click", function () {
    // if (item.classList.contains("liked")) {
    //   item.classList.remove("liked");
    // } else {
    //   item.classList.add("liked");
    // }
    item.classList.toggle("liked");
  })
);

// **********************************************************************************************

//  more details

let moreDetailsBtns = document.querySelectorAll(".btn-more-details");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector("btn-close");

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));
btnClose.addEventListener("click", closeModal);

// **************************************************************************************

// slider
$(".your-class").slick();
