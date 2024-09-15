AOS.init();

const btn = document.getElementById("btn");
const icon = document.getElementById("icon");
let openBtn = false;

function toggleIcon() {
  openBtn = !openBtn;
  icon.classList = openBtn ? "bi bi-list-nested" : "bi bi-list";
}

btn.addEventListener('click', toggleIcon);