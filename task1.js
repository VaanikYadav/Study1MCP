document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.getElementById('myButton');
    const myincomplete1 = document.getElementById('myincomplete1');
  
    myButton.addEventListener('click', function() {
      const timestamp = new Date().toLocaleTimeString('en-US', { hour12: true });
  
      const sheetDbEndpoint = 'https://sheetdb.io/api/v1/ccjnqvvl10qzb'; // Replace with your SheetDB endpoint
      const apiKey = 'ccjnqvvl10qzb'; // Replace with your SheetDB API key
  
      const data = {
        Task1: timestamp
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
  
    myincomplete1.addEventListener('click', function() {
      const timestamp = new Date().toLocaleTimeString('en-US', { hour12: true });
  
      const sheetDbEndpoint = 'https://sheetdb.io/api/v1/ccjnqvvl10qzb'; // Replace with your SheetDB endpoint
      const apiKey = 'ccjnqvvl10qzb'; // Replace with your SheetDB API key
  
      const data = {
        Incomplete1: timestamp
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
  });
  