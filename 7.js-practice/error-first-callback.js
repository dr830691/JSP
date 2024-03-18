const fs = require('fs');

fs.readFile('example.txt', 'utf8', function(err, data) {
  if (err) {
    console.error('Error reading file:', err);
    return; // Handle the error
  }
  console.log('File content:', data);

});
// try to use callback and genereate to error to check error callback function
function fetchDataFromAPI(callback) {
  // Simulate an asynchronous API request
  setTimeout(() => {
    const success = Math.random() < 0.8; // 80% chance of success
    if (success) {
      const data = { name: 'John', age: 30 };
      callback(null, data); // Call the callback with data on success
    } else {
      const error = new Error('Failed to fetch data from API');
      callback(error, null); // Call the callback with error on failure
    }
  }, 1000); // Simulate a 1-second delay
}

// Usage: Fetch data from API and handle errors using a callback function
fetchDataFromAPI((err, data) => {
  if (err) {
    console.error('Error fetching data:', err.message);
    
  } else {
    console.log('Fetched data:', data);
  }
});
