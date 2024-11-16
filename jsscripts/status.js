const apiStatusElement = document.getElementById('MSAPI');

    function checkAPIStatus() {
      fetch(`${apiSite}status`, {
        method: 'GET',
      })
        .then(response => {
          if (response.ok) {
            apiStatusElement.textContent = "Mikicrep Studios API: UP";
            apiStatusElement.classList.remove('down');
            apiStatusElement.classList.add('up');
          } else {
            throw new Error(`API returned status: ${response.status}`);
          }
        })
        .catch(error => {
          console.error("Error checking API status:", error);
          apiStatusElement.textContent = "Mikicrep Studios API: DOWN";
          apiStatusElement.classList.remove('up');
          apiStatusElement.classList.add('down');
        });
    }

    // Check the API status when the page loads
    document.addEventListener('DOMContentLoaded', checkAPIStatus);