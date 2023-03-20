function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  nameColor: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
};
console.log(refs.widget);

refs.changeColorBtn.addEventListener("click", changeBgColor);

function changeBgColor(event) {
  const color = getRandomHexColor();
  refs.nameColor.textContent = color;
  document.body.style.backgroundColor = color;
}
