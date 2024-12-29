const username = localStorage.getItem('user');
const password = localStorage.getItem('pass');

if (username && password) {
  document.getElementById('user').value = username.toLowerCase();
  document.getElementById('pass').value = password;
  
  sumbitwr();
}
else {
  document.getElementById('logout').remove();
}

function sumbitwr() {
  const user = document.getElementById('user').value.toLowerCase();
  const pass = document.getElementById('pass').value;
  const passhash = CryptoJS.SHA256(pass).toString(CryptoJS.enc.Hex);

  const url = `${apiSite}login/${user}/${passhash}`;

  // Use fetch to make a request to the server
  fetch(url)
    .then(response => response.json())  // Parse the response as JSON
    .then(data => {
      console.log("Response received:", data);  // Log the full response

      if (Array.isArray(data) && data.length > 0) {
        // If login is successful, display the user's information
        const result = `Username: ${user}, ID: ${data[0].id}, Notes: ${data[0].notes}`;
        document.getElementById('result').textContent = result;

        localStorage.setItem('user', user);
        localStorage.setItem('pass', pass);

        document.getElementById('login').remove(); // User doesnt need login button because successful login

      } else {
        // If login is unsuccessful, display a message and clear the credentials
        softClearCredentials();
        document.getElementById('result').textContent = "No matching user found.";

        document.getElementById('logout').remove(); // User doesnt need logout button because unsuccessful login
      }
    })
    .catch(error => {
      console.error("Error occurred:", error);
      document.getElementById('result').textContent = "An error occurred while processing the login.";
    });
}

function sumbit() {
  const user = document.getElementById('user').value.toLowerCase();
  const pass = document.getElementById('pass').value;
  
  localStorage.setItem('user', user);
  localStorage.setItem('pass', pass);

  location.reload(true);
}

function linkacc() {
  const user = document.getElementById('user').value.toLowerCase();
  const pass = document.getElementById('pass').value;
  const passhash = CryptoJS.SHA256(pass).toString(CryptoJS.enc.Hex);
  const captcha = document.getElementById('captcha').value;

  const url = `${apiSite}updatediscord/${user}/${passhash}/${captcha}`;

  // Use fetch to make a request to the server
  fetch(url)
    .then(response => response.json())  // Parse the response as JSON
    .then(data => {
      console.log("Response received:", data);  // Log the full response

      // Display the message in the paragraph with id 'accresult'
      document.getElementById('accresult').textContent = data.message;
    })
    .catch(error => {
      console.error("Error occurred:", error);
      document.getElementById('accresult').textContent = "An error occurred while processing the data.";
    });
}

function softClearCredentials() {
  localStorage.removeItem('user');
  localStorage.removeItem('pass');
}

function clearCredentials() {
  localStorage.removeItem('user');
  localStorage.removeItem('pass');

  location.reload(true);
}
