const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const el = event.currentTarget;
  if (Number(el.dataset.length) === el.value.length) {
    el.classList.add("valid");
    el.classList.remove("invalid");
  } else {
    el.classList.add("invalid");
    el.classList.remove("valid");
  }
}
