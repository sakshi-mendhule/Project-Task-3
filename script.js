// Toggle menu visibility
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Surprise button functionality
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseMsg = document.getElementById('surpriseMsg');

surpriseBtn.addEventListener('click', () => {
  surpriseMsg.textContent = '🎉 Surprise! You clicked the button!';
  surpriseMsg.classList.remove('hidden');
  // Animate the message opacity
  surpriseMsg.style.opacity = 0;
  let opacity = 0;
  const fadeIn = setInterval(() => {
    opacity += 0.05;
    surpriseMsg.style.opacity = opacity;
    if (opacity >= 1) clearInterval(fadeIn);
  }, 30);
});

// Form validation and submission
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formSuccess = document.getElementById('formSuccess');

function validateEmail(email) {
  // Simple email regex
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let valid = true;

  // Reset errors
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  formSuccess.classList.add('hidden');

  // Validate name
  if (nameInput.value.trim().length < 3) {
    nameError.textContent = 'Name must be at least 3 characters.';
    valid = false;
  }

  // Validate email
  if (!validateEmail(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    valid = false;
  }

  // Validate message
  if (messageInput.value.trim().length < 10) {
    messageError.textContent = 'Message must be at least 10 characters.';
    valid = false;
  }

  if (valid) {
    // Simulate form submission success
    form.reset();
    formSuccess.classList.remove('hidden');
  }
});