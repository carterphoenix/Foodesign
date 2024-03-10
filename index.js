document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('welcomeModal');
    const closeModalBtn = document.querySelector('.close');

    // Check if the modal has been displayed in this session
    const isModalDisplayed = sessionStorage.getItem('isModalDisplayed');

    if (!isModalDisplayed) {
        // Display the modal if it hasn't been displayed in this session
        modal.style.display = 'block';

        // Close the modal when the close button is clicked
        closeModalBtn.addEventListener('click', function () {
            modal.style.display = 'none';
            // Mark the modal as displayed in this session
            sessionStorage.setItem('isModalDisplayed', 'true');
        });

        // Close the modal if the user clicks outside the modal content
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                // Mark the modal as displayed in this session
                sessionStorage.setItem('isModalDisplayed', 'true');
            }
        });
    }
});


  // Function to fetch and display a random Unsplash image
  const fetchRandomIndustrialKitchenImage = () => {
    const apiUrl = 'https://api.unsplash.com/photos/random';
    const accessKey = 'a0isH5X57OfJfPuTxmPnJJmQwlB3iG04ytUDcDZMwVs'; 
    const query = 'restaurant kitchen design '; 

    fetch(`${apiUrl}?client_id=${accessKey}&query=${query}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Unable to fetch a random industrial kitchen image. Please try again later.');
        }
        return response.json();
      })
      .then(data => {
        const industrialKitchenImagesContainer = document.getElementById('industrialKitchenImages');
        industrialKitchenImagesContainer.innerHTML = ''; // Clear existing content
        const img = document.createElement('img');
        img.src = data.urls.regular;
        img.alt = data.links.html;
        industrialKitchenImagesContainer.appendChild(img);
      })
      .catch(error => {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorMessage);
      });
  };

  // Attach the function to the page load event
  window.onload = fetchRandomIndustrialKitchenImage;