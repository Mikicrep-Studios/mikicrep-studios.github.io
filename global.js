// Stuff for statusbar to work
window.addEventListener('message', function(event) {

    // Update main page URL based on message
    if (event.data === 'index') {
        window.location.href = '/';
    }
    if (event.data === 'a40gallery') {
        window.location.href = '/a40gallery.html';
    }
});
