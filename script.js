"use strict";
const input = document.querySelector(".input");
const errImage = document.querySelector(".error-img");
const button = document.querySelector(".btn");
const errMessage = document.querySelector(".error-message");

button.addEventListener("click", function (e) {
  e.preventDefault();
  let inputText = input.value;
  console.log(inputText);

  if (!inputText.includes("@") || inputText.length === 0) {
    errImage.classList.remove("hidden") ||
      errMessage.classList.remove("hidden");
  } else if (
    inputText.includes("@") ||
    !errImage.classList.contains("hidden")
  ) {
    errImage.classList.add("hidden") || errMessage.classList.add("hidden");
    //  ||
    // (inputText = "");
  }

  // else if (inputText.includes("@") || errImage.classList.contains("hidden")) {
  //   inputText = "";
  // }
});
