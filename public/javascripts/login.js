const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  console.log(`username: ${username} .. password: ${password}`);

  const options = {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({name: username, password}),
  };

  fetch('http://cfcfnapppwsh.azurewebsites.net/api/testHTTP', options)
    .then((response) => response.json())
    .then((data) => {
      const {name, password} = JSON.parse(data);
      alert(`name: ${name}, password: ${password}`);
    })
    .catch((err) => {
      alert(err);
    })
    
});
