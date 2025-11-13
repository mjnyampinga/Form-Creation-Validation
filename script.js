document.addEventListener('DOMContentLoaded', () => {
  // 1) select form and feedback div
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  // 2) submit handler
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent real submit

    // 3) get and trim values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // 4) validation state
    let isValid = true;
    const messages = [];

    // Username: at least 3 chars
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters long.');
    }

    // Email: must include both '@' and '.'
    if (!(email.includes('@') && email.includes('.'))) {
      isValid = false;
      messages.push('Email must include "@" and "." characters.');
    }

    // Password: at least 8 chars
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters long.');
    }

    // 5) show feedback
    feedbackDiv.style.display = 'block';
    if (isValid) {
      feedbackDiv.textContent = 'Registration successful!';
      feedbackDiv.style.color = '#28a745'; // green
    } else {
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = '#dc3545'; // red
    }
  });
});
