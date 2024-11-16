// Stuff for statusbar to work
window.addEventListener('message', function(event) {

    // Update main page URL based on message
    if (event.data === 'index') {
        window.location.href = '/';
    }
    if (event.data === 'projects') {
        window.location.href = '/projects.html';
    }
    if (event.data === 'artgallery') {
        window.location.href = '/artgallery.html';
    }
});

var apiSite = "https://194.163.137.150:6969/"
//var apiSite = "https://127.0.0.1:6969/" // Home sweet home ;)