function showRegister() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('register-form').style.display = 'block';
  document.getElementById('form-title').innerText = 'Register';
}

function showLogin() {
  document.getElementById('register-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('form-title').innerText = 'Login';
}

function register() {
  let username = document.getElementById('register-username').value;
  let password = document.getElementById('register-password').value;
  let message = document.getElementById('register-message');

  if (username === '' || password === '') {
    message.textContent = 'Please fill all fields';
    return;
  }

  if (localStorage.getItem(username)) {
    message.textContent = 'User already exists';
    return;
  }

  localStorage.setItem(username, password);
  message.style.color = 'green';
  message.textContent = 'Registration successful!';
}

function login() {
  let username = document.getElementById('login-username').value;
  let password = document.getElementById('login-password').value;
  let message = document.getElementById('login-message');

  let storedPassword = localStorage.getItem(username);

  if (storedPassword === null) {
    message.textContent = 'User not found';
    return;
  }

  if (password !== storedPassword) {
    message.textContent = 'Incorrect password';
    return;
  }

  document.getElementById('auth-container').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';
  document.getElementById('user-name').textContent = username;
}

function logout() {
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('auth-container').style.display = 'block';
  document.getElementById('login-message').textContent = '';
  document.getElementById('register-message').textContent = '';
  showLogin();
}
