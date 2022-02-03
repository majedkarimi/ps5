const btnOpenProfile = document.querySelector(".image-header");
const boxProfile = document.querySelector(".show-sub");
btnOpenProfile.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("acition");
  if (boxProfile.classList.contains("show")) {
    boxProfile.classList.remove("show");
  } else {
    boxProfile.classList.add("show");
  }
});
