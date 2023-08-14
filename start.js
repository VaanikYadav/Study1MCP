document.addEventListener('DOMContentLoaded', function() {
    const myStart = document.getElementById('myStart');
    
    myStart.addEventListener('click', function() {
      const timestamp = new Date().toLocaleTimeString('en-US', { hour12: true });
  
      const sheetDbEndpoint = 'https://sheetdb.io/api/v1/ccjnqvvl10qzb'; // Replace with your SheetDB endpoint
      const apiKey = 'ccjnqvvl10qzb'; // Replace with your SheetDB API key
  
      const data = {
        Start: timestamp
      };
  
      fetch(`${sheetDbEndpoint}?api_key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(result => {
        console.log('Data sent to SheetDB:', result);
      })
      .catch(error => {
        console.error('Error sending data to SheetDB:', error);
      });
    });