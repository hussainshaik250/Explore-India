const readMoreButtons = document.querySelectorAll(".read-more");

readMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const moreInfo = button.nextElementSibling;
    moreInfo.classList.toggle("hidden");
    button.textContent = moreInfo.classList.contains("hidden") ? "Read More" : "Read Less";
  });
});
