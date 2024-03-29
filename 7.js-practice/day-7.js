// Create a promise
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        // Resolve the promise if the random number is greater than 0.5
        resolve(randomNumber);
      } else {
        // Reject the promise if the random number is less than or equal to 0.5
        reject(new Error('Random number is too small'));
      }
    }, 1000);
  });
  
  // Consuming the promise
  myPromise.then(
    // Success handler
    (result) => {
      console.log('Promise resolved with result:', result);
    },
    // Error handler
    (error) => {
      console.error('Promise rejected with error:', error);
    }
  );
  let promise=fetch("https://sampleapis.com/");
  console.log(promise);
  