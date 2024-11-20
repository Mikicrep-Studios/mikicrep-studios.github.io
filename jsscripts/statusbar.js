const username = localStorage.getItem('user');
const password = localStorage.getItem('pass');

if (username && password) {
    document.getElementById('logina').textContent = "My Account";

    document.getElementById('register').remove();
}
else {
  //document.getElementById('logout').remove();
}