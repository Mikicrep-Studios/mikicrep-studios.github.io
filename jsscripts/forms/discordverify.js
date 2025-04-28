function sendcode() {
    const username = document.getElementById('sendusername').value.toLowerCase();
    const discordID = document.getElementById('sendcode').value;
  
    const url = `${apiSite}linkdiscord/${username}/${discordID}`;
  
    fetch(url)
      .then(response => {
        if (response.ok) {
          console.log("Request sent successfully!");
        } else {
          console.error(`Request failed with status: ${response.status}`);
        }
      })
      .catch(error => {
        console.error("An error occurred:", error);
      });
  }
  
  function sendcodelogin() {
    const username = document.getElementById('user').value.toLowerCase();
    const discordID = document.getElementById('sendcode').value;
  
    const url = `${apiSite}linkdiscord/${username}/${discordID}`;
  
    fetch(url)
      .then(response => {
        if (response.ok) {
          console.log("Request sent successfully!");
        } else {
          console.error(`Request failed with status: ${response.status}`);
        }
      })
      .catch(error => {
        console.error("An error occurred:", error);
      });
  }
  