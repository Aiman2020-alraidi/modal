"use strict";
const btnOpen = document.querySelector(".btn-open");
const overLay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

btnOpen.addEventListener("click", (e) => {
  overLay.classList.add("visible");
});

closeBtn.addEventListener("click", (e) => {
  overLay.classList.remove("visible");
});
