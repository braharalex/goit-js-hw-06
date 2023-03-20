let counterValue = 0;
const refs = {
  decrementBtn: document.querySelector("button[data-action=decrement]"),
  incrementBtn: document.querySelector("button[data-action=increment]"),
  valueSpan: document.querySelector("#value"),
};

refs.decrementBtn.addEventListener("click", (event) => {
  counterValue -= 1;
  refs.valueSpan.textContent = counterValue;
});

refs.incrementBtn.addEventListener("click", (event) => {
  counterValue += 1;
  refs.valueSpan.textContent = counterValue;
});
