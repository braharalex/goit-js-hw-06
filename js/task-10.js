function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  numberOfBoxes: document.querySelector("input[type='number']"),
  createBoxesBtn: document.querySelector("button[data-create]"),
  destroyBoxesBtn: document.querySelector("button[data-destroy]"),
  boxesWrap: document.querySelector("#boxes"),
};

refs.createBoxesBtn.addEventListener("click", (event) => {
  const amount = refs.numberOfBoxes.value;

  if (amount <= 0) {
    alert("кількість не може бути менше 1");
    return;
  }

  createBoxes(amount);
});

refs.destroyBoxesBtn.addEventListener("click", destroyBoxes);

let size = 30;

function createBoxes(amount) {
  let collection = "";

  for (let i = 0; i < amount; i += 1) {
    collection += `
      <div style="width:${size}px; height:${size}px;background-color:${getRandomHexColor()}"></div>
    `;

    size += 10;
  }

  refs.boxesWrap.insertAdjacentHTML("beforeEnd", collection);
}

function destroyBoxes() {
  refs.boxesWrap.innerHTML = "";
  size = 30;
}
