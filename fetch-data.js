async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear "Loading user data..."
    dataContainer.innerHTML = '';

    // Create list
    const userList = document.createElement('ul');

    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });

    dataContainer.appendChild(userList);
  } catch (error) {
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
  }
}

// Run after HTML has loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
