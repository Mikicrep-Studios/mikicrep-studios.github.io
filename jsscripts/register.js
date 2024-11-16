function sumbit() {
    const user = document.getElementById('user').value.toLowerCase();
    const pass = document.getElementById('pass').value;
    const passconfirm = document.getElementById('passconfirm').value;
    const passhash = CryptoJS.SHA256(pass).toString(CryptoJS.enc.Hex);

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