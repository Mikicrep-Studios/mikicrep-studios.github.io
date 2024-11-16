function sumbit() {
    let user = document.getElementById('user').value.toLowerCase();
    let pass = document.getElementById('pass').value;
    let passconfirm = document.getElementById('passconfirm').value;

    if(pass == passconfirm) {
      const callbackName = "handleResponse";
      const url = `${apiSite}register/${user}/${pass}?callback=${callbackName}`;
  
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