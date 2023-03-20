const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmitLoginForm);

function onSubmitLoginForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    alert("Всі поля повинні бути заповнені");
    return;
  }

  const data = {
    email: email.value,
    password: password.value,
  };

  console.log(data);

  event.currentTarget.reset();
}
