// Page references
const landing = document.getElementById('landing');
const loginPage = document.getElementById('loginPage');
const signupPage = document.getElementById('signupPage');
const dashboard = document.getElementById('dashboard');

// Buttons
const loginPageBtn = document.getElementById('loginPageBtn');
const signupPageBtn = document.getElementById('signupPageBtn');
const backToLanding1 = document.getElementById('backToLanding1');
const backToLanding2 = document.getElementById('backToLanding2');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const logoutBtn = document.getElementById('logoutBtn');

// Inputs
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');
const signupUsername = document.getElementById('signupUsername');
const signupPassword = document.getElementById('signupPassword');
const welcome = document.getElementById('welcome');

// Utility: page switcher
function show(page) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.add('hidden');
    p.classList.remove('active');
  });
  page.classList.remove('hidden');
  page.classList.add('active');
}

// Navigation
loginPageBtn.onclick = () => show(loginPage);
signupPageBtn.onclick = () => show(signupPage);
backToLanding1.onclick = () => show(landing);
backToLanding2.onclick = () => show(landing);

// Sign Up
signupBtn.onclick = () => {
  const username = signupUsername.value.trim();
  const password = signupPassword.value.trim();

  if (!username || !password) {
    alert('Please fill out all fields.');
    return;
  }

  // Save account
  const user = { username, password };
  localStorage.setItem('user', JSON.stringify(user));

  alert('Account created successfully! You can now log in.');
  show(loginPage);
};

// Login
loginBtn.onclick = () => {
  const username = loginUsername.value.trim();
  const password = loginPassword.value.trim();
  const savedUser = JSON.parse(localStorage.getItem('user'));

  if (!savedUser) {
    alert('No account found. Please sign up first.');
    return;
  }

  if (username === savedUser.username && password === savedUser.password) {
    welcome.innerText = `Welcome, ${username} 👋`;
    show(dashboard);
  } else {
    alert('Incorrect username or password.');
  }
};

// Logout
logoutBtn.onclick = () => {
  show(landing);
};
