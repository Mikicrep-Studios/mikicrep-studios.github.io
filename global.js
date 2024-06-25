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
