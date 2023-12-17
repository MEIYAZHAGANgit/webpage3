// Function to retrieve URL from the API
function fetchUrl() {
    // Replace the URL with the actual API endpoint
    const apiUrl = 'https://jsonplaceholder.typicode.com/photos/1';

    return fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => data.url);
  }

  // Function to open the URL in a new tab
  function openUrl(url) {
    window.open(url, '_blank');
  }

  // Event listener for the button click
  document.getElementById('getLinkBtn').addEventListener('click', function () {
    fetchUrl()
      .then(url => openUrl('https://www.thenewsapi.com/'))
      .catch(error => console.error('Error during fetch:', error));
  });