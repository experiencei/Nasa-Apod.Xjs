 

 // NASA API
const count = 10;
const apiKey = 'DEMO_KEY';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

// Get 10 images from NASA API
async function getNasaPictures() {
    // Show Loader
    loader.classList.remove('hidden');
    try {
      const response = await fetch(apiUrl);
      resultsArray = await response.json();
      updateDOM('results');
    } catch (error) {
      // Catch Error Here
    }
  }

  // On Load
getNasaPictures();
