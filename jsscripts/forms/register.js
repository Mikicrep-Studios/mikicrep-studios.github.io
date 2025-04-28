function sumbit() {
  const user = document.getElementById('user').value.toLowerCase();
  const pass = document.getElementById('pass').value;
  const passconfirm = document.getElementById('passconfirm').value;
  const captchacode = document.getElementById('vercode').value;

  const passhash = CryptoJS.SHA256(pass).toString(CryptoJS.enc.Hex);

  if (pass == passconfirm) {
      const url = `${apiSite}register/${user}/${passhash}/${captchacode}`;

      // Send the request using fetch
      fetch(url)
          .then(response => response.json()) // Parse JSON response
          .then(data => {
              console.log("Response received:", data);
              // Display the response message in the paragraph with ID 'result'
              document.getElementById("result").textContent = data.message || "No message in response.";
          })
          .catch(error => {
              console.error("Error:", error);
              document.getElementById("result").textContent = "An error occurred. Please try again.";
          });
  } else {
      document.getElementById("result").textContent = "Passwords do not match!";
  }
}