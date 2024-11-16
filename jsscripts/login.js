function sumbit() {
  const user = document.getElementById('user').value.toLowerCase();
  const pass = document.getElementById('pass').value;

  const callbackName = "handleResponse";
  const url = `${apiSite}login/${user}/${pass}?callback=${callbackName}`;

  // Define the callback function to handle the response
  window[callbackName] = function (data) {
    console.log("Response received:", data);  // Log the full response

    if (Array.isArray(data) && data.length > 0) {
      const result = `Username: ${user}, ID: ${data[0].id}, Notes: ${data[0].notes}`;
      document.getElementById('result').textContent = result;
    } else {
      document.getElementById('result').textContent = "No matching user found.";
    }

    // Clean up: Remove the script tag and delete the callback function
    document.body.removeChild(script);
    delete window[callbackName];
  };

  // Create a script tag to make the request
  const script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
}
