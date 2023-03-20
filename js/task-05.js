const inputEl = document.querySelector("#name-input"),
  outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputName);

function onInputName(event) {
  const value = event.currentTarget.value;

  outputEl.textContent = !value ? "Anonymous" : value;
}
