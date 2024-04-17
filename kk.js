document.getElementById("btn-no").addEventListener("click", function () {
  document.location = "./prank.html";
});

const msovr = document.getElementById("btn-yes");
msovr.addEventListener("mouseover", function () {
  msovr.style.left = `${0 + Math.random() * (window.innerWidth + 1 - 110)}px`;
  msovr.style.top = `${0 + Math.random() * (window.innerHeight + 1 - 110)}px`;
});
