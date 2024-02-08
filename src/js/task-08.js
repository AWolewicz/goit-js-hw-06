const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailForm = loginForm.elements.email.value.trim();
  const passwordForm = loginForm.elements.password.value.trim();
  const loginObject = {
    email: emailForm,
    password: passwordForm
  };

  if (!emailForm || !passwordForm) {
    alert("All fields are required!");
  };

  console.log(loginObject);
  loginForm.reset();
});