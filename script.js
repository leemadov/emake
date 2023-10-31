const registerLink = document.querySelector('#register-link'); //sign up link
const loginLink = document.querySelector('#login-link'); // sign in link
const registrationForm = document.querySelector('.registration-form');
const loginForm = document.querySelector('.login-form');

// event listeners

//sign up link clicked
registerLink.addEventListener('click', ()=>{
  registrationForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
});

//sign in link clicked
loginLink.addEventListener('click', ()=>{
  loginForm.classList.remove('hidden');
  registrationForm.classList.add('hidden');
});
