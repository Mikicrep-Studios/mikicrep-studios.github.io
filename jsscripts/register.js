async function hashToSHA256(input) {
  const encoder = new TextEncoder(); // Encode the input to Uint8Array
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data); // Hash the data
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // Convert buffer to byte array
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // Convert bytes to hex
  return hashHex;
}

async function sumbit() {
    const user = document.getElementById('user').value.toLowerCase();
    const pass = document.getElementById('pass').value;
    const passconfirm = document.getElementById('passconfirm').value;
    const passhash = await hashToSHA256(pass);

    if(pass == passconfirm) {
      const callbackName = "handleResponse";
      const url = `${apiSite}register/${user}/${passhash}?callback=${callbackName}`;
  
      // Define the callback function to handle the response
      window[callbackName] = function () {
        console.log("Request sent, no data expected in response.");
      };
    
      // Create a script tag to make the JSONP request
      const script = document.createElement('script');
      script.src = url;
      document.body.appendChild(script);
    
      // Clean up the script tag after sending the request
      script.onload = function () {
        document.body.removeChild(script);
        delete window[callbackName];
      };
  }
}