function sumbit() {
  const user = document.getElementById('user').value.toLowerCase();
  const pass = document.getElementById('pass').value;

  const postdata = {
    username: '',
    password: ''
  }; // TODO
  
  url = apiSite + "login/" + user + "/" + pass;

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postdata)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    return response.json();
  })
  .then(data => {
    const result = "Username: " + user + " ID: " + data[0].id + ", Notes: " + data[0].notes;
    console.log(data);
    document.getElementById('result').textContent = result;
  })
}