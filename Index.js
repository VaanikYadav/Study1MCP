document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.getElementById('myButton');
    const myButton1 = document.getElementById('myButton1');
  
    myButton.addEventListener('click', function() {
      const timestamp = new Date().toLocaleTimeString('en-US', { hour12: true });
  
      const sheetDbEndpoint = 'https://sheetdb.io/api/v1/tc064nul71i0e'; // Replace with your SheetDB endpoint
      const apiKey = 'tc064nul71i0e'; // Replace with your SheetDB API key
  
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
  
    myButton1.addEventListener('click', function() {
      const timestamp2 = new Date().toLocaleTimeString('en-US', { hour12: true });
  
      const sheetDbEndpoint = 'https://sheetdb.io/api/v1/tc064nul71i0e'; // Replace with your SheetDB endpoint
      const apiKey = 'tc064nul71i0e'; // Replace with your SheetDB API key
  
      const data = {
        Task2: timestamp2
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
  