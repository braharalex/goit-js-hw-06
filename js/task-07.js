const rangeEl = document.querySelector("#font-size-control"),
  textEl = document.querySelector("#text");

rangeEl.addEventListener("input", onChangeFontSize);

function onChangeFontSize(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
